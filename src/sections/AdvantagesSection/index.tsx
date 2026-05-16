import AdvantagesIcons from "@/components/AdvantagesIcons";
import clsx from "clsx";

export default function AdvantagesSection() {
  return (
    <section
      className={clsx(
        "bg-[#fffdf9] text-[#1b2027]",
        "px-8 py-16",
        "sm:px-12 sm:py-20",
        "md:px-16 md:py-24",
        "lg:px-24",
        "xl:px-28",
      )}
    >
      <div className="mx-auto flex flex-col items-center">
        <header className="text-center">
          <h2
            className={clsx(
              "font-bold",
              "tracking-tight leading-tight",
              "text-4xl lg:text-5xl",
            )}
          >
            Benefícios reais para o produtor
          </h2>
        </header>
        <AdvantagesIcons />
      </div>
    </section>
  );
}
