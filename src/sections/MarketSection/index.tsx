import clsx from "clsx";
import AppImage from "@/components/AppImage";
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
        "bg-white",
        "px-8 py-16",
        "sm:px-12 sm:py-20",
        "md:px-16 lg:py-24",
        "xl:px-20",
      )}
    >
      <div
        className={clsx(
          "flex flex-col md:flex-row",
          "items-center justify-center",
          "gap-12 md:gap-16 xl:gap-20",
        )}
      >
        <div>
          <div
            className={clsx(
              "flex items-center gap-2",
              "text-base text-[#a5bf55] font-semibold",
            )}
          >
            <span className="h-px w-8 bg-[#a5bf55]" />
            <span>Mercado e Presença</span>
          </div>

          <h2
            className={clsx(
              "mt-5 font-bold text-[#1f252c] leading-tight",
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
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

        <AppImage />
      </div>
    </section>
  );
}
