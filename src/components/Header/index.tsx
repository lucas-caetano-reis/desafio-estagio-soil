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
    <header className={clsx("bg-[#2f3b1d]", "text-white")}>
      <div
        className={clsx(
          "flex",
          "flex-col",
          "lg:grid lg:grid-cols-[170px_minmax(0,1fr)]",
          "xl:grid-cols-[186px_minmax(0,1fr)]",
        )}
      >
        <Link
          href="/"
          aria-label="Ir para a página inicial da Soil"
          title="Ir para a página inicial da Soil"
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
            "lg:min-h-22 lg:w-full lg:px-5 lg:py-4",
            "xl:min-h-24.5 xl:px-7 xl:py-5",
          )}
        >
          <Image
            src="/images/logo_soil.png"
            alt="Logo da Soil Tecnologia"
            width={121}
            height={57}
            priority
            style={{ height: "auto", width: "auto" }}
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
              "lg:gap-3 lg:px-5 lg:py-3",
              "xl:gap-4 xl:px-10 xl:min-h-17.5",
            )}
          >
            <nav aria-label="Navegação principal">
              <ul
                className={clsx(
                  "flex",
                  "flex-wrap",
                  "justify-center",
                  "gap-x-4",
                  "gap-y-3",
                  "font-medium",
                  "lg:justify-start",
                  "xl:gap-x-5",
                )}
              >
                {navigationItems.map(({ label, href }, index) => (
                  <li key={label}>
                    <Link
                      aria-label={label}
                      title={label}
                      href={href}
                      className={clsx(
                        "transition-colors",
                        index === 0
                          ? "font-bold"
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
                title="Botão de pesquisa"
                aria-label="Botão de pesquisa"
                className={clsx(
                  "inline-flex",
                  "h-10",
                  "w-10",
                  "items-center",
                  "justify-center",
                  "rounded-full",
                  "transition-colors",
                  "hover:bg-white/10",
                )}
              >
                <SearchIcon className={clsx("h-4, w-4")} strokeWidth={2.3} />
              </button>

              <button
                type="button"
                title="Botão de login"
                aria-label="Botão de login"
                className={clsx(
                  "inline-flex",
                  "min-w-28",
                  "items-center",
                  "justify-center",
                  "rounded-full",
                  "bg-white",
                  "px-8",
                  "py-3",
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
