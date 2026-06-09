import {
  House,
  Store,
  BanknoteArrowDown,
  BanknoteArrowUp,
  Toolbox,
  ShoppingBasket,
  Contact,
} from "lucide-react";

export const navigationItems = [
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
