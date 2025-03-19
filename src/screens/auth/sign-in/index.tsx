"use client";

import Logo from "@/assets/icons/logo.svg";
import LeftArrowIcon from "@/assets/icons/arrow-left.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import TruckImage from "@/assets/images/truck-small.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();

  return (
    <div className="sm:grid grid-cols-2 gap-20 sm:px-[52px] px-4 py-[48px] max-w-[1440px] mx-auto">
      <div>
        <div className="flex justify-between sm:mb-[182] mb-[140px]">
          <button
            className="bg-none border-none outline-none cursor-pointer"
            onClick={() => router.push("/")}
          >
            <LeftArrowIcon />
          </button>
          <Logo className="cursor-pointer" />
        </div>

        <div className="sm:w-[400px] mx-auto">
          <p className="text-[40px] font-bold mb-1">Sign in</p>
          <p className="text-lg text-[#969696] mb-8">
            Please login to continue to your account
          </p>
          <form action="" className="flex flex-col gap-5">
            <Input placeholder="Name" />
            <Input placeholder="password" />

            <div className="flex items-center space-x-2">
              <Checkbox id="logged-in" />
              <label htmlFor="logged-in">Keep me logged in</label>
            </div>

            <Button>Sign in</Button>

            <div className=" ">
              <div className="relative px-4 text-center">
                <span className="before:content-[''] before:absolute before:w-[182px] before:h-[1px] before:bg-[#D9D9D9] before:left-0 before:top-1/2 before:translate-y-[-50%] after:content-[''] after:absolute after:w-[182px] after:h-[1px] after:bg-[#D9D9D9] after:right-0 after:top-1/2 after:translate-y-[-50%]">
                  or
                </span>
              </div>
            </div>

            <Button variant={"secondary"}>
              Sign in with Google <GoogleIcon />
            </Button>

            <p className="text-[#6C6C6C] text-lg text-center">
              Need an account?{" "}
              <Link href="/sign-up" className="text-[#367AFF] underline">
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden sm:block">
        <Image
          src={TruckImage}
          alt="truck image"
          className="w-[767px] h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default SignInPage;
