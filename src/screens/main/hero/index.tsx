"use client";

import { Button } from "@/components/ui/button";
import Header from "@/layout/header";
import Image from "next/image";
import trucksImage from "@/assets/images/trucks.png";
import smallTrucksImage from "@/assets/images/truck-small.png";
import xyz from "@/assets/images/xyz.png";
import Bullet from "@/components/ui/Bullet";
import { useRouter } from "next/navigation";
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

const Hero = () => {
  const router = useRouter();

  return (
    <motion.div
      className="m-6 mb-[80px] rounded-3xl bg-[#f0f0f0] px-[17px] py-[31px] sm:px-[41px] sm:py-[30px]"
      id="home"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Header />

      <Bullet
        text="Streamline, save, and protect—all in one platform."
        className="mb-4"
      />

      <h1 className="mb-4 text-[40px] leading-[100%] font-normal sm:mb-[30px] sm:text-7xl">
        Reinvent Your Fleet Management with Next ELD Compliance
      </h1>

      <div className="mb-[24px] flex flex-col sm:mb-15 sm:flex-row sm:items-end sm:justify-between">
        <p className="mb-[30px] max-w-[815px] text-[#808080] sm:mb-0">
          Experience the future of fleet management with our all-in-one ELD
          solution designed to eliminate tedious paperwork, reduce human error,
          and maximize efficiency. From driver logs to route optimization and
          beyond, our system empowers you to make data-driven decisions that
          elevate both safety and profitability.
        </p>

        <div className="flex justify-center gap-3">
          <Button
            variant="outline"
            size="lg"
            className="bg-inherit"
            onClick={() => router.push("/sign-up")}
          >
            Register
          </Button>
          <Button size="lg" onClick={() => router.push("/sign-in")}>
            Log in
          </Button>
        </div>
      </div>

      <div className="mx-auto mb-15">
        <picture>
          <source srcSet={smallTrucksImage.src} media="(max-width: 640px)" />
          <Image
            src={trucksImage}
            alt="Truck image"
            width={1310}
            height={450}
            className="h-[450px] w-full max-w-[1310px] rounded-3xl object-cover sm:h-auto"
          />
        </picture>
      </div>

      <div
        className="flex flex-wrap items-center justify-center gap-10"
        id="partners"
      >
        <div className="grid grid-cols-4 gap-6 sm:gap-10">
          <Image src={xyz} alt="Partners" className="w-16 sm:w-28" />
          <Image src={xyz} alt="Partners" className="w-16 sm:w-28" />
          <Image src={xyz} alt="Partners" className="w-16 sm:w-28" />
          <Image src={xyz} alt="Partners" className="w-16 sm:w-28" />
          <Image src={xyz} alt="Partners" className="w-16 sm:w-28" />
          <Image src={xyz} alt="Partners" className="w-16 sm:w-28" />
          <Image src={xyz} alt="Partners" className="w-16 sm:w-28" />
          <Image src={xyz} alt="Partners" className="w-16 sm:w-28" />
        </div>

        <div className="flex w-[635px] flex-col items-end gap-6 text-end sm:gap-7">
          <Bullet text="Partners" />
          <p className="text-4xl leading-[100%] sm:text-5xl">
            Unlock the Full Potential of Your Fleet
          </p>
          <p className="text-base text-[#808080] sm:text-xl">
            Our platform is built in collaboration with industry-leading
            experts, giving you a cutting-edge toolset for compliance,
            automation, and growth. Join our network of forward-thinking
            partners and transform how you manage your fleet.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
