import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { InvitationModal } from "./InvitationModal";
import hub from "../assets/images/hub.svg";
import hubLight from "../assets/images/hub-light.svg";

export const FeaturesDiagonal = () => {
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
    <section className="w-full flex flex-col justify-center items-center bg-lightbgLight2 dark:bg-bgDark1">
 
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="block-subtitle">Where connections happen</span>
            <h2 className="mt-10 mb-8 text-2xl lg:text-3xl block-big-title">
              Angor Hub
            </h2>
            <p className="mb-6 text-lightsecondaryText dark:text-secondaryText leading-loose">
              Angor Hub is a Nostr client built around the Angor
              protocol, offering tools to explore crowdfunding projects, connect
              with investors, and engage directly with founders. Whether you're
              seeking investment opportunities or funding for your project,
              Angor Hub provides secure messaging, project pages, and group
              channels for seamless interaction within a decentralized
              environment.{" "}
            </p>

            <button
              className="w-[210px] h-12 mr-10 bg-secondaryColor/90 hover:bg-secondaryColor dark:bg-bgDark3 dark:hover:bg-bgDark3Hover text-white font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
              onClick={() => window.open("https://hub.angor.io", "_blank")}
              aria-label="Angor Hub"
            >
              Angor Hub
            </button>
          </div>
          <div className="w-3/5 lg:w-1/3 lg:pl-16 justify-center items-center mx-auto pt-16 lg:pt-0 hidden lg:flex">
            <img
              src={isDarkMode ? hub.src : hubLight.src}
              alt="hub"
              className="rounded-xl main-border-gray object-cover w-full h-auto"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </motion.div>

 
    </section>
  );
};
