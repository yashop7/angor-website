import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import angorFlow from "../assets/images/angor-flow.png";
import angorFlowLight from "../assets/images/angor-flow-light.png";

export const AngorFlow = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-lightbgLight dark:bg-bgDark2 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row mx-auto gap-4 items-center px-4 w-11/12 xl:w-10/12 2xl:w-[1280px]">
          <div className="text-center md:mb-16">
            <span className="block-subtitle">How it works</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Angor Flow
            </h2>
            <p className="mb-12 text-lightsecondaryText dark:text-secondaryText leading-loose max-w-3xl mx-auto text-lg">
              Understand how Angor's decentralized crowdfunding protocol works from project creation to fund recovery.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <img
                src={isDarkMode ? angorFlow.src : angorFlowLight.src}
                alt="Angor Flow Diagram"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
