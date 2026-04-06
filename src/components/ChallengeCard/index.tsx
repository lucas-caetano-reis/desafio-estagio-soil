import clsx from "clsx";
import Image from "next/image";

type ChallengeCardProps = {
  title: string;
  description: string;
  iconAlt: string;
  iconSrc: string;
  isPrimary?: boolean;
};

export default function ChallengeCard({
  title,
  description,
  iconAlt,
  iconSrc,
  isPrimary = false,
}: Readonly<ChallengeCardProps>) {
  return (
    <article
      className={clsx(
        "relative overflow-hidden text-left",
        "rounded-2xl border-b-4",
        "bg-white shadow-[0_18px_45px_rgba(27,32,39,0.08)]",
        "px-6 py-6",
        "sm:px-7 sm:py-7",
        "lg:min-h-33 lg:px-8",
        isPrimary ? "border-[#a8c453]" : "border-transparent",
      )}
    >
      <div className="relative z-10 flex items-start gap-4 sm:gap-5">
        <div
          className={clsx(
            "flex shrink-0 items-center justify-center rounded-full",
            "size-12 sm:size-14",
          )}
        >
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={56}
            height={56}
            className="h-auto w-10 object-contain sm:w-12"
          />
        </div>

        <div className="max-w-md">
          <h3
            className={clsx(
              "text-[1.35rem] font-bold leading-[1.15]",
              "sm:text-[1.55rem]",
              isPrimary ? "text-[#a8c453]" : "text-[#1b2027]",
            )}
          >
            {title}
          </h3>

          <p className="mt-2 text-[1rem] leading-[1.45] text-[#5f5f5f] sm:text-[1.05rem]">
            {description}
          </p>
        </div>
      </div>

      <Image
        src={iconSrc}
        alt=""
        aria-hidden="true"
        width={72}
        height={72}
        className={clsx(
          "pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2",
          "opacity-[0.06] lg:block",
        )}
      />
    </article>
  );
}
