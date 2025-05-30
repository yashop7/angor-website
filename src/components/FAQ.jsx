import { useState } from "react";
import { motion } from "framer-motion";

const FAQCategories = [
	{
		title: "Getting Started",
		icon: "🚀",
		color: "from-secondaryColor to-cyan-600",
		questions: [
			{
				question: "What is Angor?",
				answer:
					"Angor is fully decentralized, with no middleman involved in the investment process. It has no backend and uses the Bitcoin and Nostr protocols to achieve this.",
			},
			{
				question: "How does Angor work?",
				answer:
					"Angor leverages Bitcoin's scripting language to program spending conditions like timelocks, hashlocks, and multisig. Each project milestone is represented as a UTXO, releasing funds over time using timelocks, while a 2-of-2 multisig allows investors to exit if needed, when an investor exists a project their Bitcoin becomes locked for the duration of a predefined penalty.",
			},
			{
				question: "Do I need permission to use Angor?",
				answer:
					"Angor is permissionless and censorship-resistant, just like Bitcoin.",
			},
			{
				question: "What assets can I invest?",
				answer: "Angor only supports Bitcoin for investments.",
			},
		],
	},
	{
		title: "Technology & Security",
		icon: "🔒",
		color: "from-primaryColor to-secondaryColor",
		questions: [
			{
				question: "What role does Nostr play?",
				answer:
					"Nostr is used for storing project metadata and facilitating communication between founders and investors. Angor Hub allows you to create custom project views, search for projects, and get updates from founders.",
			},
			{
				question: "How does Angor ensure the security of funds?",
				answer:
					"Angor uses Bitcoin's time-lock contracts and a 2-of-2 multisig approach, ensuring the security of funds at each stage.",
			},
		],
	},
	{
		title: "For Investors",
		icon: "💰",
		color: "from-cyan-700 to-secondaryColor",
		questions: [
			{
				question: "How does Angor benefit investors?",
				answer:
					"Investor funds are time-locked, preventing rug pulls, and offering more control over unspent funds, which reduces financial risk.",
			},
			{
				question: "How do I recover my unspent funds?",
				answer:
					"If you want to exit a project you backed, you can initiate a recovery of any unspent funds through your Angor wallet. This process allows you to exit the project securely.",
			},
			{
				question: "Are there any restrictions/charges for recovering unspent funds?",
				answer:
					"There are no charges, except for the miner fee. Angor's protocol ensures you retain control over your contributions without additional platform fees.",
			},
			{
				question: "How long does it take to recover unspent funds?",
				answer:
					"Recovering unspent funds is quick and processed via your Angor wallet. Ensure the recovery transaction fee rate is high enough to get into the target block.",
			},
			{
				question: "What happens if the project is not fully funded?",
				answer:
					"If a project doesn't reach full funding, there are two potential paths: if the founder consents, they can co-sign an exit transaction using the 2-of-2 multisig setup to return funds. If not, the investor may need to engage in a penalty process.",
			},
			{
				question: "When and how are rewards/tokens paid to investors?",
				answer:
					"Angor does not manage rewards such as shares or token allocation; this is handled directly between the founder and investor.",
			},
		],
	},
	{
		title: "For Founders",
		icon: "🎯",
		color: "from-emerald-600 to-secondaryColor",
		questions: [
			{
				question: "What advantages does Angor offer to founders?",
				answer:
					"Founders benefit from a secure platform for investors, unlocking more capital. Investors are guaranteed that their funds are committed to the project, attracting serious backers.",
			},
			{
				question: "Is Angor suitable for all types of crowdfunding projects?",
				answer:
					"Angor's decentralized and secure nature makes it suitable for a wide range of crowdfunding projects.",
			},
			{
				question: "How can I get updates on the projects' progress?",
				answer:
					"You can monitor project progress on Angor Hub, where updates will be posted using the Nostr relays. This provides real-time access to project statuses and milestones. Notifications can be enabled to alert you to significant developments.",
			},
		],
	},
	{
		title: "Platform & Governance",
		icon: "⚖️",
		color: "from-bgDark3 to-primaryColor",
		questions: [
			{
				question: "How do you select and vet crowdfunding projects?",
				answer:
					"Angor is a decentralized protocol, and developers do not participate in the selection or vetting of projects listed on the platform. The responsibility for choosing projects lies with the community and the protocol's trustless design.",
			},
		],
	},
];

