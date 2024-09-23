import React from "react";
import { Button } from "@ui/button";
import { ChevronLeft } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="flex h-[80px] items-center justify-between">
      <h1 className="flex-1 px-6 text-center text-2xl">
        Logo <span className="text-xl uppercase">company</span>
      </h1>
      <div className="relative ml-auto">
        <Button
          variant="ghost"
          className="absolute -left-4 -top-4 my-auto h-max w-max border bg-white p-1"
        >
          <ChevronLeft size={18} className="text-gray-600" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
