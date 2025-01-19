import React from 'react';

export const TermsText = () => (
  <section className="w-full bg-bgDark2 mb-12 lg:my-10 lg:mb-14 text-white">
    <div className="flex flex-wrap items-center mx-auto md:pl-4 xl:pr-16 xl:pl-16">
      <div className="w-full mb-12 lg:mb-0">
        <div className="mx-auto lg:mx-auto">
          <h2 className="text-3xl font-extrabold text-primaryText">Terms and Conditions</h2>
          <p className="text-lg leading-relaxed mb-8">Last updated: {new Date().toISOString().split('T')[0]}</p>

          <h2 className="text-3xl font-extrabold text-primaryText">1. Platform Nature</h2>
          <p className="text-lg leading-relaxed mb-8">Angor is a decentralized crowdfunding platform that operates on Bitcoin and Nostr protocols. We do not hold custody of funds or act as an intermediary.</p>

          <h2 className="text-3xl font-extrabold text-primaryText">2. User Responsibilities</h2>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Maintain security of private keys and wallets</li>
            <li>Understand blockchain transactions are irreversible</li>
            <li>Verify project details before investing</li>
            <li>Comply with local regulations</li>
          </ul>

          <h2 className="text-3xl font-extrabold text-primaryText">3. Investment Risks</h2>
          <p className="text-lg leading-relaxed mb-8">Users acknowledge that:</p>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Investments carry inherent risks</li>
            <li>Past performance doesn't guarantee future results</li>
            <li>Time-locked contracts have specific conditions</li>
            <li>Network fees apply to transactions</li>
          </ul>

          <h2 className="text-3xl font-extrabold text-primaryText">4. Project Guidelines</h2>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Projects must be legitimate and lawful</li>
            <li>Accurate project information required</li>
            <li>Clear milestone definitions needed</li>
            <li>Regular updates expected</li>
          </ul>

          <h2 className="text-3xl font-extrabold text-primaryText">5. Platform Usage</h2>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>No malicious activities permitted</li>
            <li>Respect intellectual property rights</li>
            <li>Follow communication guidelines</li>
            <li>Maintain professional conduct</li>
          </ul>

          <h2 className="text-3xl font-extrabold text-primaryText">6. Technical Requirements</h2>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Compatible Bitcoin wallet required</li>
            <li>Nostr key pair needed for communication</li>
            <li>Adequate network fees for transactions</li>
            <li>Reliable internet connection</li>
          </ul>

          <h2 className="text-3xl font-extrabold text-primaryText">7. Disclaimers</h2>
          <p className="text-lg leading-relaxed mb-8">Angor:</p>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Is not a custodial service</li>
            <li>Doesn't guarantee project success</li>
            <li>Cannot reverse blockchain transactions</li>
            <li>Is not responsible for user errors</li>
          </ul>

          <h2 className="text-3xl font-extrabold text-primaryText">8. Modifications</h2>
          <p className="text-lg leading-relaxed mb-8">These terms may be updated. Users are responsible for reviewing changes. Continued use constitutes acceptance.</p>

          <h2 className="text-3xl font-extrabold text-primaryText">Contact</h2>
          <p className="text-lg leading-relaxed mb-8">Questions about these terms can be addressed through our Nostr channels or GitHub repository.</p>
        </div>
      </div>
    </div>
  </section>
);