export const FAQ = () => {
	const [activeCategory, setActiveCategory] = useState(0);

	return (
		<section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-bgDark1 overflow-hidden">
			<div className="absolute -top-10" id="FAQ" />
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-16">
							<p className="mb-7 block-subtitle">Have any questions?</p>
							<h2 className="mb-8 block-big-title">
								Frequently Asked Questions
							</h2>
							<p className="text-secondaryText text-lg max-w-2xl mx-auto">
								Find answers to common questions about Angor's decentralized
								crowdfunding platform
							</p>
						</div>

						{/* Category Navigation */}
						<div className="flex flex-wrap justify-center gap-3 mb-12">
							{FAQCategories.map((category, index) => (
								<button
									key={category.title}
									onClick={() => setActiveCategory(index)}
									className={`
                    relative px-6 py-3 rounded-xl font-semibold text-sm sm:text-base
                    transition-all duration-300 hover:scale-105 flex items-center gap-2
                    ${
											activeCategory === index
												? "bg-gradient-to-r " +
												  category.color +
												  " text-white shadow-lg shadow-secondaryColor/25"
												: "bg-bgDark2 text-secondaryText hover:bg-bgDark3 hover:text-primaryText"
										}
                  `}
								>
									<span className="text-lg">{category.icon}</span>
									<span className="hidden sm:inline">{category.title}</span>
									<span className="sm:hidden">
										{category.title.split(" ")[0]}
									</span>
								</button>
							))}
						</div>

						{/* FAQ Content */}
						<motion.div
							key={activeCategory}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
							className="mb-11"
						>
							<div className="mb-8">
								<h3 className="text-2xl sm:text-3xl font-bold text-primaryText mb-3 flex items-center gap-3">
									<span className="text-3xl">
										{FAQCategories[activeCategory].icon}
									</span>
									{FAQCategories[activeCategory].title}
								</h3>
								<div
									className={`h-1 w-20 bg-gradient-to-r ${FAQCategories[activeCategory].color} rounded-full`}
								></div>
							</div>

							<div className="grid gap-4">
								{FAQCategories[activeCategory].questions.map((item, index) => (
									<FAQBox
										key={`${item.question}-${index}`}
										title={item.question}
										content={item.answer}
										defaultOpen={index === 0}
										categoryColor={
											FAQCategories[activeCategory].color
										}
									/>
								))}
							</div>
						</motion.div>

						{/* Contact Section */}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="text-center bg-gradient-to-r from-bgDark2 to-bgDark3 rounded-2xl p-8 border border-mainBorder"
						>
							<h3 className="text-xl font-bold text-primaryText mb-4">
								Still have questions?
							</h3>
							<p className="text-secondaryText mb-6 max-w-md mx-auto">
								Join our community on Nostr or check out our documentation for
								more detailed information.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="/nostr"
									className="px-6 py-3 bg-gradient-to-r from-secondaryColor to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-secondaryColor/25 transition-all duration-300 hover:scale-105"
								>
									Join Nostr Community
								</a>
								<a
									href="https://docs.angor.io"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 bg-bgDark3 text-primaryText font-semibold rounded-xl border border-mainBorder hover:bg-bgDark3Hover transition-all duration-300 hover:scale-105"
								>
									View Documentation
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

const FAQBox = ({ defaultOpen, title, content, categoryColor }) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className="group"
		>
			<div
				className={`
          pt-6 pb-6 px-6 rounded-2xl bg-bgDark2 border border-mainBorderDarker mb-4 
          relative hover:bg-bgDark3 cursor-pointer transition-all duration-300
          hover:border-mainBorder hover:shadow-lg hover:shadow-black/20
          ${isOpen ? "ring-2 ring-secondaryColor/30 bg-bgDark3" : ""}
        `}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="flex justify-between items-start">
					<div className="flex-1 pr-8">
						<h3 className="content-title mb-2 group-hover:text-secondaryText transition-colors duration-300">
							{title}
						</h3>
						<div
							className={`
                text-secondaryText leading-relaxed transition-all duration-300 overflow-hidden
                ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
              `}
						>
							{content}
						</div>
					</div>

					<div className="flex-shrink-0">
						<div
							className={`
              w-8 h-8 rounded-full bg-gradient-to-r ${categoryColor} 
              flex items-center justify-center transition-transform duration-300
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="text-white"
							>
								<path
									d="M4.16732 7.5L10.0007 13.3333L15.834 7.5"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>

				{/* Progress bar for open state */}
				{isOpen && (
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{ duration: 0.3, delay: 0.1 }}
						className={`h-0.5 bg-gradient-to-r ${categoryColor} mt-4 rounded-full`}
					/>
				)}
			</div>
		</motion.div>
	);
};
