import clsx from "clsx";

import {
  House,
  Store,
  BanknoteArrowDown,
  BanknoteArrowUp,
  Toolbox,
  ShoppingBasket,
  Contact,
  LogIn,
} from "lucide-react";

const navigationItems = [
  { label: "Home", href: "#inicio", icon: House },
  { label: "Desafio", href: "#desafio", icon: BanknoteArrowDown },
  { label: "Solução", href: "#solucao", icon: Toolbox },
  { label: "Produtos", href: "#produtos", icon: ShoppingBasket },
  { label: "Benefícios", href: "#beneficios", icon: BanknoteArrowUp },
  { label: "Mercado", href: "#mercado", icon: Store },
  { label: "Contato", href: "#contato", icon: Contact },
  { label: "Login", href: "https://pc.soiltech.com.br/", icon: LogIn },
];

type MenuSectionProps = {
  onClose: () => void;
};

export default function MenuSection({ onClose }: Readonly<MenuSectionProps>) {
  return (
    <section className="bg-[#2f3b1d] py-2">
      <h2
        className={clsx(
          "border-b border-white px-4 pb-2",
          "text-lg sm:text-2xl md:text-3xl font-bold",
        )}
      >
        Menu
      </h2>

      <nav aria-label="Menu de navegação">
        <ul
          className={clsx(
            "space-y-4 px-4 pt-4",
            "text-sm sm:text-base md:text-lg font-medium",
          )}
        >
          {navigationItems.map(({ label, href, icon: Icon }, index) => (
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
                  index === 0 ? "font-bold" : "font-medium",
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
