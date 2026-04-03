import clsx from "clsx";
import { MailIcon, MapPinIcon, PhoneOutgoingIcon } from "lucide-react";

const contactItems = [
  {
    label: "Santa Rita do Sapucaí - MG",
    href: "/",
    icon: MapPinIcon,
  },
  {
    label: "(35) 99884-2597",
    href: "/",
    icon: PhoneOutgoingIcon,
  },
  {
    label: "(34) 99175-1869",
    href: "/",
    icon: PhoneOutgoingIcon,
  },
  {
    label: "contato@soiltech.com.br",
    href: "/",
    icon: MailIcon,
  },
];

export default function ContactBar() {
  return (
    <div
      className={clsx(
        "flex",
        "flex-wrap",
        "items-center",
        "justify-center",
        "gap-x-4",
        "gap-y-2",
        "px-4",
        "py-2",
        "sm:text-[12px]",
        "md:text-[14px]",
        "lg:text-[16px]",
        "font-medium",
        "tracking-[0.01em]",
        "text-white",
        "bg-[#a5bf55]",
        "sm:px-6",
        "lg:justify-end",
        "lg:gap-x-4 lg:px-5 lg:py-1.5",
        "xl:gap-x-5 xl:px-8 xl:min-h-7",
      )}
    >
      {contactItems.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          aria-label={label}
          title={label}
          href={href}
          className={clsx(
            "inline-flex",
            "items-center",
            "gap-1.5",
            "leading-tight",
            "transition-opacity",
            "hover:opacity-85",
          )}
        >
          <Icon
            className={clsx("h-3.5", "w-3.5", "shrink-0")}
            strokeWidth={2.2}
          />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
