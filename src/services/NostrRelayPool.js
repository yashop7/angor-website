import NDK from '@nostr-dev-kit/ndk';

class NostrRelayPool {
  constructor() {
    this.ndk = null;
    this.relays = new Map();
    this.connectionPromise = null;
    this.retryAttempts = 0;
    this.maxRetries = 3;
    this.retryDelay = 2000;
  }

  async initialize(relayUrls) {
    if (this.ndk) return this.ndk;

    this.ndk = new NDK({
      explicitRelayUrls: relayUrls,
      enableOutboxModel: true,
      autoConnectUserRelays: true,
    });

    this.connectionPromise = this.connect();
    return this.connectionPromise;
  }

  async connect() {
    try {
      await this.ndk.connect();
      this.retryAttempts = 0;
      return this.ndk;
    } catch (error) {
      if (this.retryAttempts < this.maxRetries) {
        this.retryAttempts++;
        await new Promise(resolve => setTimeout(resolve, this.retryDelay));
        return this.connect();
      }
      throw new Error('Failed to connect to relay pool');
    }
  }

  async ensureConnection() {
    if (!this.ndk) {
      throw new Error('Relay pool not initialized');
    }
    if (this.connectionPromise) {
      await this.connectionPromise;
    }
    return this.ndk;
  }

  async fetchEvents(filters, options = { timeout: 10000 }) {
    await this.ensureConnection();
    
    return new Promise((resolve, reject) => {
      const events = new Set();
      const timeoutId = setTimeout(() => {
        subscription.stop();
        resolve(Array.from(events));
      }, options.timeout);

      const subscription = this.ndk.subscribe(filters, { 
        closeOnEose: false,
        enableOutboxModel: true 
      });

      subscription.on('event', (event) => {
        events.add(event);
      });

      subscription.on('eose', () => {
        clearTimeout(timeoutId);
        subscription.stop();
        resolve(Array.from(events));
      });
    });
  }

  async publish(event) {
    await this.ensureConnection();
    return this.ndk.publish(event);
  }

  createSubscription(filters) {
    if (!this.ndk) {
      throw new Error('Relay pool not initialized');
    }
    return this.ndk.subscribe(filters);
  }

  destroy() {
    if (this.ndk) {
      this.ndk.pool.close();
      this.ndk = null;
    }
  }
}

// Singleton instance
export default new NostrRelayPool();
