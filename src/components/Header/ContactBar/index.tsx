import clsx from "clsx";
import { MailIcon, MapPinIcon, PhoneOutgoingIcon } from "lucide-react";

const contactItems = [
  {
    label: "Santa Rita do Sapucaí - MG",
    href: "https://www.google.com/maps/place/Soil+Tecnologia+para+Irriga%C3%A7%C3%A3o/@-22.2572446,-45.6957892,17z/data=!3m1!4b1!4m6!3m5!1s0x94cba24072d420ab:0xad032550f983a05f!8m2!3d-22.2572446!4d-45.6957892!16s%2Fg%2F11h3lzlm9v?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D",
    icon: MapPinIcon,
  },
  {
    label: "(35) 99967-9301",
    href: "https://wa.me/5535999679301?text=Ol%C3%A1%2C%20vim%20pelo%20site%20institucional%20e%20tenho%20interesse%20em%20conhecer%20melhor%20suas%20solu%C3%A7%C3%B5es.%20Poderiam%20me%20passar%20mais%20detalhes%3F",
    icon: PhoneOutgoingIcon,
  },
  {
    label: "(77) 99898-9797",
    href: "https://wa.me/5577998989797?text=Ol%C3%A1%2C%20vim%20pelo%20site%20institucional%20e%20tenho%20interesse%20em%20conhecer%20melhor%20suas%20solu%C3%A7%C3%B5es.%20Poderiam%20me%20passar%20mais%20detalhes%3F",
    icon: PhoneOutgoingIcon,
  },
  {
    label: "contato@soiltech.com.br",
    href: "mailto:contato@soiltech.com.br?subject=Contato&body=Ol%C3%A1%2C%20vim%20pelo%20site%20institucional%20e%20tenho%20interesse%20em%20conhecer%20melhor%20suas%20solu%C3%A7%C3%B5es.%20Poderiam%20me%20passar%20mais%20detalhes%3F",
    icon: MailIcon,
  },
];

export default function ContactBar() {
  return (
    <div
      aria-label="Informações de contato"
      className={clsx(
        "flex flex-wrap",
        "bg-[#a5bf55]",
        "items-center justify-center lg:justify-end",
        "text-xs sm:text-sm md:text-base",
        "font-medium",
        "gap-x-4 gap-y-2 px-4 py-2",
        "lg:gap-x-8 lg:px-6",
        "xl:gap-x-12 xl:px-12",
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
            "gap-1.5 leading-tight",
            "transition-opacity hover:opacity-85 focus:opacity-85",
          )}
        >
          <Icon
            className={clsx("h-3.5", "w-3.5", "shrink-0")}
            strokeWidth={2}
          />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
