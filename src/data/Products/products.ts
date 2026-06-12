export type Product = {
  id: number;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
};

export const products = [
  {
    id: 1,
    title: "Soil Tech:",
    description: "Controle e monitoramento completos do sistema.",
    imageAlt: "Homem instalando um monitor em um equipamento agrícola",
    imageSrc: "/images/hero_background.jpg",
  },
  {
    id: 2,
    title: "Pluviômetro automatizado:",
    description: "Precisão no manejo da irrigação.",
    imageAlt: "Monitor instalado em um pluviômetro agrícola",
    imageSrc: "/images/monitor_2.jpg",
  },
  {
    id: 3,
    title: "Produto 3:",
    description: "Descrição do produto 3.",
    imageAlt: "Cliente utilizando o aplicativo da Soil",
    imageSrc: "/images/cliente.png",
  },
  {
    id: 4,
    title: "Produto 4:",
    description: "Descrição do produto 4.",
    imageAlt: "Homem instalando um monitor em um equipamento agrícola",
    imageSrc: "/images/hero_background.jpg",
  },
  {
    id: 5,
    title: "Produto 5:",
    description: "Descrição do produto 5.",
    imageAlt: "Monitor instalado em um pluviômetro agrícola",
    imageSrc: "/images/monitor_2.jpg",
  },
  {
    id: 6,
    title: "Soil Monitor:",
    description: "Monitoramento de pressão e localização do pivô.",
    imageAlt: "Monitor de pivô com a logo da Soil",
    imageSrc: "/images/monitor_1.jpg",
  },
];
