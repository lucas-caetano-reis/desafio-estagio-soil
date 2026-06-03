import clsx from "clsx";

const navigationItems = [
  { label: "Home +", href: "#inicio" },
  { label: "Desafio", href: "#desafio" },
  { label: "Solução", href: "#solucao" },
  { label: "Produtos", href: "#produtos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Mercado", href: "#mercado" },
  { label: "Contato", href: "#contato" },
];

export default function NavigationMenu() {
  return (
    <nav aria-label="Menu de navegação">
      <ul
        className={clsx(
          "flex flex-wrap",
          "justify-start",
          "gap-x-6 xl:gap-x-12",
        )}
      >
        {navigationItems.map(({ label, href }, index) => (
          <li key={label}>
            <a
              aria-label={label}
              title={label}
              href={href}
              className={clsx(
                "transition-opacity hover:opacity-85 active:opacity-85",
                index === 0 ? "font-bold" : "font-medium",
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
