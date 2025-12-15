"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import BurgerMenu from "public/assets/icons/BurgerMenu.svg";
import Logo from "public/assets/icons/Logo.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/molecules/sidebar/sidebar";
import { Button } from "@/components/atoms/Button";
import { SidebarMenuProps } from "@/interfaces/SideBar";
import SidebarGroups from "./sidebarGroups";

const SidebarMenu = ({
  logoUrl = "/assets/icons/Logo.svg",
  dashboardHref = "/dashboard",
  sidebarClassName = "",
  headerClassName = "",
  contentClassName = "",
  groups = [],
}: SidebarMenuProps = {}) => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open, isMobile]);

  return (
    <>
      {/* Mobile hamburger button (visible on small screens) */}
      <Button
        variant={"ghost"}
        aria-label="Open menu"
        className="md:hidden fixed top-3 start-3 z-50"
        onClick={() => setOpen(true)}
      >
        <Image src={BurgerMenu} width={14} height={18} alt="burgermenu" />
      </Button>

      {/* Overlay for mobile */}
      {isMobile && (
        <>
          {/* Sidebar always rendered on mobile, toggles transform for animation */}
          <Sidebar
            className={`fixed top-0 left-0 shadow-card h-full w-64 z-50 bg-white border-r border-[#E6EFF5] transform transition-transform duration-300 min-h-screen ease-in-out ${
              open ? "translate-x-0" : "-translate-x-full"
            } ${sidebarClassName}`}
            role="navigation"
            aria-hidden={!open}
          >
            <div
              className={`h-[90px] max-h-[90px] flex items-center justify-center bg-white px-6 border-b border-[#E6EFF5] ${headerClassName}`}
            >
              <Link
                href={dashboardHref}
                className="w-auto h-auto"
                onClick={() => setOpen(false)}
              >
                <Image src={logoUrl} alt="logo" width={183} height={36} />
              </Link>
              {/* close button on mobile inside sidebar */}
              <button
                className="md:hidden p-2 ml-auto"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <SidebarHeader className={`bg-white ${headerClassName}`} />
            <SidebarContent className={`bg-white ${contentClassName}`}>
              s
              <SidebarGroups />
            </SidebarContent>
          </Sidebar>
          {/* Overlay only when sidebar is open */}
          {open && (
            <div
              className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-200 md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden={!open}
            />
          )}
        </>
      )}
      {/* Sidebar for desktop */}
      {!isMobile && (
        <Sidebar
          className={`fixed top-0 left-0 shadow-card h-full w-64 z-50 bg-white border-r border-[#E6EFF5] transform transition-transform duration-300 min-h-screen ease-in-out ${sidebarClassName}`}
          role="navigation"
          variant="sidebar"
        >
          <div
            className={`h-[90px] max-h-[90px] flex items-center justify-center bg-white px-6 border-b border-[#E6EFF5] ${headerClassName}`}
          >
            <Link
              href={dashboardHref}
              className="w-auto h-auto"
              onClick={() => setOpen(false)}
            >
              <Image src={logoUrl} alt="logo" width={183} height={36} />
            </Link>
          </div>
          <SidebarHeader className={`bg-white ${headerClassName}`} />
          <SidebarContent className={`bg-white ${contentClassName}`}>
            <SidebarGroups />
          </SidebarContent>
        </Sidebar>
      )}
    </>
  );
};

export default SidebarMenu;
