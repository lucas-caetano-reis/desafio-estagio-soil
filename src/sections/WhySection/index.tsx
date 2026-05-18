import clsx from "clsx";
import SectionImages from "@/components/SectionImages";
import UnorderedList from "@/components/UnorderedList";

const whyHighlights = [
  "Funciona mesmo sem internet.",
  "Plataforma com inteligência artificial.",
  "Manutenção simples e modular.",
  "Novas soluções em desenvolvimento constante.",
  "Pós-venda completo: suporte remoto, revendedores locais e técnicos Soil.",
];

export default function WhySection() {
  return (
    <section
      className={clsx(
        "bg-[#aac55d]",
        "px-8 py-16",
        "sm:px-12 sm:py-20",
        "md:px-16 lg:py-24",
        "xl:px-20",
      )}
    >
      <div
        className={clsx(
          "flex flex-col-reverse lg:flex-row",
          "items-center justify-center",
          "gap-12 lg:gap-16 xl:gap-20",
        )}
      >
        <SectionImages
          src="/images/fazenda_conectada.png"
          alt="Ilustração de uma fazenda conectada com sensores, nuvem e monitoramento remoto."
          width={512}
          height={394}
          classname={clsx(
            "bg-[#71d98d]",
            "max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg",
            "aspect-512/394",
            "rounded-4xl shadow-2xl",
          )}
          imageClassname="object-cover object-center"
        />

        <div className="text-left text-white">
          <h2
            className={clsx(
              "font-bold leading-tight",
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
            )}
          >
            Por que escolher a Soil?
          </h2>

          <UnorderedList
            items={whyHighlights}
            classname={clsx(
              "mt-8 space-y-6 pl-6",
              "list-disc",
              "font-semibold leading-tight",
              "text-sm sm:text-base md:text-lg lg:text-xl",
            )}
          />
        </div>
      </div>
    </section>
  );
}
