import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import hub from "../assets/images/hub.svg";

export const FeaturesDiagonal = () => {
  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2  fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1  fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="block-subtitle">Where connections happen</span>
            <h2 className="mt-10 mb-8 text-2xl lg:text-3xl block-big-title">
              Angor Hub
            </h2>
            <p className="mb-16 text-secondaryText leading-loose">
              Angor Hub is a Nostr client built around the Angor
              protocol, offering tools to explore crowdfunding projects, connect
              with investors, and engage directly with founders. Whether you're
              seeking investment opportunities or funding for your project,
              Angor Hub provides secure messaging, project pages, and group
              channels for seamless interaction within a decentralized
              environment.{" "}
            </p>

            <button
              className="w-[210px] h-12 contained-button mr-10"
              onClick={() => window.open("https://hub.angor.io", "_blank")}
              aria-label="Angor Hub"
            >
              Angor Hub
            </button>
          </div>
          <div className="w-3/5 lg:w-1/3 lg:pl-16 justify-center mx-auto pt-16 lg:pt-0 hidden lg:flex">
            <img
              src={hub.src}
              alt="hub"
              className="rounded-xl main-border-gray object-cover w-full h-auto"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </motion.div>

      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
    </section>
  );
};
