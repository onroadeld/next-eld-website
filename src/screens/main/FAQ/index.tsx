import Bullet from "@/components/ui/Bullet";
import { Variants, motion } from "framer-motion";

const faqData = [
  {
    question: "What is an ELD, and why do I need it?",
    answer:
      "An Electronic Logging Device (ELD) automatically records driving time, engine hours, location, and more—helping you stay compliant with industry regulations while improving overall fleet efficiency.",
  },
  {
    question: "How does NEXT ELD save me money?",
    answer:
      "By automating daily tasks, preventing costly violations, and optimizing routes, our system helps reduce overheads and improve your bottom line.",
  },
  {
    question: "Is NEXT ELD suitable for my fleet size?",
    answer:
      "Absolutely. NEXT ELD is built to scale, catering to businesses ranging from single operators to large transportation networks.",
  },
  {
    question: "What are the costs involved?",
    answer:
      "Pricing is customized based on fleet size and specific needs. Reach out to us, and we’ll craft a plan that fits your budget and growth goals.",
  },
];

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const FAQ = () => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col items-center gap-10 px-4 sm:mb-10 sm:px-12"
      id="faq"
      viewport={{ once: true }}
    >
      <Bullet text="FAQ" />

      <div>
        {faqData.map((item, index) => (
          <div
            key={item.question}
            className="mb-10 grid grid-cols-1 items-center sm:grid-cols-2"
          >
            <div className="mb-5 flex items-center text-2xl font-bold sm:mb-0 sm:text-3xl">
              <p className="text-primary mr-5 rounded-full bg-[#f0f0f0] p-4">
                0{index + 1}
              </p>
              {item.question}
            </div>
            <p className="text-base text-[#808080] sm:text-xl">{item.answer}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
