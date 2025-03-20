import Bullet from "@/components/ui/Bullet";
import PlayMarketIcon from "@/assets/icons/play-market.svg";
import AppStoreIcon from "@/assets/icons/app-store.svg";
import Iphone from "@/assets/images/iphone.webp";
import Tablet from "@/assets/images/tablet.webp";
import Image from "next/image";
import Link from "next/link";
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

const DownloadApplication = () => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      className="mb-10 flex flex-col items-center gap-6 px-4 sm:mb-20 sm:gap-10 sm:px-0"
      id="download-app"
      viewport={{ once: true }}
    >
      <Bullet text="Download application" />
      <p className="mb-[30px] text-center text-4xl font-bold sm:text-5xl">
        Experience NEXT ELD, Risk-Free
      </p>
      <p className="max-w-[1110px] text-center text-[20px] text-[#808080] sm:text-2xl">
        Ready to see how our platform works in real life? Download our demo
        version and explore user-friendly dashboards, real-time analytics, and
        intuitive driver logs—no commitments attached.
      </p>

      <div className="relative z-20 mb-10 flex gap-4 sm:gap-5">
        <Link
          href="https://play.google.com"
          className="rounded-2xl transition duration-300 [&>svg]:w-[180px]"
          target="_blank"
        >
          <PlayMarketIcon viewBox="0 0 249 74" />
        </Link>

        <Link
          href="https://apps.apple.com"
          className="rounded-2xl transition duration-300 [&>svg]:w-[160px]"
          target="_blank"
        >
          <AppStoreIcon viewBox="0 0 222 74" />
        </Link>
      </div>

      <div className="relative w-full">
        <Image
          src={Iphone}
          alt="Iphone"
          className="relative z-10 mx-auto w-[120px] sm:w-[397px]"
        />

        <Image
          src={Tablet}
          alt="Tablet"
          className="absolute top-3/5 left-1/2 w-full max-w-[1100px] min-w-[380px] translate-[-50%] drop-shadow-[0px_0px_120px_#107980]"
        />
      </div>
    </motion.div>
  );
};

export default DownloadApplication;
