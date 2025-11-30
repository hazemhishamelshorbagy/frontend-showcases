"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import BurgerMenu from "public/assets/icons/BurgerMenu.svg";
import Logo from "public/assets/icons/Logo.svg";
import { Button } from "../Atoms/Button";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
} from "../Molecules/sidebar/sidebar";

function SidebarMenu() {
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
      {open && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-200 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        />
      )}

      {/* Sidebar (shadcn) */}
      <Sidebar
        className={`fixed top-0left-0 shadow-card h-full w-64 z-50 bg-white border-r border-[#E6EFF5] transform transition-transform duration-300 min-h-screen ease-in-out ${
          open || !isMobile ? "translate-x-0" : "-translate-x-full"
        }`}
        role="navigation"
        variant="sidebar"
        aria-hidden={!open && isMobile}
      >
        <div className="h-[90px] max-h-[90px] flex items-center justify-center bg-white px-6 border-b border-[#E6EFF5]">
          <Link
            href="/dashboard"
            className="w-auto h-auto"
            onClick={() => setOpen(false)}
          >
            <Image src={Logo} alt="logo" width={183} height={36} />
          </Link>
          {/* close button on mobile inside sidebar */}
          {isMobile && (
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
          )}
        </div>
        <SidebarHeader className="bg-white" />
        <SidebarContent className="bg-white">
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
      </Sidebar>
    </>
  );
}

export default SidebarMenu;
