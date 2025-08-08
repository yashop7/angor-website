import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import hub from "../assets/images/hub.svg";
import angor from "../assets/images/angor.svg";
import hubLight from "../assets/images/hub-light.svg";
import angorLight from "../assets/images/angor-light.svg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
  <section className="w-full bg-lightbgLight2 dark:bg-bgDark2 py-6 md:py-16 lg:py-24">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-full lg:w-1/3 mx-auto flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded hidden lg:flex">
              <img
                src={isDarkMode ? angor.src : angorLight.src}
                alt="angor"
                className="rounded-xl main-border-gray mx-auto w-2/3"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded hidden lg:flex">
              <img
                src={isDarkMode ? hub.src : hubLight.src}
                alt="hub"
                className="rounded-xl main-border-gray mx-auto w-2/3"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 mb-6 md:mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">Behind the Tech</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Angor has no backend and is open source
            </h2>
            <p className="mb-12 text-lightsecondaryText dark:text-secondaryText leading-loose">
              It relies on Bitcoin explorers and Nostr relays, which users can
              run on their own.
            </p>

            <ul className="mb-6 text-lightprimaryText dark:text-primaryText">
              <li className="mb-4 flex">
                <span>Tech stack:</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Multisig 2-of-2 for revocation</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Taproot for efficiency</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Time-lock contracts (CLTV, CSV) for milestones</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Nostr protocol for comms and web of trust</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Hash locks for group revocation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
};
