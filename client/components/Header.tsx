import Image from "next/image";
import Link from "next/link";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { socials } from "@/lib/socialsLib";

const Header = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  //   console.log("isUserAuthenticated:", isUserAuthenticated);

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
          <div>Sign in</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
