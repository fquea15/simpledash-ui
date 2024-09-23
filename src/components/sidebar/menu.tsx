import React from "react";
import { Link, useLocation } from "react-router-dom";

import { getMenuList } from "@shared/lib/menu-list";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@ui/tooltip";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import CollapseMenuButton from "./menu-button";

const Menu: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const menuList = getMenuList(pathname);

  return (
    <nav className="h-full w-full">
      <ul className="">
        {menuList.map(({ groupLabel, menus }, index) => (
          <li key={index} className="border-b py-2 last:border-0">
            <p className="p-3 text-sm font-medium text-gray-500/90">
              {groupLabel}
            </p>
            <ul className="flex flex-col gap-1">
              {menus.map(
                ({ href, label, active, icon: Icon, submenus }, index) =>
                  submenus.length === 0 ? (
                    <li className="" key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              className={cn(
                                "w-full py-6 text-gray-500 hover:bg-gray-200 hover:text-gray-600",
                                active &&
                                  "bg-blue-600 text-gray-100 hover:bg-blue-500 hover:text-gray-100 shadow-lg shadow-gray-300",
                              )}
                            >
                              <Link to={href} className="flex w-full gap-4">
                                <span>
                                  <Icon className="" size={20} />
                                </span>
                                <p className="font-semibold">{label}</p>
                              </Link>
                            </Button>
                          </TooltipTrigger>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ) : (
                    <li key={index}>
                      <CollapseMenuButton
                        href={href}
                        label={label}
                        active={active}
                        icon={Icon}
                        submenus={submenus}
                      />
                    </li>
                  ),
              )}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
