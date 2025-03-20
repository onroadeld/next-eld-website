"use client";

import { useParallax } from "react-scroll-parallax";
import IPhone from "@/assets/images/iphone.webp";
import Image from "next/image";
import Bullet from "@/components/ui/Bullet";
import { Variants, motion } from "framer-motion";
import FeatureCard from "@/components/features/FeatureCard";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

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

const featureSlide = [
  {
    title: "Intuitive Mobile App",
    description:
      "Empower drivers with an easy-to-use mobile interface for logging hours, viewing schedules, and receiving alerts.",
  },
  {
    title: "Live GPS Tracking",
    description:
      "See the real-time location and status of your vehicles, complete with route history and driver performance metrics.",
  },
  {
    title: "Flexible Integrations",
    description:
      "Seamlessly connect with your preferred accounting, CRM, or dispatch software to ensure data consistency and reduce back-office complexity.",
  },
  {
    title: "Automated Hours of Service (HOS)",
    description:
      "Remove guesswork and manual entry. Our system logs driver hours, tracks breaks, and preemptively flags potential violations.",
  },
  {
    title: "Customizable Workflows",
    description:
      "Adapt our platform to your specific business model. From small fleet operators to large enterprises, our system scales effortlessly.",
  },
  {
    title: "Comprehensive Reporting & Analytics",
    description:
      "Generate precise reports on fuel consumption, distance covered, downtime, and more—helping you identify cost-saving opportunities.",
  },
];

const Features = () => {
  const [smallParallaxRotate, setSmallParallaxRotate] = useState<number>(0);
  const [parallaxRotate, setParallaxRotate] = useState<number>(0);

  const parallax = useParallax<HTMLDivElement>({
    rotate: [0, 120],
    onChange: (res) => {
      setParallaxRotate(res.progress * 120);
    },
  });

  const smallParallax = useParallax<HTMLDivElement>({
    rotate: [0, -120],
    onChange: (res) => {
      setSmallParallaxRotate(res.progress * -120);
    },
  });

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-hidden px-4 pb-16 sm:px-0"
    >
      <div className="mb-9 flex flex-col items-center gap-4" id="features">
        <Bullet text="Features" />
        <p className="text-center text-4xl leading-[100%] font-normal sm:mb-[30px] sm:text-start sm:text-5xl">
          All the Tools You Need in One Platform
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 2.5,
          },
        }}
        className="mb-20 items-baseline"
      >
        {featureSlide.map((item, i) => (
          <SwiperSlide key={i}>
            <FeatureCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative mb-20">
        <div className="absolute top-1/2 left-1/2 z-10 w-[169px] translate-[-50%] sm:h-[552px] sm:w-[273px]">
          <Image
            src={IPhone}
            alt="IPhone"
            className="drop-shadow-[0px_0px_70px_#107980] sm:drop-shadow-[0px_0px_120px_#107980]"
          />
        </div>

        {/* Big parallax */}
        <div
          ref={parallax.ref}
          className="border-primary relative mx-auto flex h-[350px] w-[350px] items-center justify-center rounded-full border-4 border-solid text-4xl sm:h-[702px] sm:w-[702px]"
        >
          <motion.div
            className="border-primary absolute top-[4%] left-[30%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-solid p-2"
            animate={{ rotate: smallParallaxRotate }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="bg-primary h-4 w-4 rounded-full">
              {/* <FeatureCard /> */}
            </div>
          </motion.div>

          <motion.div
            className="border-primary absolute right-[13%] bottom-[74%] flex translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-solid p-2 sm:right-[0%] sm:bottom-[44%]"
            animate={{ rotate: smallParallaxRotate }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="bg-primary h-4 w-4 rounded-full">
              {/* <FeatureCard /> */}
            </div>
          </motion.div>

          <motion.div
            className="border-primary absolute bottom-[6%] left-[75%] flex -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-2 border-solid p-2"
            animate={{ rotate: smallParallaxRotate }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="bg-primary h-4 w-4 rounded-full">
              {/* <FeatureCard position="left" /> */}
            </div>
          </motion.div>

          <motion.div
            className="border-primary absolute top-[44%] left-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-solid p-2"
            animate={{ rotate: smallParallaxRotate }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="bg-primary h-4 w-4 rounded-full">
              {/* <FeatureCard position="left" /> */}
            </div>
          </motion.div>
        </div>

        {/* small parallax */}
        <div
          ref={smallParallax.ref}
          className="border-primary absolute top-1/2 left-1/2 mx-auto flex h-[260px] w-[260px] translate-[-50%] items-center justify-center rounded-full border-4 border-solid text-4xl sm:h-[494px] sm:w-[494px]"
        >
          <motion.div
            className="border-primary absolute top-0 right-1/2 flex translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-solid p-2"
            animate={{ rotate: parallaxRotate }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="bg-primary h-4 w-4 rounded-full">
              {/* <FeatureCard position="left" /> */}
            </div>
          </motion.div>

          <motion.div
            className="border-primary absolute bottom-[-15%] left-1/2 flex translate-[-50%] items-center justify-center rounded-full border-2 border-solid p-2 sm:bottom-[-8%]"
            animate={{ rotate: -smallParallaxRotate }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="bg-primary h-4 w-4 rounded-full">
              {/* <FeatureCard /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
