import clsx from "clsx";

import Logo from "@/components/Logo";
import ContactBar from "@/components/ContactBar";
import NavigationBar from "@/components/NavigationBar";

export default function Header() {
  return (
    <header className={clsx("bg-[#2f3b1d]", "text-white")}>
      <div
        className={clsx(
          "flex flex-col",
          "lg:grid lg:grid-cols-[170px_minmax(0,1fr)]",
          "xl:grid-cols-[186px_minmax(0,1fr)]",
        )}
      >
        <Logo />

        <div>
          <ContactBar />

          <NavigationBar />
        </div>
      </div>
    </header>
  );
}
