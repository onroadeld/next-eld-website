import Bullet from "@/components/ui/Bullet";
import ArrowIcon from "@/assets/icons/arrow-narrow-right.svg";
import { Variants, motion } from "framer-motion";

const YUMMY_DATA = [
  {
    title: "Intelligent Automation & Task Management",
    description:
      "Automate critical tasks, from driver logs to route planning, freeing you to focus on strategic priorities. Our smart alerts and real-time monitoring let you manage your fleet with unparalleled precision.",
    link: "#",
  },
  {
    title: "Optimized Costs & Resource Allocation",
    description:
      "Make every mile count. Through advanced analytics, identify key areas for savings in fuel, labor, and maintenance—turning your fleet into a well-oiled, revenue-driving machine.",
    link: "#",
  },
  {
    title: "Simplified Compliance & Enhanced Safety",
    description:
      "Stay compliant with FMCSA and industry regulations the easy way. Our automatic alerts, built-in checklists, and intuitive reporting keep your fleet safe and penalty-free.",
    link: "#",
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

const Advantages = () => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      className="mb-[80px] px-4 sm:px-[60px]"
      viewport={{ once: true }}
    >
      <Bullet text="Core Advantages" className="mb-4" />

      <p className="mb-[24px] text-4xl font-normal sm:mb-[30px] sm:text-5xl">
        Why Choose Our ELD Solution
      </p>

      <div className="flex flex-col justify-center gap-[30px] sm:flex-row sm:gap-13">
        {YUMMY_DATA.map((item) => (
          <div key={item.title} className="flex items-end gap-5 sm:w-[403px]">
            <div>
              <p className="mb-4 text-2xl leading-[100%] sm:mb-0 sm:text-[32px]">
                {item.title}
              </p>
              <p className="text-[#808080]">{item.description}</p>
            </div>
            <div className="cursor-pointer rounded-full bg-[#F0F0F0] p-2">
              <ArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Advantages;
