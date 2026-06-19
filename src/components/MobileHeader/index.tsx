"use client";

import clsx from "clsx";
import { useState, useEffect } from "react";

import Logo from "@/components/Logo";
import MenuButton from "@/components/MobileHeader/MenuButton";
import SideBar from "@/components/SideBar";

export default function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    function handleResize(event: MediaQueryListEvent) {
      if (event.matches) {
        closeDrawer();
      }
    }

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={clsx(
          "flex lg:hidden sticky top-0 z-40",
          "bg-[#2f3b1d] text-white",
        )}
      >
        <div className={clsx("flex w-full flex-row items-center")}>
          <Logo />

          <div className="flex flex-1 items-center justify-end px-3">
            <MenuButton isOpen={isDrawerOpen} onClick={openDrawer} />
          </div>
        </div>
      </header>

      <SideBar isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}
