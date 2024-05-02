"use client";

import { links } from "@/lib/linkLib";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

const DeskTopNav = ({
  isUserAuthenticated,
}: {
  isUserAuthenticated: boolean;
}) => {
  const pathName = usePathname();

  return (
    <nav>
      <ul className="flex flex-col lg:flex-row gap-4">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                href={link.path}
                className="font-bold text-[13px] uppercase tracking-[3px] hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {!isUserAuthenticated && pathName === "/dashboard" && redirect("/")}
    </nav>
  );
};

export default DeskTopNav;
