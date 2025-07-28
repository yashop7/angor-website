import React from 'react';
import { AngorLogo } from "../assets/logos/AngorLogo";
import { NostrIcon } from "../assets/icons/NostrIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { AngorHubIcon } from "../assets/icons/AngorHubIcon";

export const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { text: "Angor web app", href: "https://beta.angor.io" },
        { text: "Angor test", href: "https://test.angor.io" },
        { text: "Angor hub", href: "https://hub.angor.io" },
        { text: "Angor status", href: "https://status.angor.io" }
      ]
    },
    {
      title: "Important Links",
      links: [
        { text: "Angor docs", href: "https://docs.angor.io" },
        { text: "Angor blog", href: "https://blog.angor.io" },
        { text: "Angor brand", href: "https://brand.angor.io" },
        { text: "Bitcoin Faucet", href: "https://faucet.angor.io" }
      ]
    },
    {
      title: "Angor",
      links: [
        { text: "How Angor works", href: "/how-angor-works" },
        { text: "BTC Price", href: "/btc-price" },
        { text: "Terms & Conditions", href: "/terms" },
        { text: "Privacy Policy", href: "/privacy" }
      ]
    }
  ];

  return (
    <footer aria-label="Site footer" className="relative">
      <div className="pt-16 lg:pt-24 pb-12 lg:pb-20 bg-bgDark1 radius-for-skewed">
        <div className="container mx-auto px-4 w-11/12 xl:w-10/12 2xl:w-[1280px]">
          {/* Logo Section */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center mb-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-white mr-3 text-6xl">
                    <AngorLogo />
                  </div>
                  <div className="text-white font-['Inter'] font-bold text-2xl">
                    Angor
                  </div>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed mb-12 text-center lg:text-left max-w-sm">
                  P2P Funding Protocol
                </p>
                <div className="flex items-center space-x-4">
                  {/* GitHub Icon with Tooltip */}
                  <div className="relative group">
                    <a
                      className="inline-block w-10 h-10 p-1 outlined-button"
                      href="https://github.com/block-core/angor-hub"
                      aria-label="Github"
                    >
                      <AngorHubIcon />
                    </a>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs font-semibold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      Angor Hub
                    </div>
                  </div>

                  {/* Nostr Icon with Tooltip */}
                  <div className="relative group">
                    <a
                      className="inline-block w-10 h-10 p-1 outlined-button"
                      href="/nostr"
                      aria-label="Nostr"
                    >
                      <NostrIcon />
                    </a>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs font-semibold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      Angor Account
                    </div>
                  </div>

                  {/* Second GitHub Icon with Tooltip */}
                  <div className="relative group">
                    <a
                      className="inline-block w-10 h-10 p-1 outlined-button"
                      href="https://github.com/block-core/angor"
                      aria-label="Github"
                    >
                      <GithubIcon />
                    </a>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs font-semibold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      Angor App
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="w-full lg:w-2/3 hidden lg:flex px-4">
              <div className="flex flex-wrap justify-between w-full">
                {footerSections.map((section, index) => (
                  <div key={index} className="w-full sm:w-auto mb-8 sm:mb-0">
                    <h3 className="mb-8 text-2xl font-bold text-primaryText">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors duration-200 text-lg flex items-center group"
                          >
                            <span className="transform group-hover:translate-x-2 transition-transform duration-200">
                              {link.text}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="w-full lg:hidden px-4 space-y-6">
              {footerSections.map((section, index) => (
                <div 
                  key={index} 
                  className="bg-bgDark2 rounded-2xl p-8 shadow-xl border border-gray-700/20 hover:border-gray-700/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primaryText mb-6 pb-4 border-b border-gray-700/30">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="block text-gray-400 hover:text-white py-3 px-4 rounded-xl hover:bg-bgDark1 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 bg-bgDark1 border-t border-gray-700/20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Angor. Built with Bitcoin & Nostr.</p>
        </div>
      </div>
    </footer>
  );
};
