import Bullet from "@/components/ui/Bullet";
import Image from "next/image";
import truckImg from "@/assets/images/trucks.webp";
import { Variants, motion } from "framer-motion";

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

const About = () => {
  return (
    <motion.div
      className="mx-4 mb-10 flex flex-col-reverse items-center justify-between gap-9 rounded-3xl bg-[#f0f0f0] p-5 sm:mx-[60px] sm:mb-20 sm:h-[514px] sm:flex-row sm:gap-0 sm:px-[72px] sm:py-0"
      id="about"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-center gap-[24px] sm:w-[556px] sm:gap-[30px]">
        <Bullet text="About" />
        <p className="mb-0 text-4xl font-normal sm:mb-[30px] sm:text-5xl">
          About NEXT ELD
        </p>
        <p className="text-[#808080]">
          At NEXT ELD, we believe in bridging the gap between innovation and
          practicality. Our team consists of seasoned transport professionals
          and tech enthusiasts united by a singular mission: to simplify fleet
          management for businesses of all sizes. With our advanced,
          user-friendly platform, you’ll save time, reduce costs, and stay ahead
          of ever-changing regulatory demands.
        </p>
      </div>
      <div>
        <Image
          src={truckImg}
          alt="Trucks"
          className="h-[300px] w-[570px] rounded-2xl object-cover"
        />
      </div>
    </motion.div>
  );
};

export default About;
