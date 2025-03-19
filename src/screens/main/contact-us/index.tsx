import Bullet from "@/components/ui/Bullet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const ContactUs = () => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      className="relative z-20 mb-10 bg-white px-4 shadow-[0px_-70px_29px_22px_rgb(255,255,255)] sm:mb-36 sm:px-32 sm:shadow-[0px_-200px_59px_22px_rgb(255,255,255)]"
      viewport={{ once: true }}
    >
      <Bullet text="Contact us" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-20">
        <div>
          <p className="my-10 text-[32px] leading-[100%] font-bold sm:text-5xl">
            Stay Informed on the Latest Fleet Management Insights
          </p>
          <p className="text-xl text-[#808080] sm:text-2xl">
            Subscribe to our newsletter to access expert tips, product updates,
            and special promotions. Never miss an opportunity to optimize your
            fleet.
          </p>
        </div>
        <form className="flex flex-col gap-8">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactUs;
