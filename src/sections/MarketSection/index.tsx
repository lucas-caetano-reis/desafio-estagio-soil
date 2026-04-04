import clsx from "clsx";
import AppImage from "@/components/AppImage";

const marketHighlights = [
  "34 mil pivôs no Brasil, crescendo 7% ao ano.",
  "2,8 mil só no Oeste da Bahia, com crescimento de 40% em 2 anos.",
  "Presente no Brasil, nos EUA e em expansão para a Europa.",
];

export default function MarketSection() {
  return (
    <section
      className={clsx(
        "w-full bg-white",
        "px-6 py-16",
        "sm:px-8 sm:py-20",
        "lg:px-16 lg:py-24",
        "xl:px-20 xl:py-28",
      )}
    >
      <div
        className={clsx(
          "mx-auto flex w-full max-w-7xl flex-col",
          "gap-12",
          "md:flex-row md:items-center md:justify-between md:gap-10",
          "xl:gap-16",
        )}
      >
        <div className={clsx("max-w-xl", "md:max-w-115", "xl:max-w-125")}>
          <div
            className={clsx(
              "flex items-center gap-3",
              "text-[15px] font-semibold text-[#a5bf55]",
              "sm:text-[16px]",
            )}
          >
            <span className="h-px w-8 bg-[#a5bf55]" />
            <span>{"Mercado e Presença"}</span>
          </div>

          <h2
            className={clsx(
              "mt-5 font-bold tracking-tight text-[#1f252c]",
              "text-[38px] leading-[1.05]",
              "sm:text-[44px]",
              "lg:text-[52px]",
              "xl:text-[56px]",
            )}
          >
            {"A Soil acompanha"}
            <br />
            {"a evolução do agro:"}
          </h2>

          <ul
            className={clsx(
              "mt-7 space-y-2",
              "text-[17px] leading-[1.7] text-[#7a7f86]",
              "sm:text-[18px]",
              "lg:text-[19px]",
            )}
          >
            {marketHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-[0.5em] text-[#7a7f86]">-</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={clsx("w-full md:max-w-155", "xl:max-w-175")}>
          <div
            className={clsx(
              "relative mx-auto w-full overflow-hidden",
              "aspect-1.25/1",
              "max-w-135",
              "sm:max-w-155",
              "md:max-w-none",
            )}
          >
            <AppImage />
          </div>
        </div>
      </div>
    </section>
  );
}
