import LogoIcon from "@/assets/icons/logo.svg";
import LocationIcon from "@/assets/icons/location.svg";
import TelephoneIcon from "@/assets/icons/telephone.svg";
import EnvelopeIcon from "@/assets/icons/envelope.svg";
import TelegramIcon from "@/assets/icons/telegram.svg";
import WhatsAppIcon from "@/assets/icons/whats-app.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import Link from "next/link";
import { Variants, motion } from "framer-motion";

const headerLinks = [
  { title: "Home", id: "home" },
  { title: "Partners", id: "partners" },
  { title: "About", id: "about" },
  { title: "Features", id: "features" },
  { title: "Register", id: "register" },
  { title: "FAQ", id: "faq" },
  { title: "Download app", id: "download-app" },
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
const Footer = () => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="m-4 rounded-3xl bg-[#f0f0f0] px-[17px] py-[30px] sm:m-16 sm:p-[60px]"
    >
      <div className="mb-10 flex flex-wrap justify-between">
        <div>
          <div className="mb-5 cursor-pointer sm:mb-12">
            <LogoIcon />
          </div>
          <p className="mb-[30px] text-[#6C6C70] sm:mb-0 sm:w-[396px]">
            Unlock efficiency with NEXT ELD. Revolutionizing fleet management
            with advanced technology and top-tier service worldwide.
          </p>
        </div>

        <ul>
          <li className="mb-5 font-semibold text-[#6C6C70]">Company</li>
          {headerLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="cursor-pointer text-[#6C6C70] hover:text-black hover:underline"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <LocationIcon />
            <p className="cursor-pointer hover:underline">st. Loremipsum</p>
          </div>
          <div className="flex items-center gap-4">
            <TelephoneIcon />
            <a
              href="tel:+18001234567"
              target="_blank"
              className="cursor-pointer hover:underline"
            >
              +1 (800) 123-4567
            </a>
          </div>
          <div className="flex items-center gap-4">
            <EnvelopeIcon />
            <a
              href="mailto:info@onroadeld.com"
              target="_blank"
              className="cursor-pointer hover:underline"
            >
              info@onroadeld.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse flex-wrap items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-0">
        <p className="text-[#6C6C70]">
          © 2024 NEXT ELD Inc. All rights reserved.
        </p>
        <div className="flex gap-7">
          <Link
            href="https://t.me"
            target="_blank"
            className="bg-primary cursor-pointer rounded-xl p-2.5"
          >
            <TelegramIcon />
          </Link>
          <Link
            href="https://api.whatsapp.com"
            target="_blank"
            className="bg-primary cursor-pointer rounded-xl p-2.5"
          >
            <WhatsAppIcon />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="bg-primary cursor-pointer rounded-xl p-2.5"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
