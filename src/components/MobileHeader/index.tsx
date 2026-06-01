import clsx from "clsx";

import Logo from "@/components/Logo";
import SearchButton from "../SearchButton";
import MenuButton from "../MenuButton";

export default function MobileHeader() {
  return (
    <header className={clsx("sticky top-0 z-50", "bg-[#2f3b1d] text-white")}>
      <div className={clsx("flex w-full flex-row items-center")}>
        <Logo />

        <div className="flex flex-1 items-center justify-between px-3">
          <SearchButton />

          <MenuButton />
        </div>
      </div>
    </header>
  );
}
