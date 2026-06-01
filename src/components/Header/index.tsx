import clsx from "clsx";

import Logo from "@/components/Logo";
import ContactBar from "@/components/Header/ContactBar";
import NavigationBar from "@/components/Header/NavigationBar";

export default function Header() {
  return (
    <header className={clsx("sticky top-0 z-50", "bg-[#2f3b1d] text-white")}>
      <div className={clsx("grid grid-cols-[160px_minmax(0,1fr)]")}>
        <Logo />

        <div>
          <ContactBar />

          <NavigationBar />
        </div>
      </div>
    </header>
  );
}
