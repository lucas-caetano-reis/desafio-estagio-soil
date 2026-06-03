import clsx from "clsx";

import ContactLinks from "@/components/ContactLinks";

export default function ContactBar() {
  return (
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
      <ContactLinks
        listClassName={clsx("flex flex-wrap", "gap-x-8 gap-y-2", "xl:gap-x-12")}
        iconClassName={clsx("h-3.5 w-3.5", "xl:h-4 xl:w-4")}
      />
    </div>
  );
}
