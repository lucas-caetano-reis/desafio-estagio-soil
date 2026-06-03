import clsx from "clsx";

import Logo from "@/components/Logo";
import ContactInformations from "@/components/Header/ContactInformations";
import NavigationMenu from "@/components/Header/NavigationMenu";
import SearchButton from "@/components/SearchButton";
import DefaultButton from "@/components/DefaultButton";

export default function Header() {
  return (
    <header
      className={clsx(
        "hidden lg:block sticky top-0 z-50",
        "bg-[#2f3b1d] text-white",
      )}
    >
      <div className={clsx("grid grid-cols-[160px_minmax(0,1fr)]")}>
        <Logo />

        <div>
          <div
            className={clsx(
              "bg-[#a5bf55]",
              "flex flex-row",
              "items-center justify-end",
              "text-base",
              "font-medium",
              "px-6 py-2",
              "xl:px-12",
            )}
          >
            <ContactInformations />
          </div>

          <div
            className={clsx(
              "bg-[#2f3b1d]",
              "flex flex-row",
              "items-center justify-between",
              "text-base",
              "gap-4 px-8 py-2",
              "xl:px-12",
            )}
          >
            <NavigationMenu />

            <div
              className={clsx("flex", "items-center justify-end", "gap-x-4")}
            >
              <SearchButton />

              <DefaultButton
                label="Login"
                ariaLabel="Ir para a página de login"
                title="Ir para a página de login"
                href="https://pc.soiltech.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "min-w-30",
                  "px-4 py-4",
                  "font-bold text-[#2f3b1d]",
                  "bg-white",
                  "transition-colors hover:bg-[#f3f3ed] active:bg-[#f3f3ed]",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
