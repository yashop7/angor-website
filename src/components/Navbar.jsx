import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AngorLogo } from "../assets/logos/AngorLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "Features", href: "/#features", ariaLabel: "Features" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
  { label: "Nostr", href: "/nostr", ariaLabel: "Nostr" },

];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="app-launcher">
            <a href="/#home" aria-label="Home">
              <div className="flex justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <AngorLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Angor
                </div>
              </div>
            </a>
            <div className="app-menu">
              <div className="app-menu-content">
                <a href="https://test.angor.io" className="app-item">
                  <i className="fa-solid fa-rocket"></i>
                  <div>
                    <span className="app-name">Angor App</span>
                    <span className="app-desc">Create and manage funding</span>
                  </div>
                </a>
                <a href="https://blog.angor.io" className="app-item">
                  <i className="fa-solid fa-newspaper"></i>
                  <div>
                    <span className="app-name">Angor Blog</span>
                    <span className="app-desc">News and updates</span>
                  </div>
                </a>
                <a href="https://hub.angor.io" className="app-item">
                  <i className="fa-solid fa-compass"></i>
                  <div>
                    <span className="app-name">Angor Hub</span>
                    <span className="app-desc">Discover projects to fund</span>
                  </div>
                </a>
                <a href="https://profile.angor.io" className="app-item">
                  <i className="fa-solid fa-user"></i>
                  <div>
                    <span className="app-name">Angor Profile</span>
                    <span className="app-desc">Manage your project profile</span>
                  </div>
                </a>
                <a href="https://angor.io" className="app-item">
                  <i className="fa-solid fa-globe"></i>
                  <div>
                    <span className="app-name">Angor Web</span>
                    <span className="app-desc">Learn about Angor Protocol</span>
                  </div>
                </a>
                <a href="https://docs.angor.io" className="app-item">
                  <i className="fa-solid fa-book"></i>
                  <div>
                    <span className="app-name">Angor Docs</span>
                    <span className="app-desc">Angor Documentation</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a
              className="text-white main-border-gray rounded-xl
           bg-bgDark2 hover:bg-bgDark3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
              href="https://github.com/block-core/angor"
              target="_blank"
              aria-label="source code"
            >
              <GithubIcon />
              <span className="pt-px">Source code</span>
            </a>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-bgDark1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
                className="outlined-button pl-6 pr-8 pt-2 pb-2  flex"
                href="https://github.com/block-core/angor"
                target="_blank"
              >
                <GithubIcon />
                Source code
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
