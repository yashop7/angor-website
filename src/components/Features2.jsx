import { motion } from "framer-motion";

import hub from "../assets/images/hub.svg";
import angor from "../assets/images/angor.svg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
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
                src={angor.src}
                alt="angor"
                className="rounded-xl main-border-gray mx-auto w-2/3"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded hidden lg:flex">
              <img
                src={hub.src}
                alt="hub"
                className="rounded-xl main-border-gray mx-auto w-2/3"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">Behind the Tech</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Angor has no backend and is verifiable source code
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              It relies on Bitcoin explorers and Nostr relays, which users can
              run on their own.
            </p>

            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Tech stack.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Multisig 2-of-2 for revocation.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Taproot for efficiency.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Time-lock contracts (CLTV, CSV).</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Nostr protocol.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Hash locks.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
