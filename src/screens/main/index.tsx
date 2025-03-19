"use client";

import Hero from "./hero";
import Advantages from "./advantages";
import About from "./about";
import { ParallaxProvider } from "react-scroll-parallax";
import Features from "./features";
import Register from "./register";
import FAQ from "./FAQ";
import DownloadApplication from "./download-app";
import ContactUs from "./contact-us";
import Footer from "@/layout/footer";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Hero />
      <Advantages />
      <About />
      <ParallaxProvider>
        <Features />
      </ParallaxProvider>
      <Register />
      <FAQ />
      <DownloadApplication />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Main;
