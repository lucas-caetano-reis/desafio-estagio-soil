import clsx from "clsx";

import NavigationLinks from "@/components/NavigationLinks";
import DefaultButton from "@/components/DefaultButton";

export default function NavigationBar() {
  return (
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
      <NavigationLinks
        listClassName={clsx(
          "flex flex-wrap",
          "justify-start",
          "gap-x-6 xl:gap-x-12",
        )}
      />

      <div className={clsx("flex items-center justify-end",)}>
        <DefaultButton
          label="Login"
          ariaLabel="Ir para a página de login"
          title="Ir para a página de login"
          href="https://pc.soiltech.com.br/"
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
  );
}
