import clsx from "clsx";
import SolutionsList from "@/components/SolutionsList";
import ClientImage from "@/components/ClientImage";

export default function SolutionSection() {
  return (
    <section
      className={clsx(
        "w-full bg-[#253517] text-white",
        "px-6 py-16",
        "sm:px-8 sm:py-20",
        "lg:px-16 lg:py-24",
        "xl:px-20 xl:py-28",
      )}
    >
      <div
        className={clsx(
          "mx-auto flex flex-col w-full max-w-7xl gap-12",
          "lg:flex-row lg:items-center lg:justify-between lg:gap-16",
          "xl:gap-20",
        )}
      >
        <div className={clsx("max-w-xl", "lg:max-w-136", "xl:max-w-152")}>
          <div
            className={clsx(
              "flex items-center gap-3",
              "text-[15px] text-[#a5bf55] font-semibold",
              "sm:text-[16px]",
            )}
          >
            <span className="h-px w-8 bg-[#a5bf55]" />
            <span>Conectividade total + inteligência artificial</span>
          </div>

          <h2
            className={clsx(
              "mt-5 font-bold text-[38px] text-white",
              "tracking-tight leading-[1.05]",
              "sm:text-[44px]",
              "lg:text-[52px]",
              "xl:text-[56px]",
            )}
          >
            A Solução Soil
          </h2>

          <p
            className={clsx(
              "mt-5 max-w-2xl text-white/92",
              "text-[20px] leading-[1.3]",
              "sm:text-[24px]",
              "lg:max-w-lg lg:text-[26px]",
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
