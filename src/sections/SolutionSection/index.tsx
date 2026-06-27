import clsx from "clsx";
import OrderedList from "@/components/OrderedList";
import { solutions } from "@/data/Solutions/solutions";
import SectionImages from "@/components/SectionImages";

export default function SolutionSection() {
  return (
    <section
      id="solucao"
      className={clsx(
        "flex min-h-[calc(100svh-var(--header-height))] flex-col lg:flex-row",
        "items-center justify-center",
        "bg-[#253517] text-white",
        "gap-y-12 lg:gap-y-0",
        "lg:gap-x-16 xl:gap-x-20",
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
            "text-[#a5bf55] font-semibold tracking-tight",
            "text-sm sm:text-lg xl:text-xl",
          )}
        >
          <span className="h-px sm:h-0.5 w-4 sm:w-6 bg-[#a5bf55]" />
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
            "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
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
            "text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]",
          )}
        />
      </article>

      <SectionImages
        src="/images/cliente.png"
        alt="Cliente utilizando o aplicativo da Soil para monitorar e controlar a irrigação de seu campo."
        width={512}
        height={512}
        classname={clsx(
          "bg-[#31431f]",
          "max-w-2xs sm:max-w-xs md:max-w-sm lg:max-w-lg",
          "aspect-512/512",
          "rounded-4xl border-4 border-[#a5bf55]/90",
        )}
        imageClassname="object-cover object-center"
      />
    </section>
  );
}
