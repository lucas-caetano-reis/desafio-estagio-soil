import clsx from "clsx";
import Link from "next/link";
import { SearchIcon } from "lucide-react";

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
      className={clsx(
        "flex flex-col lg:flex-row",
        "sm:text-[12px] md:text-[14px] lg:text-[16px]",
        "font-medium",
        "gap-4 px-4 py-4",
        "sm:px-6",
        "lg:items-center lg:justify-between",
        "lg:gap-3 lg:px-5 lg:py-3",
        "xl:gap-4 xl:px-10 xl:min-h-17.5",
      )}
    >
      <nav aria-label="Navegação principal">
        <ul
          className={clsx(
            "flex flex-wrap",
            "justify-center lg:justify-start",
            "gap-x-4 gap-y-3",
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
                  index === 0 ? "font-bold" : "text-white/95 hover:text-white",
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
          "items-center justify-center lg:justify-end",
          "gap-3",
        )}
      >
        <button
          type="button"
          title="Botão de pesquisa"
          aria-label="Botão de pesquisa"
          className={clsx(
            "inline-flex",
            "h-10 w-10",
            "items-center justify-center",
            "rounded-full",
            "transition-colors hover:bg-white/10",
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
            "items-center justify-center",
            "rounded-full",
            "px-8 py-3",
            "font-bold text-[#2f3b1d]",
            "bg-white transition-colors hover:bg-[#f3f3ed]",
          )}
        >
          Login
        </button>
      </div>
    </div>
  );
}
