import React from 'react';

export const LaunchContent = () => {
  return (
    <div className="text-white py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Angor Platform</h2>
        <p className="text-lg mb-6">
          Angor provides a secure, decentralized platform to bring your project ideas to life. 
          Define your project, attract investment, and manage funding directly on the blockchain.
        </p>
        
        <div className="bg-bgDark3 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 text-primary">Get Started</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://test.angor.io" target="_blank" rel="noopener noreferrer" 
                 className="text-primary hover:text-cyan-300 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                Angor Platform: test.angor.io
              </a>
            </li>
            <li>
              <a href="https://docs.angor.io" target="_blank" rel="noopener noreferrer" 
                 className="text-primary hover:text-cyan-300 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                Documentation: docs.angor.io
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Creating Your Project</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bgDark3 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
              <span className="flex items-center justify-center bg-primary text-bgDark3 rounded-full w-8 h-8 mr-3">1</span>
              Define Your Project
            </h3>
            <p className="ml-11">
              Outline your project details, set clear milestones, and specify your funding goals using our intuitive interface.
            </p>
          </div>
          
          <div className="bg-bgDark3 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
              <span className="flex items-center justify-center bg-primary text-bgDark3 rounded-full w-8 h-8 mr-3">2</span>
              Configure Funding
            </h3>
            <p className="ml-11">
              Set up funding targets and milestone-based payment schedules to build investor confidence.
            </p>
          </div>
          
          <div className="bg-bgDark3 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
              <span className="flex items-center justify-center bg-primary text-bgDark3 rounded-full w-8 h-8 mr-3">3</span>
              Secure on Blockchain
            </h3>
            <p className="ml-11">
              Register your project details immutably on the blockchain using Bitcoin and Nostr for transparency.
            </p>
          </div>
          
          <div className="bg-bgDark3 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
              <span className="flex items-center justify-center bg-primary text-bgDark3 rounded-full w-8 h-8 mr-3">4</span>
              Manage & Engage
            </h3>
            <p className="ml-11">
              Use the Angor dashboard to track investments, communicate progress, and manage your project effectively.
            </p>
          </div>
        </div>

        <div className="bg-bgDark3 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-3 text-primary">What You'll Need</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>A compatible Bitcoin wallet</li>
            <li>Clear project description and milestones</li>
            <li>Project banner and profile images</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Why Use Angor?</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bgDark3 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary">Global Reach</h3>
            <p>
              Access a worldwide network of potential investors without intermediaries.
            </p>
          </div>
          
          <div className="bg-bgDark3 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary">Trust & Transparency</h3>
            <p>
              Build investor confidence with secure, verifiable project details on the blockchain.
            </p>
          </div>
          
          <div className="bg-bgDark3 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary">Controlled Funding</h3>
            <p>
              Milestone-based fund releases ensure accountability and project alignment.
            </p>
          </div>
          
          <div className="bg-bgDark3 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary">Direct Communication</h3>
            <p>
              Engage directly and securely with your investors via integrated Nostr messaging.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-primary">Ready to Build Your Project?</h3>
          <p className="mb-4">
            Use the Angor platform to define your project, secure funding, and manage your venture on the blockchain.
          </p>
          <a href="https://test.angor.io" target="_blank" rel="noopener noreferrer" 
             className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-bold hover:bg-cyan-500 transition-colors">
            Create Project on Angor
          </a>
        </div>
      </div>
    </div>
  );
};
