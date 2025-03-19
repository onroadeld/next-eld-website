"use client";

import Bullet from "@/components/ui/Bullet";
import { Button } from "@/components/ui/button";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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

const Register = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      id="register"
      className="bg-primary mx-4 mb-10 flex flex-col items-center gap-9 rounded-3xl px-4 py-5 sm:mx-16 sm:mb-20 sm:px-12 sm:py-20"
      viewport={{ once: true }}
    >
      <Bullet text="Register" variant="secondary" />
      <p className="mb-[30px] text-center text-4xl font-bold text-white sm:text-5xl sm:font-normal">
        Ready to Revolutionize Your Fleet Management?
      </p>
      <p className="leading--[100%] text-center text-base text-white sm:text-2xl">
        Sign up now to schedule a personalized demo or consultation. Discover
        how our advanced ELD system can minimize paperwork, prevent violations,
        and keep your fleet on track for long-term success.
      </p>
      <Button variant="outline">Register</Button>
    </motion.div>
  );
};

export default Register;
