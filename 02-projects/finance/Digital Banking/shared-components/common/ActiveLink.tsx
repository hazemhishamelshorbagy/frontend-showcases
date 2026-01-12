"use client";
import { cn } from "@/lib/utils";
import { ActivePropsLink } from "@/shared-types/SideBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const ActiveLink: React.FC<ActivePropsLink> = ({
  children,
  href,
  className,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const style = {
    marginRight: 10,
    color: isActive && "#2D60FF",
  };

  return (
    <div className="relative ">
      <div
        className={cn(
          isActive && "bg-bankdash-primary ",
          "absolute start-0 top-0 h-full lg:w-1.5 w-0.5 transition-all duration-300 rounded-se-xl rounded-ee-xl"
        )}
      ></div>
      <Link style={style} className={className} href={href}>
        {children}
      </Link>
    </div>
  );
};

export default ActiveLink;
