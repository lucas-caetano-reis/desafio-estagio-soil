import clsx from "clsx";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Soil Monitor:",
    description: "Monitoramento de pressão e localização do pivô.",
    moreLabel: "Saiba mais",
    imageAlt: "Monitor de pivô com a logo da Soil",
    imageSrc: "/images/monitor_1.jpg",
  },
  {
    title: "Soil Tech:",
    description: "Controle e monitoramento completos do sistema.",
    moreLabel: "Saiba mais",
    imageAlt: "Homem instalando um monitor em um equipamento agrícola",
    imageSrc: "/images/hero_background.jpg",
  },
  {
    title: "Pluviômetro automatizado:",
    description: "Precisão no manejo da irrigação.",
    moreLabel: "Saiba mais",
    imageAlt: "Monitor instalado em um pluviômetro agrícola",
    imageSrc: "/images/monitor_2.jpg",
  },
] as const;

export default function ProductsSection() {
  return (
    <section
      className={clsx(
        "mx-auto flex flex-col items-center",
        "bg-[#fffdf9] text-[#1b2027]",
        "px-8 py-8",
        "sm:px-12 sm:py-10",
        "md:px-16 md:py-12",
        "lg:px-20 lg:py-14",
      )}
    >
      <header>
        <h2
          className={clsx(
            "text-center",
            "font-bold tracking-tight leading-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
          )}
        >
          Conheça nossos produtos:
        </h2>
      </header>

      <div className={clsx("mt-12", "flex flex-col lg:flex-row", "gap-6")}>
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}
