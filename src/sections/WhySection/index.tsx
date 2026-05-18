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
        "flex flex-col-reverse lg:flex-row",
        "items-center justify-center",
        "bg-[#aac55d]",
        "gap-12 lg:gap-16 xl:gap-20",
        "px-8 py-8",
        "sm:px-12 sm:py-10",
        "md:px-16 md:py-12",
        "lg:px-20 lg:py-14",
      )}
    >
      <SectionImages
        src="/images/fazenda_conectada.png"
        alt="Ilustração de uma fazenda conectada com sensores, nuvem e monitoramento remoto."
        width={512}
        height={394}
        classname={clsx(
          "bg-[#71d98d]",
          "max-w-2xs sm:max-w-xs md:max-w-sm lg:max-w-md",
          "aspect-512/394",
          "rounded-4xl shadow-2xl",
        )}
        imageClassname="object-cover object-center"
      />

      <div className="text-left text-white">
        <h2
          className={clsx(
            "font-bold leading-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
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
    </section>
  );
}
