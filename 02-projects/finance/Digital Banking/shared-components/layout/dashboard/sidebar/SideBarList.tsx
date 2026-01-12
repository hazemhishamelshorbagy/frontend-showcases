import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared-components/common/sidebar";
import {
  SideBarListDashboardProps,
  SideBarListProps,
} from "@/shared-types/SideBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SideBarItem from "./SideBarItem";

const SideBarListDashboard: React.FC<SideBarListProps> = ({ items }) => {
  return (
    <SidebarMenu className="flex flex-col  gap-8">
      {items.map((item: SideBarListDashboardProps) => (
        <SideBarItem key={item.label} {...item} />
      ))}
    </SidebarMenu>
  );
};

export default SideBarListDashboard;
