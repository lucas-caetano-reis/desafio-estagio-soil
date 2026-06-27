// Essa seção não é mais utilizada e será excluída no futuro

import clsx from "clsx";
import UnorderedList from "@/components/UnorderedList";

import { marketStatistics } from "@/data/MarketStatistics/marketStatistics";

export default function MarketSection() {
  return (
    <section
      id="mercado"
      className={clsx(
        "flex flex-col",
        "items-center justify-center",
        "bg-[#fffdf9]",
        "px-8 py-8",
        "sm:px-12 sm:py-10",
        "md:px-16 md:py-12",
        "lg:px-20 lg:py-14",
      )}
    >
      <article>
        <div
          className={clsx(
            "flex items-center gap-2",
            "text-sm sm:text-base text-[#a5bf55] font-semibold",
          )}
        >
          <span className="h-px w-4 sm:w-6 bg-[#a5bf55]" />
          <span>Mercado e Presença</span>
        </div>

        <h2
          className={clsx(
            "mt-5 font-bold text-[#1b2027] leading-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
          )}
        >
          A Soil acompanha a evolução do agro:
        </h2>

        <UnorderedList
          items={marketStatistics}
          classname={clsx(
            "mt-8 space-y-6 pl-6",
            "list-disc text-[#1f252c]/60",
            "font-semibold leading-tight",
            "text-sm sm:text-base md:text-lg lg:text-xl",
          )}
        />
      </article>
    </section>
  );
}
