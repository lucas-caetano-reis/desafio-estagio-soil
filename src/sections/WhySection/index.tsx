import clsx from "clsx";
import FarmImage from "@/components/FarmImage";

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
        "relative isolate w-full overflow-hidden bg-[#aac55d] text-white",
        "px-6 py-16",
        "sm:px-8 sm:py-20",
        "lg:px-16 lg:py-24",
        "xl:px-20 xl:py-28",
      )}
    >
      <div
        className={clsx(
          "relative mx-auto flex w-full max-w-7xl flex-col-reverse gap-10",
          "lg:flex-row lg:items-center lg:justify-between lg:gap-12",
          "xl:gap-18",
        )}
      >
        <div className={clsx("w-full lg:max-w-130", "xl:max-w-140")}>
          <div
            className={clsx(
              "relative mx-auto aspect-[1.16/1] w-full max-w-125 overflow-hidden rounded-[28px] bg-[#71d98d]",
              "shadow-[0_20px_60px_rgba(75,102,38,0.18)]",
              "lg:mx-0 lg:max-w-none",
            )}
          >
            <FarmImage />
          </div>
        </div>

        <div
          className={clsx(
            "w-full max-w-155",
            "lg:max-w-135",
            "xl:max-w-145",
            "text-left",
          )}
        >
          <h2
            className={clsx(
              "font-bold tracking-tight text-white",
              "text-[36px] leading-[1.08]",
              "sm:text-[44px]",
              "lg:text-[54px]",
              "xl:text-[58px]",
            )}
          >
            Por que escolher a Soil?
          </h2>

          <ul
            className={clsx(
              "mt-8 space-y-5",
              "text-[18px] font-semibold leading-[1.45] text-white",
              "sm:text-[20px]",
              "lg:mt-10 lg:space-y-6 lg:text-[18px]",
              "xl:text-[19px]",
            )}
          >
            {whyHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-white"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
