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
    <article
      className={clsx(
        "group",
        "flex flex-row items-center justify-between",
        "overflow-hidden",
        "rounded-xl border-b-4",
        "bg-white",
        "gap-4",
        "px-4 py-4",
        "xl:px-6 xl:py-6",
        "transition-all duration-200",
        "border-transparent hover:border-[#a8c453] active:border-[#a8c453]",
        "shadow-xl hover:shadow-2xl active:shadow-2xl",
        "hover:-translate-y-1 active:-translate-y-1",
        "hover:scale-101 active:scale-101",
        "cursor-pointer",
      )}
    >
      <figure
        className={clsx(
          "flex items-center justify-center",
          "aspect-48/48 size-6 sm:size-8 md:size-10 lg:size-12",
        )}
      >
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={48}
          height={48}
          className="w-full h-auto object-cover"
        />
      </figure>

      <div className="flex flex-1 flex-col text-left">
        <h4
          className={clsx(
            "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl",
            "font-bold text-[#1b2027] transition-colors duration-200",
            "group-hover:text-[#a8c453] group-active:text-[#a8c453]",
          )}
        >
          {title}
        </h4>

        <p
          className={clsx(
            "mt-2 text-[#1b2027]/60",
            "text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg",
          )}
        >
          {description}
        </p>
      </div>

      <figure
        className={clsx(
          "flex items-center justify-center",
          "aspect-56/56 size-8 sm:size-10 md:size-12 lg:size-14",
        )}
      >
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={56}
          height={56}
          className="object-cover w-full h-auto opacity-10"
        />
      </figure>
    </article>
  );
}
