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
        "relative isolate",
        "w-full bg-[#aac55d] overflow-hidden",
        "text-white",
        "px-6 py-16",
        "sm:px-8 sm:py-20",
        "lg:px-16 lg:py-24",
        "xl:px-20 xl:py-28",
      )}
    >
      <div
        className={clsx(
          "flex flex-col-reverse relative",
          "mx-auto w-full max-w-7xl",
          "gap-10",
          "lg:flex-row lg:items-center lg:justify-between lg:gap-12",
          "xl:gap-18",
        )}
      >
        <FarmImage />

        <div
          className={clsx(
            "w-full max-w-155",
            "lg:max-w-135",
            "xl:max-w-145",
            "text-left",
            "text-white",
          )}
        >
          <h2
            className={clsx(
              "font-bold tracking-tight",
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
              "text-[18px] font-semibold leading-[1.45]",
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
