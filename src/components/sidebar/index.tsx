import React from "react";
import Header from "./header";
import { ScrollArea } from "@ui/scroll-area";
import Menu from "./menu";

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen w-[300px] flex-col border-r">
      <Header />
      <ScrollArea className="px-4 flex-1">
        <Menu />
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
