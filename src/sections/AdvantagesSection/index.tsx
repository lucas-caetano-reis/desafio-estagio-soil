import AdvantagesIcons from "@/components/AdvantagesIcons";
import clsx from "clsx";

export default function AdvantagesSection() {
  return (
    <section
      id="beneficios"
      className={clsx(
        "flex flex-col items-center",
        "bg-[#fffdf9] text-[#1b2027]",
        "px-8 py-8",
        "sm:px-12 sm:py-10",
        "md:px-16 md:py-12",
        "lg:px-20 lg:py-14",
      )}
    >
      <header>
        <h2
          className={clsx(
            "text-center",
            "font-bold leading-tight tracking-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
          )}
        >
          Benefícios reais para o produtor
        </h2>
      </header>

      <AdvantagesIcons />
    </section>
  );
}
