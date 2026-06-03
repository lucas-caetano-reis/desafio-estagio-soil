import clsx from "clsx";
import { LogIn } from "lucide-react";

import NavigationLinks from "@/components/NavigationLinks";

type MenuSectionProps = {
  onClose: () => void;
};

export default function MenuSection({ onClose }: Readonly<MenuSectionProps>) {
  return (
    <section className="bg-[#2f3b1d] py-2">
      <h2
        className={clsx(
          "border-b border-white px-4 pb-2",
          "text-lg sm:text-2xl md:text-3xl font-bold",
        )}
      >
        Menu
      </h2>

      <NavigationLinks
        listClassName={clsx("space-y-4 px-4 pt-4")}
        textClassName={clsx("text-sm sm:text-base md:text-lg font-medium")}
        iconClassName={clsx(
          "h-3.5 w-3.5",
          "sm:h-4 sm:w-4",
          "md:h-4.5 md:w-4.5",
        )}
        onItemClick={onClose}
        showIcons
      />

      <a
        aria-label="Ir para a página de login"
        title="Ir para a página de login"
        href="https://pc.soiltech.com.br/"
        rel="noopener noreferrer"
        className={clsx(
          "inline-flex items-center",
          "px-4 pb-4 pt-4 gap-1.5",
          "text-sm sm:text-base md:text-lg",
          "font-medium leading-tight",
          "transition-opacity hover:opacity-85 active:opacity-85",
        )}
        onClick={onClose}
      >
        <LogIn
          className={clsx(
            "h-3.5 w-3.5",
            "sm:h-4 sm:w-4",
            "md:h-4.5 md:w-4.5",
            "shrink-0",
          )}
          strokeWidth={2}
        />
        <span>Login</span>
      </a>
    </section>
  );
}
