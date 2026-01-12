"use client";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared-components/common/sidebar";
import { SideBarListDashboardProps } from "@/shared-types/SideBar";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveLink } from "@/shared-components/common";
import { Text } from "@/shared-components/common/TextVariant";
import { cn } from "@/lib/utils";
const SideBarItem: React.FC<SideBarListDashboardProps> = ({
  icon,
  href,
  label,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <SidebarMenuItem>
      <SidebarMenuButton tooltip={label}>
        <ActiveLink
          className="flex gap-7 group px-7   items-center"
          href={href}
        >
          <div className="min-w-4">
            <Image
              className={cn(
                isActive ? "icon-active-blue" : "icon-muted",
                "transition-all duration-300"
              )}
              src={icon}
              alt={label}
              width={25}
              height={25}
            />
          </div>

          <Text variant={"h5"} weight={"medium"}>
            {label}
          </Text>
        </ActiveLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default SideBarItem;
