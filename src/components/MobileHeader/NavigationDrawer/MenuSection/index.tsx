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
  {
    key: "home",
    label: "Home +",
    arialabel: "Voltar para o início da página",
    href: "#inicio",
    icon: House,
  },
  {
    key: "desafio",
    label: "Desafio",
    arialabel: "Conhecer os desafios no campo",
    href: "#desafio",
    icon: BanknoteArrowDown,
  },
  {
    key: "solucao",
    label: "Solução",
    arialabel: "Conhecer as soluções que a Soil oferece",
    href: "#solucao",
    icon: Toolbox,
  },
  {
    key: "produtos",
    label: "Produtos",
    arialabel: "Ver o catálogo de produtos",
    href: "#produtos",
    icon: ShoppingBasket,
  },
  {
    key: "beneficios",
    label: "Benefícios",
    arialabel: "Descobrir os benefícios dos produtos",
    href: "#beneficios",
    icon: BanknoteArrowUp,
  },
  {
    key: "mercado",
    label: "Mercado",
    arialabel: "Estatísticas de mercado",
    href: "#mercado",
    icon: Store,
  },
  {
    key: "contato",
    label: "Contato",
    arialabel: "Ir para o rodapé da página",
    href: "#contato",
    icon: Contact,
  },
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
          {navigationItems.map(
            ({ key, label, arialabel, href, icon: Icon }, index) => (
              <li key={key}>
                <a
                  aria-label={arialabel}
                  title={arialabel}
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
            ),
          )}

          <li key="login">
            <a
              aria-label="Ir para a página de login"
              title="Ir para a página de login"
              href="https://pc.soiltech.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "inline-flex",
                "items-center",
                "gap-1.5 leading-tight",
                "transition-opacity hover:opacity-85 active:opacity-85",
              )}
              onClick={onClose}
            >
              <LogIn
                className={clsx(
                  "h-3.5 w-3.5",
                  "sm:h-4 sm:w-4",
                  "md:h-4.5 md:w-4.5",
                  "shrink-0",
                )}
                strokeWidth={2}
              />
              <span>Login</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
