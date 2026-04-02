import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {
  MailIcon,
  MapPinIcon,
  PhoneOutgoingIcon,
  SearchIcon,
} from "lucide-react";

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

const navigationItems = [
  { label: "Home +", href: "/" },
  { label: "Desafio", href: "#desafio" },
  { label: "Solução", href: "#solucao" },
  { label: "Produtos", href: "#produtos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Mercado", href: "#mercado" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <header
      className={clsx(
        "bg-[#2f3b1d]",
        "text-white",
      )}
    >
      <div
        className={clsx(
          "flex",
          "flex-col",
          "xl:grid xl:grid-cols-[186px_minmax(0,1fr)]",
        )}
      >
        <Link
          href="/"
          aria-label="Ir para a página inicial da Soil"
          className={clsx(
            "z-10",
            "flex",
            "w-fit",
            "items-center",
            "justify-center",
            "self-start",
            "rounded-br-4xl",
            "bg-white",
            "px-6",
            "py-4",
            "shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
            "sm:px-8",
            "xl:min-h-24.5 xl:w-full xl:px-7 xl:py-5",
          )}
        >
          <Image
            src="/images/logo_soil.png"
            alt="Logo da Soil Tecnologia"
            width={121}
            height={57}
            priority
            style={{ height: "auto" , width: "auto"}}
            className={clsx("sm:w-30.25")}
          />
        </Link>

        <div>
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
              "text-[12px]",
              "font-medium",
              "tracking-[0.01em]",
              "text-white",
              "bg-[#a5bf55]",
              "sm:px-6",
              "lg:justify-end",
              "lg:gap-x-5",
              "xl:min-h-7 xl:px-8 xl:py-1.5",
            )}
          >
            {contactItems.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
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

          <div
            className={clsx(
              "flex",
              "flex-col",
              "gap-4",
              "px-4",
              "py-4",
              "sm:px-6",
              "lg:flex-row",
              "lg:items-center",
              "lg:justify-between",
              "xl:min-h-17.5 xl:px-10 xl:py-0",
            )}
          >
            <nav aria-label="Navegação principal">
              <ul
                className={clsx(
                  "flex",
                  "flex-wrap",
                  "justify-center",
                  "gap-x-5",
                  "gap-y-3",
                  "text-sm",
                  "font-medium",
                  "text-white",
                  "lg:justify-start",
                )}
              >
                {navigationItems.map(({ label, href }, index) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={clsx(
                        "transition-colors",
                        index === 0
                          ? "font-bold text-white"
                          : "text-white/95 hover:text-white",
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className={clsx(
                "flex",
                "items-center",
                "justify-center",
                "gap-3",
                "lg:justify-end",
              )}
            >
              <button
                type="button"
                aria-label="Pesquisar"
                className={clsx(
                  "inline-flex",
                  "h-10",
                  "w-10",
                  "items-center",
                  "justify-center",
                  "rounded-full",
                  "text-white",
                  "transition-colors",
                  "hover:bg-white/10",
                )}
              >
                <SearchIcon className={clsx("h-4, w-4")} strokeWidth={2.3} />
              </button>

              <button
                type="button"
                className={clsx(
                  "inline-flex",
                  "min-w-28",
                  "items-center",
                  "justify-center",
                  "rounded-full",
                  "bg-white",
                  "px-8",
                  "py-3",
                  "text-sm",
                  "font-bold",
                  "text-[#2f3b1d]",
                  "transition-colors",
                  "hover:bg-[#f3f3ed]",
                )}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
