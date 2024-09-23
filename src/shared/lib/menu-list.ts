import {
  Settings,
  LayoutGrid,
  TruckIcon,
  Calendar,
  File,
  MessageCircle,
  BarChart,
  Users2,
} from "lucide-react";
import { Group } from "../types/menu";

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Main Menu",
      menus: [
        {
          href: "/",
          label: "Dashboard",
          active: pathname === "/",
          icon: LayoutGrid,
          submenus: [
            {
              href: "/",
              label: "Admin Dashboard",
              active: pathname === "/",
            },
            {
              href: "/maintenance-dashboard",
              label: "Maintenance Dashboard",
              active: pathname === "/maintenance-dashboard",
            },
            {
              href: "/operations-dashboard",
              label: "Operations Dashboard",
              active: pathname === "/operations-dashboard",
            },
          ],
        },
        {
          href: "/equipment",
          label: "Equipment",
          active: pathname.includes("/equipment"),
          icon: TruckIcon,
          submenus: [],
        },
        {
          href: "/operators",
          label: "Operators",
          active: pathname.includes("/operators"),
          icon: Users2,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Operations",
      menus: [
        {
          href: "/maintenance-schedule",
          label: "Maintenance Schedule",
          active: pathname.includes("/maintenance-schedule"),
          icon: Calendar,
          submenus: [],
        },
        {
          href: "/work-orders",
          label: "Work Orders",
          active: pathname.includes("/work-orders"),
          icon: File,
          submenus: [],
        },
        {
          href: "/communications",
          label: "Communications",
          active: pathname.includes("/communications"),
          icon: MessageCircle,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Reports & Settings",
      menus: [
        {
          href: "/analytics",
          label: "Analytics",
          active: pathname.includes("/analytics"),
          icon: BarChart,
          submenus: [],
        },
        {
          href: "/settings",
          label: "Settings",
          active: pathname.includes("/settings"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
