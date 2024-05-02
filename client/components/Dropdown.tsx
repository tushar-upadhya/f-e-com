import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { Calendar, Home, LogOut } from "lucide-react";
import Link from "next/link";

const Dropdown = ({ user }: { user: any }) => {
  //   console.log("user:", user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          {/* user */}
          <Avatar>
            <AvatarImage src={user.picture} />
            <AvatarFallback className="bg-accent text-white">{`${user.given_name[0]}${user.family_name[0]}`}</AvatarFallback>
          </Avatar>

          {/* name & email */}
          <div>
            <div className="flex gap-1 font-bold">
              <p>{user.given_name}</p>
              <p>{user.family_name}</p>
            </div>
            <p className="text-sm font-bold">{user.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-72 mt-4 p-4 flex flex-col gap-2"
        align="start"
      >
        <DropdownMenuLabel className="text-base">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup className="flex flex-col gap-2">
          <Link href={"/"}>
            <DropdownMenuItem className="cursor-pointer">
              HomePage
              <DropdownMenuShortcut className="text-lg text-slate-700 hover:text-white">
                <Home />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href={"/dashboard"}>
            <DropdownMenuItem className="cursor-pointer">
              My Booking
              <DropdownMenuShortcut className="text-lg text-slate-700 hover:text-white">
                <Calendar />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <LogoutLink>
          <DropdownMenuItem className="cursor-pointer">
            Log out
            <DropdownMenuShortcut className="text-lg text-slate-700 hover:text-white">
              <LogOut />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </LogoutLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
