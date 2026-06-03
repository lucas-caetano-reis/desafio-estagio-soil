import clsx from "clsx";

const navigationItems = [
  {
    key: "home",
    label: "Home +",
    arialabel: "Voltar para o início da página",
    href: "#inicio",
  },
  {
    key: "desafio",
    label: "Desafio",
    arialabel: "Conhecer os desafios no campo",
    href: "#desafio",
  },
  {
    key: "solucao",
    label: "Solução",
    arialabel: "Conhecer as soluções que a Soil oferece",
    href: "#solucao",
  },
  {
    key: "produtos",
    label: "Produtos",
    arialabel: "Ver o catálogo de produtos",
    href: "#produtos",
  },
  {
    key: "beneficios",
    label: "Benefícios",
    arialabel: "Descobrir os benefícios dos produtos",
    href: "#beneficios",
  },
  {
    key: "mercado",
    label: "Mercado",
    arialabel: "Estatísticas de mercado",
    href: "#mercado",
  },
  {
    key: "contato",
    label: "Contato",
    arialabel: "Ir para o rodapé da página",
    href: "#contato",
  },
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
        {navigationItems.map(({ key, label, arialabel, href }, index) => (
          <li key={key}>
            <a
              aria-label={arialabel}
              title={arialabel}
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
