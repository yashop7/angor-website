import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "What is Angor?",
    answer:
      "Angor is a decentralized crowdfunding platform built on Bitcoin, incorporating Nostr for enhanced security and transparency. It allows investors to maintain control over their funds and supports direct communication between investors and founders.",
  },
  {
    question: "How does the time-lock contract work?",
    answer:
      "Time-lock contracts release funds in stages, based on project milestones. Investors can also recover unspent funds, providing flexibility and control over their investments.",
  },
  {
    question: "What role does Nostr play in Angor?",
    answer:
      "Nostr is used for storing project metadata securely and facilitating direct, uncensored communication between founders and investors.",
  },
  {
    question: "How does Angor benefit investors?",
    answer:
      "Investors benefit from enhanced control over their funds, reduced investment risk, and direct communication with project founders.",
  },
  {
    question: "What advantages does Angor offer to founders?",
    answer:
      "Founders enjoy streamlined fundraising in a trust-minimized environment and aligned investor support, which is vital for project success.",
  },
  {
    question: "Is Angor suitable for all types of crowdfunding projects?",
    answer:
      "Angor is designed primarily for Bitcoin and open-source projects, but its decentralized and secure nature makes it suitable for a wide range of crowdfunding initiatives.",
  },
  {
    question: "How does Angor ensure the security of funds?",
    answer:
      "Security is achieved through Bitcoin's robust framework, time-lock contracts, and a 2-of-2 multisig approach for critical actions.",
  },
  {
    question: "Can I participate in Angor without extensive knowledge of cryptocurrencies?",
    answer:
      "While basic knowledge of Bitcoin and cryptocurrencies is helpful, Angor is designed to be user-friendly and accessible to a broad audience.",
  },
  {
    question: "What assets can I invest?",
    answer:
      "At this moment, Angor solely supports investment transactions conducted with Bitcoin.",
  },
  {
    question: "Is the investment process anonymous?",
    answer:
      "The anonymity of the investment process is as robust as the Bitcoin network itself, offering a level of privacy consistent with Bitcoin transactions.",
  },
];

export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Have any questions?</p>
          <h2 className="mb-16 block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#cbdde1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
