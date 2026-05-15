import clsx from "clsx";
import Link from "next/link";
import SearchButton from "@/components/SearchButton";
import DefaultButton from "@/components/DefaultButton";

const navigationItems = [
  { label: "Home +", href: "/" },
  { label: "Desafio", href: "#desafio" },
  { label: "Solução", href: "#solucao" },
  { label: "Produtos", href: "#produtos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Mercado", href: "#mercado" },
  { label: "Contato", href: "#contato" },
];

export default function NavigationBar() {
  return (
    <div
      aria-label="Barra de navegação"
      className={clsx(
        "flex flex-col lg:flex-row",
        "text-xs sm:text-sm md:text-base",
        "gap-4 px-4 py-4",
        "lg:items-center lg:justify-between",
        "lg:px-8 xl:px-12",
      )}
    >
      <nav aria-label="Atalhos para outras páginas">
        <ul
          className={clsx(
            "flex flex-wrap",
            "justify-center lg:justify-start",
            "gap-x-4 sm:gap-x-8 md:gap-x-10 lg:gap-x-6 xl:gap-x-12",
          )}
        >
          {navigationItems.map(({ label, href }, index) => (
            <li key={label}>
              <Link
                aria-label={label}
                title={label}
                href={href}
                className={clsx(
                  "transition-opacity hover:opacity-85 focus:opacity-85",
                  index === 0 ? "font-bold" : "font-medium",
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        aria-label="Botões de pesquisa e login"
        className={clsx(
          "flex",
          "items-center justify-center lg:justify-end",
          "gap-x-4",
        )}
      >
        <SearchButton />

        <DefaultButton
          label="Login"
          aria_label="Botão de login"
          title="Botão de login"
          href="https://pc.soiltech.com.br/"
          className={clsx(
            "min-w-28",
            "px-4 py-4",
            "font-bold text-[#2f3b1d]",
            "bg-white",
            "transition-colors hover:bg-[#f3f3ed] focus:bg-[#f3f3ed]",
          )}
        />
      </div>
    </div>
  );
}
