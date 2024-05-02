"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/lib/linkLib";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-2xl text-primary flex items-center">
        <Menu />
      </SheetTrigger>

      <SheetContent side={"left"} className="flex justify-center items-center">
        <nav className="flex flex-col gap-8 text-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className="text-2xl font-primary hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
