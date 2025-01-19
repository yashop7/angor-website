import React from 'react';
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const PrivacyText = () => (
  <section className="w-full bg-bgDark2 mb-12 lg:my-10 lg:mb-14 text-white">
    <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
      <div className="w-full mb-12 lg:mb-0 xl:pl-8">
        <div className="mx-auto lg:mx-auto">
          
          <h2 className="text-3xl font-extrabold text-primaryText">Introduction</h2>
          <p className="text-lg leading-relaxed mb-8 text-white">Angor is committed to protecting your privacy. As a decentralized platform, we minimize data collection and processing to ensure your privacy and security.</p>
          
          <h2 className="text-3xl font-extrabold text-primaryText">Information We Don't Collect</h2>
          <p className="text-lg leading-relaxed mb-8 text-white">As a fully decentralized platform with no backend, Angor does not collect or store:</p>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Personal identification information</li>
            <li>KYC (Know Your Customer) data</li>
            <li>Financial information</li>
            <li>Usage tracking data</li>
            <li>User behavior analytics</li>
          </ul>
          
          <h2 className="text-3xl font-extrabold text-primaryText">Blockchain Data</h2>
          <p className="text-lg leading-relaxed mb-8 text-white">All transactions occur on the Bitcoin network and are publicly visible on the blockchain. This includes:</p>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Transaction amounts</li>
            <li>Bitcoin addresses</li>
            <li>Time-stamped records</li>
          </ul>
          
          <h2 className="text-3xl font-extrabold text-primaryText">Nostr Protocol Data</h2>
          <p className="text-lg leading-relaxed mb-8 text-white">Communication through Nostr protocol is public and may include:</p>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Project metadata</li>
            <li>Public messages and updates</li>
            <li>Public keys associated with your Nostr identity</li>
          </ul>
          
          <h2 className="text-3xl font-extrabold text-primaryText">Website Usage</h2>
          <p className="text-lg leading-relaxed mb-8 text-white">Our website is static and does not use cookies or tracking mechanisms. Any data stored is kept locally in your browser and includes:</p>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Local wallet information</li>
            <li>User preferences</li>
            <li>Interface settings</li>
          </ul>
          
          <h2 className="text-3xl font-extrabold text-primaryText">Third-Party Services</h2>
          <p className="text-lg leading-relaxed mb-8 text-white">Users may interact with:</p>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Bitcoin network explorers</li>
            <li>Nostr relays</li>
            <li>Self-hosted infrastructure</li>
          </ul>
          
          <h2 className="text-3xl font-extrabold text-primaryText">Security Measures</h2>
          <p className="text-lg leading-relaxed mb-8 text-white">Security is maintained through:</p>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Open-source code verification</li>
            <li>Cryptographic protocols</li>
            <li>Bitcoin network security</li>
            <li>Client-side security measures</li>
          </ul>
          
          <h2 className="text-3xl font-extrabold text-primaryText">User Rights and Control</h2>
          <p className="text-lg leading-relaxed mb-8 text-white">As a decentralized platform, users maintain full control over their:</p>
          <ul className="list-disc pl-6 mb-8 text-lg text-secondaryText">
            <li>Private keys and funds</li>
            <li>Project participation</li>
            <li>Communication preferences</li>
            <li>Local data storage</li>
          </ul>
          
          <h2 className="text-3xl font-extrabold text-primaryText">Changes to Privacy Policy</h2>
          <p className="text-lg leading-relaxed mb-8 text-white">Any updates to this privacy policy will be posted on this page. As a decentralized platform, fundamental changes to data handling are unlikely.</p>
          
          <h2 className="text-3xl font-extrabold text-primaryText">Contact Information</h2>
          <p className="text-lg leading-relaxed mb-8 text-white">For privacy-related questions, you can reach the Angor team through our Nostr channels or GitHub repository.</p>
        </div>
      </div>
    </div>
  </section>
);
