import clsx from "clsx";
import {
  ChartNoAxesColumnIncreasingIcon,
  MapPinnedIcon,
  RadioTowerIcon,
  SproutIcon,
  WorkflowIcon,
} from "lucide-react";

const advantages = [
  {
    description: (
      <>
        Até <strong>80% menos deslocamentos.</strong>
      </>
    ),
    icon: MapPinnedIcon,
  },
  {
    description: (
      <>
        Até <strong>40% de economia em energia elétrica.</strong>
      </>
    ),
    icon: WorkflowIcon,
  },
  {
    description: (
      <>
        Irrigacão rastreável
        <br />e inteligente.
      </>
    ),
    icon: SproutIcon,
  },
  {
    description: (
      <>
        Mais produtividade,
        <br />
        menos desperdício.
      </>
    ),
    icon: ChartNoAxesColumnIncreasingIcon,
  },
  {
    description: (
      <>
        Cobertura em
        <br />
        qualquer local.
      </>
    ),
    icon: RadioTowerIcon,
  },
] as const;

export default function AdvantagesIcons() {
  return (
    <div
      className={clsx(
        "grid grid-cols-2 lg:grid-cols-5",
        "mt-12 lg:mt-16",
        "w-full sm:max-w-3xl lg:max-w-none",
        "gap-x-6 gap-y-10",
        "sm:gap-x-8",
        "lg:gap-x-5 lg:gap-y-0",
        "xl:gap-x-8",
      )}
    >
      {advantages.map(({ description, icon: Icon }, index) => {
        const isEven = index % 2 === 0;

        return (
          <article
            key={index}
            className={clsx(
              "flex flex-col",
              "items-center text-center",
              "lg:last:col-start-auto",
              isEven && "lg:pt-8 xl:pt-10",
              index === advantages.length - 1 && "col-span-2 lg:col-span-1",
            )}
          >
            <div
              className={clsx(
                "flex",
                "items-center justify-center",
                "rounded-full border shadow-[0_10px_24px_rgba(27,32,39,0.08)]",
                "size-26",
                "sm:size-28",
                "lg:size-26 xl:size-28",
                isEven
                  ? "border-[#31421f] bg-[#31421f] text-white"
                  : "border-[#a8c453] bg-[#a8c453] text-white",
              )}
            >
              <div
                className={clsx(
                  "flex",
                  "items-center justify-center",
                  "rounded-full",
                  "size-13.5",
                  "sm:size-14.5",
                )}
              >
                <Icon
                  aria-hidden="true"
                  className={clsx("stroke-[1.8]", "size-11 sm:size-12")}
                />
              </div>
            </div>

            <p
              className={clsx(
                "mt-5 max-w-60 text-[18px] leading-[1.2]",
                "sm:max-w-64 sm:text-[19px]",
                "lg:max-w-48 lg:text-[17px]",
                "xl:max-w-52 xl:text-[18px]",
                "[&_strong]:font-extrabold",
              )}
            >
              {description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
