import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AngorLogo } from "../assets/logos/AngorLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { ThemeButton } from "./ThemeButton";

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
      className="w-full h-20 flex flex-col justify-center items-center fixed bg-lightbgLight/95 lg:bg-lightbgLight/80 dark:bg-bgDark1 dark:lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl"
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
                <div className="mr-2 text-6xl text-lightprimaryText dark:text-white">
                  <AngorLogo />
                </div>
                <div className="font-['Inter'] font-bold text-xl text-lightprimaryText dark:text-white">
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
                className="lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2 text-lightprimaryText dark:text-white"
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
          <div className="grow basis-0 justify-end hidden lg:flex items-center gap-4">
            <ThemeButton />
            <a
              className="text-lightprimaryText dark:text-primaryText bg-lightbgLight1 dark:bg-bgDark3 border border-lightmainBorder dark:border-mainBorder hover:bg-lightbgLight/90 dark:hover:bg-bgDark3Hover rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
              href="https://github.com/block-core/angor"
              target="_blank"
              aria-label="source code"
            >
              <div className="size-6">
                <GithubIcon />
              </div>
              <span>Source code</span>
            </a>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col px-2 py-3 border-solid border rounded-md cursor-pointer transition-all duration-300 border-lightmainBorder hover:bg-lightbgLight2 dark:border-gray-600 dark:hover:bg-bgDark2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 mb-1 bg-lightsecondaryText dark:bg-gray-500"></div>
          <div className="w-5 h-0.5 mb-1 bg-lightsecondaryText dark:bg-gray-500"></div>
          <div className="w-5 h-0.5 bg-lightsecondaryText dark:bg-gray-500"></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: -20 }}
          >
          <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 z-50 w-full items-center gap-6 py-8 border-y border-solid bg-lightbgLight/95 border-lightmainBorder shadow-2xl backdrop-blur-md dark:bg-bgDark1/95 dark:border-bgDark3">
            <div className="flex flex-col items-center gap-4 w-full">
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-lg font-medium cursor-pointer hover:scale-105 transition-all duration-200 py-2 text-lightprimaryText dark:text-white hover:text-secondaryColor dark:hover:text-secondaryColor"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
            
            <div className="w-full h-px bg-lightmainBorder dark:bg-mainBorder mx-8"></div>
            
            <div className="flex flex-col items-center gap-4">
              <ThemeButton />
              <a
                className="text-lightprimaryText dark:text-primaryText bg-lightbgLight dark:bg-bgDark3 border border-lightmainBorder dark:border-mainBorder hover:bg-lightbgLight2 dark:hover:bg-bgDark3Hover rounded-lg px-6 py-2.5 text-sm font-medium flex items-center gap-2 transition-all duration-200 hover:scale-105 shadow-md"
                href="https://github.com/block-core/angor"
                target="_blank"
              >
                <div className="w-4 h-4">
                  <GithubIcon />
                </div>
                Source code
              </a>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
