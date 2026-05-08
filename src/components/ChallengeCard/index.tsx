import clsx from "clsx";
import Image from "next/image";

type ChallengeCardProps = {
  title: string;
  description: string;
  iconAlt: string;
  iconSrc: string;
};

export default function ChallengeCard({
  title,
  description,
  iconAlt,
  iconSrc,
}: Readonly<ChallengeCardProps>) {
  return (
    <div
      className={clsx(
        "group",
        "relative overflow-hidden text-left",
        "rounded-2xl border-b-4",
        "bg-white",
        "px-6 py-6",
        "sm:px-7 sm:py-7",
        "lg:min-h-33 lg:px-8",
        "transition-all duration-200",
        "border-transparent hover:border-[#a8c453]",
        "shadow-xl hover:shadow-2xl",
        "hover:-translate-y-1 hover:scale-101",
      )}
    >
      <div
        className={clsx(
          "relative z-10 flex items-center justify-between gap-4 sm:gap-5",
        )}
      >
        <figure
          className={clsx(
            "flex shrink-0 items-center justify-center",
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
        </figure>

        <article className="flex-1">
          <h3
            className={clsx(
              "text-[1.35rem] sm:text-[1.55rem]",
              "font-bold leading-[1.15]",
              "text-[#1b2027] transition-colors duration-200 group-hover:text-[#a8c453]",
            )}
          >
            {title}
          </h3>

          <p
            className={clsx(
              "mt-2 leading-[1.45]",
              "text-[#5f5f5f] text-[1rem] sm:text-[1.05rem]",
            )}
          >
            {description}
          </p>
        </article>

        <figure
          className={clsx(
            "flex shrink-0 items-center justify-center",
            "size-12 sm:size-14",
          )}
        >
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={56}
            height={56}
            className="h-auto w-10 object-contain sm:w-12 opacity-15"
          />
        </figure>
      </div>
    </div>
  );
}
