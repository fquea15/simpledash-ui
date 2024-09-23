import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { CiMail, CiSettings } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

const Header: React.FC = () => {
  return (
    <header className="flex h-[80px] items-center justify-between border-b px-6 gap-8">
      <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
        <BiSearch size={22} className="text-gray-300" />
        <input
          type="text"
          className="min-w-52 flex-1 bg-transparent p-1 text-sm font-medium outline-none"
          placeholder="Search here..."
        />
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex gap-3">
          <li>
            <Button variant="ghost" className="rounded-full bg-gray-100 px-2">
              <CiSettings size={22} className="text-gray-500" />
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-100 px-2"
            >
              <CiMail size={22} className="text-gray-500" />
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="rounded-full bg-gray-100 px-2">
              <IoIosNotifications size={22} className="text-gray-500" />
            </Button>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <Avatar className="">
            <AvatarImage src="..." />
            <AvatarFallback>FC</AvatarFallback>
          </Avatar>
          <div className="flex min-w-max flex-col">
            <h2 className="font-semibold leading-5">F Code</h2>
            <p className="text-sm leading-5 text-gray-400">Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
