import React, { useState, useEffect, useCallback, useRef } from 'react';
import NostrRelayPool from '../services/NostrRelayPool';

const AngorPosts = () => {
  const [posts, setPosts] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [isLoading, setIsLoading] = useState(false);
  
  const ndkRef = useRef(null);
  const subscriptionRef = useRef(null);

  // Initialize NDK instance
  const initializeNDK = useCallback(async () => {
    try {
      const relays = await fetch('/nostr/relays.json').then(res => res.json());
      await NostrRelayPool.initialize(relays.relays);
      setConnectionStatus('connected');
      return true;
    } catch (error) {
      console.error('NDK initialization error:', error);
      setConnectionStatus('error');
      return false;
    }
  }, []);

  // Handle metadata events
  const processMetadata = useCallback((event) => {
    try {
      const content = JSON.parse(event.content);
      setMetadata(prev => ({
        ...prev,
        [event.pubkey]: {
          name: content.name || '',
          picture: content.picture || '/avatar-placeholder.png',
          nip05: content.nip05 || '',
          about: content.about || ''
        }
      }));
    } catch (error) {
      console.error('Metadata processing error:', error);
    }
  }, []);

  // Process note events
  const processNote = useCallback((event) => {
    setPosts(prev => {
      if (!prev.some(p => p.id === event.id)) {
        return [...prev, event].sort((a, b) => b.created_at - a.created_at);
      }
      return prev;
    });
  }, []);

  // Fetch posts with NDK
  const fetchPosts = useCallback(async (pubkeys, until = Date.now() / 1000) => {
    const filters = [
      { kinds: [0], authors: pubkeys }, // metadata
      { kinds: [1], authors: pubkeys, until, limit: 20 } // notes
    ];

    try {
      // Close existing subscription if any
      if (subscriptionRef.current) {
        subscriptionRef.current.stop();
      }

      // Create new subscription for real-time updates
      const subscription = NostrRelayPool.createSubscription(filters);
      subscriptionRef.current = subscription;

      subscription.on('event', (event) => {
        if (event.kind === 0) processMetadata(event);
        if (event.kind === 1) processNote(event);
      });

      // Fetch initial events with timeout
      const events = await NostrRelayPool.fetchEvents(filters, { timeout: 5000 });
      events.forEach(event => {
        if (event.kind === 0) processMetadata(event);
        if (event.kind === 1) processNote(event);
      });

    } catch (error) {
      console.error('Fetch error:', error);
    }
  }, [processMetadata, processNote]);

  // Load more posts
  const loadMore = useCallback(async () => {
    setIsLoading(true);
    try {
      const keys = await fetch('/nostr/keys.json').then(res => res.json());
      const pubkeys = keys.map(k => k.nostrPubKey);
      const lastPost = posts[posts.length - 1];
      
      await fetchPosts(pubkeys, lastPost?.created_at);
    } catch (error) {
      console.error('Load more error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [posts, fetchPosts]);

  // Initialize component
  useEffect(() => {
    const initialize = async () => {
      const initialized = await initializeNDK();
      if (initialized) {
        const keys = await fetch('/nostr/keys.json').then(res => res.json());
        const pubkeys = keys.map(k => k.nostrPubKey);
        await fetchPosts(pubkeys);
      }
    };

    initialize();

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.stop();
      }
    };
  }, [initializeNDK, fetchPosts]);

  // Utility functions
  const parseContent = (content) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        if (part.match(/\.(jpeg|jpg|gif|png)$/i)) {
          return <img key={index} src={part} alt="Post content" style={{ maxWidth: '100%', height: 'auto' }} />;
        } else if (part.match(/\.(mp4|webm|ogg)$/i)) {
          return (
            <video key={index} controls style={{ maxWidth: '100%', height: 'auto' }}>
              <source src={part} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          );
        } else {
          return <a key={index} href={part} target="_blank" rel="noopener noreferrer">{part}</a>;
        }
      }
      return part;
    });
  };

  const prettyFormatKey = (key) => {
    return `${key.slice(0, 4)}...${key.slice(-4)}`;
  };

  const dateToString = (unixTimestamp) => {
    return new Date(unixTimestamp * 1000).toLocaleString();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-cyan-700 mb-8">
        Status:
        <span className={`ml-2 text-sm font-normal ${
          connectionStatus === 'connected' ? 'text-green-500' : 
          connectionStatus === 'error' ? 'text-red-500' : 
          'text-gray-500'
        }`}>
          ({connectionStatus})
        </span>
      </h2>

      {posts.length === 0 && (
        <div className="text-center py-8">
          <div className="animate-pulse text-gray-600">Loading posts...</div>
        </div>
      )}

      {connectionStatus === 'error' && (
        <div className="text-center py-8">
          <div className="text-red-600">Failed to connect to relays. Please try again later.</div>
        </div>
      )}

      <div className="space-y-6">
        {posts.map((post, index) => {
          const postMetadata = metadata[post.pubkey] || {};

          return (
            <div key={post.id || index} className="bg-[#cbdde1] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={postMetadata.picture || '/avatar-placeholder.png'}
                    alt="Profile"
                    className="w-12 h-12 rounded-full ring-2 ring-cyan-600 object-cover flex-shrink-0"
                    onError={(e) => { e.target.src = '/avatar-placeholder.png'; }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-semibold text-cyan-700 truncate">
                      {postMetadata.name || prettyFormatKey(post.pubkey)}
                    </p>
                    {postMetadata.nip05 && (
                      <p className="text-sm text-gray-500 truncate">{postMetadata.nip05}</p>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {dateToString(post.created_at)}
                  </div>
                </div>

                <div className="mt-4 prose prose-cyan max-w-none">
                  {parseContent(post.content)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {posts.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300"
          >
            {isLoading ? (
              <>
                <span className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Loading...</span>
                </span>
              </>
            ) : (
              'Load More Posts'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default AngorPosts;
