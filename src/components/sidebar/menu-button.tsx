import { Button } from "@/shared/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";
import { cn } from "@/shared/lib/utils";
import { Menu } from "@/shared/types/menu";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { RxSlider } from "react-icons/rx";
import { Link } from "react-router-dom";

const CollapseMenuButton: React.FC<Menu> = ({
  href,
  label,
  icon: Icon,
  active,
  submenus,
}) => {
  const isSubmenuActive = submenus.some((submenu) => submenu.active);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);

  return (
    <Collapsible
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
      className="w-full"
    >
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-full py-6 text-gray-500 hover:bg-gray-200 hover:text-gray-600",
            active &&
              "bg-blue-600 text-gray-100 shadow-gray-300 hover:bg-blue-500 hover:text-gray-100",
          )}
        >
          <div className="flex w-full gap-4">
            <span>
              <Icon className="" size={20} />
            </span>
            <p className="font-semibold">{label}</p>
          </div>
          <ChevronDown
            size={18}
            className={cn(
              isCollapsed && "-rotate-180 transition-all duration-200",
            )}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="transition-all duration-300">
        <ul className="my-2">
          {submenus.map(({ label, active }, index) => (
            <li className="flex" key={index}>
              <span className="relative ml-2 flex w-10 justify-center">
                <div
                  className={cn(
                    "h-full w-0.5",
                    active ? "bg-blue-600" : "bg-gray-200",
                  )}
                />

                {active ? (
                  <RxSlider
                    className="absolute top-1/4 -translate-y-1/4 rotate-90 bg-white text-blue-600"
                    size={32}
                  />
                ) : (
                  <RxSlider
                    className="absolute top-1/4 -translate-y-1/4 rotate-90 bg-white text-gray-200"
                    size={32}
                  />
                )}
              </span>
              <Button
                variant="ghost"
                className={cn(
                  "mb-1 w-full py-6 text-gray-600 hover:bg-gray-200",
                  active &&
                    "bg-blue-100 text-blue-600 shadow-gray-300 hover:bg-blue-50 hover:text-blue-500",
                )}
              >
                <Link to={href} className="flex w-full gap-4">
                  <p className={cn(active ? "font-semibold" : "")}>{label}</p>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapseMenuButton;
