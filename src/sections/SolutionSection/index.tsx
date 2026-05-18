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
        "bg-[#253517] text-white",
        "px-8 py-16",
        "sm:px-12 sm:py-20",
        "md:px-16 lg:py-24",
        "xl:px-20",
      )}
    >
      <div
        className={clsx(
          "flex flex-col lg:flex-row",
          "items-center justify-center",
          "gap-12 lg:gap-16 xl:gap-20",
        )}
      >
        <div>
          <div
            className={clsx(
              "flex items-center gap-2",
              "text-base text-[#a5bf55] font-semibold",
            )}
          >
            <span className="h-px w-8 bg-[#a5bf55]" />
            <span>Conectividade total + inteligência artificial</span>
          </div>

          <h2
            className={clsx(
              "mt-5 font-bold leading-tight",
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
            )}
          >
            A Solução Soil
          </h2>

          <p
            className={clsx(
              "mt-5 text-white/92",
              "text-base sm:text-lg md:text-xl lg:text-2xl leading-tight",
              "lg:max-w-lg",
            )}
          >
            Com a Soil, você controla seus pivôs de qualquer lugar, mesmo
            offline.
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
            "max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg",
            "aspect-square",
            "rounded-4xl border-4 border-[#a5bf55]/90",
          )}
          imageClassname="object-cover object-center"
        />
      </div>
    </section>
  );
}
