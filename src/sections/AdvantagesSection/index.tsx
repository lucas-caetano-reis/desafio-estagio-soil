import AdvantagesIcons from "@/components/AdvantagesIcons";
import clsx from "clsx";

export default function AdvantagesSection() {
  return (
    <section
      className={clsx(
        "w-full bg-white text-[#1b2027]",
        "px-6 py-16",
        "sm:px-8 sm:py-20",
        "lg:px-16 lg:py-24",
        "xl:px-20 xl:py-28",
      )}
    >
      <div
        className={clsx(
          "flex flex-col",
          "items-center",
          "mx-auto",
          "w-full max-w-7xl",
        )}
      >
        <h2
          className={clsx(
            "max-w-4xl",
            "text-center font-bold",
            "tracking-tight leading-[1.08]",
            "text-[36px]",
            "sm:text-[44px]",
            "lg:text-[54px]",
            "xl:text-[58px]",
          )}
        >
          Benefícios reais para o produtor
        </h2>
        <AdvantagesIcons />
      </div>
    </section>
  );
}
