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
    titleClassName: "text-[#a8c453]",
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
        "w-full bg-[#fffdf9] text-[#1b2027]",
        "px-6 py-16",
        "sm:px-8 sm:py-20",
        "lg:px-16 lg:py-24",
        "xl:px-20 xl:py-28",
      )}
    >
      <div className="mx-auto flex flex-col w-full max-w-7xl items-center">
        <header className="text-center">
          <h2
            className={clsx(
              "font-bold text-[2.35rem] text-[#1b2027]",
              "tracking-[-0.03em] leading-none",
              "sm:text-[3rem]",
              "lg:text-[3.35rem]",
            )}
          >
            Conheça nossos produtos:
          </h2>
        </header>

        <div
          className={clsx(
            "mt-10 grid grid-cols-1 w-full gap-6",
            "md:grid-cols-2",
            "xl:mt-12 xl:grid-cols-3",
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
