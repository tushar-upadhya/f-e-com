import Image from "next/image";
import Link from "next/link";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { socials } from "@/lib/socialsLib";
import { Button } from "./ui/button";
import Dropdown from "./Dropdown";
import MobileNav from "./MobileNav";
import DeskTopNav from "./DeskTopNav";

const Header = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  // console.log("isUserAuthenticated:", isUserAuthenticated);

  const user = await getUser();
  // console.log("user:", user);

  return (
    <header className="py-6 shadow-md">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* logo & social Icon */}
          <div className="flex items-center gap-5 justify-center xl:w-max">
            {/* logo */}
            <Link href={"/"}>
              <Image
                src={"/assets/logo.svg"}
                width={160}
                height={160}
                alt="logo"
              />
            </Link>

            {/* separator */}
            <div className="w-[1px] h-[40px] bg-gray-300">|</div>

            {/* social Icon */}
            <div className="flex gap-2">
              {socials.map((item, index) => {
                return (
                  <Link
                    className=" text-slate-900 hover:bg-accent hover:text-white text-sm w-[28px] h-[28px] flex items-center justify-center rounded-full transition-all"
                    href={item.href}
                    key={index}
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* sign In & SignUp */}
          <div className="flex items-center justify-center gap-8 xl:w-max">
            <div className="flex items-center gap-2 xl:order-2">
              {isUserAuthenticated ? (
                <Dropdown user={user} />
              ) : (
                <div className="flex gap-2">
                  <LoginLink>
                    <Button variant={"primary"}>Sign IN</Button>
                  </LoginLink>
                  <RegisterLink>
                    <Button>Register</Button>
                  </RegisterLink>
                </div>
              )}
            </div>
            {/* mobile */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
            {/* desktop */}
            <div className="hidden xl:flex">
              <DeskTopNav isUserAuthenticated={isUserAuthenticated} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
