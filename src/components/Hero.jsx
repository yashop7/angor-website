import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.gif";
import Typewriter from "typewriter-effect";
export const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <section
      className="w-screen  flex justify-center items-center bg-lightbgLight dark:bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="rubik-moonrocks-regular text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-wide text-lightprimaryText dark:text-primaryText px-8 sm:px-8 md:px-20 lg:px-4 sm:mt-32 mt-16">
            <h1>Non custodial crowdfunding</h1>
          </div>
          <h1 className="rubik-moonrocks-regular mt-2 sm:mt-2 text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-wide text-secondaryColor px-8 sm:px-20 md:px-24 lg:px-24">
            with Angor
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-lightsecondaryText dark:text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-30 ">
            <Typewriter
              options={{
                strings: [
                  "A P2P funding protocol built on Bitcoin and Nostr",
                ],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mt-14 mb-16 sm:mb-40"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://hub.angor.io"
              className="w-full sm:w-52 h-12 rounded-xl font-bold text-primaryText flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 transition"
              aria-label="Mainnet"
            >
              Angor Hub
            </a>

            <div className="relative    w-52">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full h-12 rounded-xl font-bold text-primaryText flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 transition px-4 relative"
                aria-expanded={isDropdownOpen}
                aria-label="Angor App Dropdown"
              >
                <span>Angor App</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 absolute right-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="top-most absolute top-full mt-2 left-0 w-full bg-lightbgLight2 dark:bg-bgDark2 border border-primaryColor rounded-lg shadow-lg z-10 overflow-hidden"
                >
                  <a
                    href="https://test.angor.io"
                    className="block px-4 py-2 text-lightprimaryText dark:text-primaryText hover:bg-lightbgLight3 dark:hover:bg-bgDark3 transition text-center rounded-t-lg"
                  >
                    Web (Testnet)
                  </a>
                  <a
                    href="https://beta.angor.io"
                    className="block px-4 py-2 text-lightprimaryText dark:text-primaryText hover:bg-lightbgLight3 dark:hover:bg-bgDark3 transition text-center rounded-t-lg"
                    >
                     Web (Mainnet)
                  </a>
                  <a
                    href="https://github.com/block-core/angor/releases"
                    className="block px-4 py-2 text-lightprimaryText dark:text-primaryText hover:bg-lightbgLight3 dark:hover:bg-bgDark3 transition text-center rounded-t-lg"
                    >
                    Desktop
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center ">
            <img
              src={dashboard.src}
              alt="Dashboard image"
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-lightbgLight2 dark:bg-bgDark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-lightbgLight dark:bg-bgDark1 fill-lightbgLight dark:fill-bgDark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
