import {
  House,
  BanknoteArrowDown,
  BanknoteArrowUp,
  Toolbox,
  ShoppingBasket,
  Contact,
  Smartphone,
} from "lucide-react";

export const navigationItems = [
  {
    key: "home",
    label: "Home",
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
    key: "aplicativo",
    label: "Aplicativo",
    arialabel: "Baixe o aplicativo da Soil em seu celular",
    href: "#aplicativo",
    icon: Smartphone,
  },
  {
    key: "contato",
    label: "Contato",
    arialabel: "Ir para o rodapé da página",
    href: "#contato",
    icon: Contact,
  },
];
