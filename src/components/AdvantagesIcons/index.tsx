import clsx from "clsx";
import Image from "next/image";

const advantages = [
  {
    description: (
      <>
        Até <strong>80% menos deslocamentos.</strong>
      </>
    ),
    iconAlt: "Ícone de deslocamento e localização.",
    iconSrc: "/images/icone_caminho.png",
  },
  {
    description: (
      <>
        Até <strong>40% de economia em energia elétrica.</strong>
      </>
    ),
    iconAlt: "Ícone de conta de luz e economia de energia.",
    iconSrc: "/images/icone_conta_de_luz.png",
  },
  {
    description: (
      <>
        Irrigacão rastreável e inteligente.
      </>
    ),
    iconAlt: "Ícone de irrigação inteligente.",
    iconSrc: "/images/icone_irrigacao.png",
  },
  {
    description: (
      <>
        Mais produtividade, menos desperdício.
      </>
    ),
    iconAlt: "Ícone de gráfico com crescimento de produtividade.",
    iconSrc: "/images/icone_grafico.png",
  },
  {
    description: (
      <>
        Cobertura em qualquer local.
      </>
    ),
    iconAlt: "Ícone de transmissão e cobertura de sinal.",
    iconSrc: "/images/icone_transmissao.png",
  },
] as const;

export default function AdvantagesIcons() {
  return (
    <div
      className={clsx(
        "mt-12 lg:mt-16",
        "grid grid-cols-2 lg:grid-cols-5",
        "gap-x-4 gap-y-8",
        "md:gap-x-24",
        "lg:gap-x-8 lg:gap-y-0",
      )}
    >
      {advantages.map(({ description, iconAlt, iconSrc }, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={iconSrc}
            className={clsx(
              "flex flex-col",
              "items-center text-center",
              isEven && "lg:pt-8 xl:pt-10",
              index === advantages.length - 1 && "col-span-2 lg:col-span-1",
            )}
          >
            <div
              className={clsx(
                "bg-[#31421f] shadow-lg",
                "flex items-center justify-center",
                "rounded-full border border-[#31421f]",
                "aspect-112/112 size-16 sm:size-20 md:size-24 lg:size-28",
                "transition-colors duration-200",
                "hover:bg-[#a8c453] active:bg-[#a8c453]",
                "hover:border-[#a8c453] active:border-[#a8c453]",
              )}
            >
              <Image
                src={iconSrc}
                alt={iconAlt}
                width={112}
                height={112}
                className="w-1/2 h-auto object-contain"
              />
            </div>

            <p
              className={clsx(
                "mt-5 leading-tight max-w-60",
                "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl",
              )}
            >
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
