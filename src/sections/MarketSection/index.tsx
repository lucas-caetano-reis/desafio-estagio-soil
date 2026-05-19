import clsx from "clsx";
import SectionImages from "@/components/SectionImages";
import UnorderedList from "@/components/UnorderedList";

const marketHighlights = [
  "34 mil pivôs no Brasil, crescendo 7% ao ano.",
  "2,8 mil só no Oeste da Bahia, com crescimento de 40% em 2 anos.",
  "Presente no Brasil, nos EUA e em expansão para a Europa.",
];

export default function MarketSection() {
  return (
    <section
      className={clsx(
        "flex flex-col lg:flex-row",
        "items-center justify-center",
        "bg-[#fffdf9]",
        "gap-12 md:gap-16 xl:gap-20",
        "px-8 py-8",
        "sm:px-12 sm:py-10",
        "md:px-16 md:py-12",
        "lg:px-20 lg:py-14",
      )}
    >
      <div>
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
            "mt-5 font-bold text-[#1f252c] leading-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
          )}
        >
          A Soil acompanha a evolução do agro:
        </h2>

        <UnorderedList
          items={marketHighlights}
          classname={clsx(
            "mt-8 space-y-6 pl-6",
            "list-disc text-[#1f252c]/60",
            "font-semibold leading-tight",
            "text-sm sm:text-base md:text-lg lg:text-xl",
          )}
        />
      </div>

      <SectionImages
        src="/images/telas_app.png"
        alt="Telas do aplicativo Soil com mapas, históricos e indicadores de irrigação."
        width={768}
        height={384}
        classname={clsx(
          "max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl",
          "aspect-768/384",
        )}
        imageClassname="object-contain"
      />
    </section>
  );
}
