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
        Irrigacão rastreável
        <br />e inteligente.
      </>
    ),
    iconAlt: "Ícone de irrigação inteligente.",
    iconSrc: "/images/icone_irrigacao.png",
  },
  {
    description: (
      <>
        Mais produtividade,
        <br />
        menos desperdício.
      </>
    ),
    iconAlt: "Ícone de gráfico com crescimento de produtividade.",
    iconSrc: "/images/icone_grafico.png",
  },
  {
    description: (
      <>
        Cobertura em
        <br />
        qualquer local.
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
        "lg:gap-x-8 lg:gap-y-0",
      )}
    >
      {advantages.map(({ description, iconAlt, iconSrc }, index) => {
        const isEven = index % 2 === 0;

        return (
          <article
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
                "flex",
                "items-center justify-center",
                "rounded-full border",
                "size-28 shadow-lg",
                isEven
                  ? "border-[#31421f] bg-[#31421f]"
                  : "border-[#a8c453] bg-[#a8c453]",
              )}
            >
              <Image
                src={iconSrc}
                alt={iconAlt}
                width={56}
                height={56}
                className="h-auto w-16 object-contain"
              />
            </div>

            <p className="mt-5 max-w-60 text-lg leading-tight">{description}</p>
          </article>
        );
      })}
    </div>
  );
}
