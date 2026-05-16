import clsx from "clsx";
import SolutionsList from "@/components/SolutionsList";
import ClientImage from "@/components/ClientImage";

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
              "flex items-center gap-3",
              "text-base text-[#a5bf55] font-semibold",
            )}
          >
            <span className="h-px w-8 bg-[#a5bf55]" />
            <span>Conectividade total + inteligência artificial</span>
          </div>

          <h2
            className={clsx(
              "mt-5 font-bold text-4xl lg:text-5xl",
            )}
          >
            A Solução Soil
          </h2>

          <p
            className={clsx(
              "mt-5 text-white/92",
              "text-xl leading-tight",
              "lg:max-w-lg lg:text-2xl",
            )}
          >
            Com a Soil, você controla seus pivôs de qualquer lugar, mesmo
            offline.
          </p>

          <SolutionsList />
        </div>

        <ClientImage />
      </div>
    </section>
  );
}
