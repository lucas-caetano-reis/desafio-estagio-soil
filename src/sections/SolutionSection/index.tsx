import clsx from "clsx";
import OrderedList from "@/components/OrderedList";
import SectionImages from "@/components/SectionImages";

const solutions = [
  "Automação remota via aplicativo.",
  "GPS e sensores embarcados.",
  "Conectividade por Satélite, RádioLoRa, Wi-Fi ou redes móveis.",
  "Plataforma intuitiva com suporte inteligente e proativo.",
];

export default function SolutionSection() {
  return (
    <section
      className={clsx(
        "flex flex-col lg:flex-row",
        "items-center justify-center",
        "bg-[#253517] text-white",
        "gap-12 lg:gap-16 xl:gap-20",
        "px-8 py-8",
        "sm:px-12 sm:py-10",
        "md:px-16 md:py-12",
        "lg:px-20 lg:py-14",
      )}
    >
      <div>
        <div
          className={clsx(
            "flex items-center gap-2",
            "text-sm sm:text-base text-[#a5bf55] font-semibold",
          )}
        >
          <span className="h-px w-4 sm:w-6 bg-[#a5bf55]" />
          <span>Conectividade total + inteligência artificial</span>
        </div>

        <h2
          className={clsx(
            "mt-5 font-bold leading-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
          )}
        >
          A Solução Soil
        </h2>

        <p
          className={clsx(
            "mt-5 text-white/92 leading-tight",
            "text-base sm:text-lg md:text-xl lg:text-2xl",
          )}
        >
          Com a Soil, você controla seus pivôs de qualquer lugar, mesmo offline.
        </p>

        <OrderedList
          items={solutions}
          classname={clsx(
            "mt-8 space-y-6 pl-6",
            "marker:text-[#a5bf55]",
            "font-semibold leading-tight",
            "text-sm sm:text-base md:text-lg lg:text-xl",
          )}
        />
      </div>

      <SectionImages
        src="/images/cliente.png"
        alt="Cliente usando o aplicativo da Soil no campo"
        width={512}
        height={512}
        classname={clsx(
          "bg-[#31431f]",
          "max-w-3xs sm:max-w-2xs md:max-w-xs lg:max-w-sm xl:max-w-md",
          "aspect-512/512",
          "rounded-4xl border-4 border-[#a5bf55]/90",
        )}
        imageClassname="object-cover object-center"
      />
    </section>
  );
}
