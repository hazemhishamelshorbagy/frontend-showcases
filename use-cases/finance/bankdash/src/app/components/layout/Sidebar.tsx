"use client";

import { BurgerMenu, Logo } from "@/app/assets/assets";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useIsMobile from "@/app/hooks/useIsMobile";
import Image from "next/image";
import { Button } from "../ui/button";

function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isMobile = useIsMobile();

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
        className="md:hidden fixed top-3 start-3 z-50  bg"
        onClick={() => setOpen(true)}
      >
        <Image src={BurgerMenu} width={14} height={18} alt="burgermenu" />
      </Button>

      {/* Overlay — only interactive/visible when open on small screens */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-white border-r border-[#E6EFF5] transform transition-transform duration-300 min-h-screen ease-in-out
          ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0  md:block`}
        role="navigation"
        aria-hidden={!open && isMobile}
      >
        <div className="h-16 flex items-center justify-between px-4">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image src={Logo} alt="logo" width={140} height={48} />
          </Link>

          {/* close button on mobile inside sidebar */}
          <button
            className="md:hidden p-2"
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

        {/* content area — keep existing spacing and allow children/links below */}
        <div className="px-4 pt-3">
          {/* Keep the original spacing/layout — add more nav items here as needed */}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
