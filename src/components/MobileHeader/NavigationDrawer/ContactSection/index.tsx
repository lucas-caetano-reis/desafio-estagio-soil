import clsx from "clsx";
import { Mail, MapPin, PhoneOutgoing } from "lucide-react";

const contactItems = [
  {
    label: "Santa Rita do Sapucaí - MG",
    href: "https://www.google.com/maps/place/Soil+Tecnologia+para+Irriga%C3%A7%C3%A3o/@-22.2572446,-45.6957892,17z/data=!3m1!4b1!4m6!3m5!1s0x94cba24072d420ab:0xad032550f983a05f!8m2!3d-22.2572446!4d-45.6957892!16s%2Fg%2F11h3lzlm9v?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D",
    icon: MapPin,
  },
  {
    label: "(35) 99967-9301",
    href: "https://wa.me/5535999679301?text=Ol%C3%A1%2C%20vim%20pelo%20site%20institucional%20e%20tenho%20interesse%20em%20conhecer%20melhor%20suas%20solu%C3%A7%C3%B5es.%20Poderiam%20me%20passar%20mais%20detalhes%3F",
    icon: PhoneOutgoing,
  },
  {
    label: "(77) 99898-9797",
    href: "https://wa.me/5577998989797?text=Ol%C3%A1%2C%20vim%20pelo%20site%20institucional%20e%20tenho%20interesse%20em%20conhecer%20melhor%20suas%20solu%C3%A7%C3%B5es.%20Poderiam%20me%20passar%20mais%20detalhes%3F",
    icon: PhoneOutgoing,
  },
  {
    label: "contato@soiltech.com.br",
    href: "mailto:contato@soiltech.com.br?subject=Contato&body=Ol%C3%A1%2C%20vim%20pelo%20site%20institucional%20e%20tenho%20interesse%20em%20conhecer%20melhor%20suas%20solu%C3%A7%C3%B5es.%20Poderiam%20me%20passar%20mais%20detalhes%3F",
    icon: Mail,
  },
];

type ContactSectionProps = {
  onClose: () => void;
};

export default function ContactSection({
  onClose,
}: Readonly<ContactSectionProps>) {
  return (
    <section className="bg-[#a5bf55] py-2">
      <h2
        className={clsx(
          "border-b border-white px-4 pb-2",
          "text-lg sm:text-2xl md:text-3xl font-bold",
        )}
      >
        Informações de Contato
      </h2>

      <nav aria-label="Informações de contato">
        <ul
          className={clsx(
            "space-y-2 px-4 pt-2",
            "text-sm sm:text-base md:text-lg font-medium",
          )}
        >
          {contactItems.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                aria-label={label}
                title={label}
                href={href}
                className={clsx(
                  "inline-flex",
                  "items-center",
                  "gap-1.5 leading-tight",
                  "transition-opacity hover:opacity-85 active:opacity-85",
                )}
                onClick={onClose}
              >
                <Icon
                  className={clsx(
                    "h-3.5 w-3.5",
                    "sm:h-4 sm:w-4",
                    "md:h-4.5 md:w-4.5",
                    "shrink-0",
                  )}
                  strokeWidth={2}
                />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
