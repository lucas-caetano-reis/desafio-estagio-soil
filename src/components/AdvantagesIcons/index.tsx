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
        "w-full sm:max-w-3xl lg:max-w-none",
        "mt-12 lg:mt-16",
        "grid grid-cols-2 lg:grid-cols-5",
        "gap-x-6 gap-y-10",
        "sm:gap-x-8",
        "lg:gap-x-5 lg:gap-y-0",
        "xl:gap-x-8",
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
                "flex relative",
                "items-center justify-center",
                "rounded-full border",
                "size-26 shadow-[0_10px_24px_rgba(27,32,39,0.08)]",
                "sm:size-28 lg:size-26 xl:size-28",
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
                className={clsx(
                  "h-auto w-16 object-contain",
                  "sm:w-[4.35rem]",
                  "lg:w-16 xl:w-[4.35rem]",
                )}
              />
            </div>

            <p
              className={clsx(
                "mt-5 leading-[1.2]",
                "max-w-60 text-[18px]",
                "sm:max-w-64 sm:text-[19px]",
                "lg:max-w-48 lg:text-[17px]",
                "xl:max-w-52 xl:text-[18px]",
                "[&_strong]:font-extrabold",
              )}
            >
              {description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
