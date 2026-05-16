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
        "bg-[#fffdf9] text-[#1b2027]",
        "px-8 py-16",
        "sm:px-12 sm:py-20",
        "lg:px-16 lg:py-24",
        "xl:px-20",
      )}
    >
      <div className="mx-auto flex flex-col items-center max-w-7xl">
        <header className="text-center">
          <h2
            className={clsx(
              "font-bold",
              "leading-tight tracking-tight",
              "text-4xl lg:text-5xl",
            )}
          >
            Conheça nossos produtos:
          </h2>
        </header>

        <div
          className={clsx(
            "mt-12",
            "grid grid-cols-1 xl:grid-cols-3",
            "gap-6",
          )}
        >
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
