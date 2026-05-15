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
    <button
      className={clsx(
        "group",
        "overflow-hidden",
        "rounded-xl border-b-4",
        "bg-white",
        "px-6 py-6",
        "transition-all duration-200",
        "border-transparent hover:border-[#a8c453] active:border-[#a8c453]",
        "shadow-xl hover:shadow-2xl active:shadow-2xl",
        "hover:-translate-y-1 active:-translate-y-1",
        "hover:scale-101 active:scale-101",
      )}
    >
      <div
        className={clsx(
          "z-10 flex items-center justify-between gap-4",
        )}
      >
        <figure
          className={clsx(
            "flex shrink-0 items-center justify-center",
            "size-12",
          )}
        >
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={56}
            height={56}
            className="object-contain h-auto w-10 sm:w-12"
          />
        </figure>

        <article className="flex-1 text-left">
          <h3
            className={clsx(
              "text-xl",
              "font-bold",
              "text-[#1b2027] transition-colors duration-200",
              "group-hover:text-[#a8c453] group-active:text-[#a8c453]",
            )}
          >
            {title}
          </h3>

          <p
            className={clsx(
              "mt-2",
              "text-[#5f5f5f] text-base sm:text-lg",
            )}
          >
            {description}
          </p>
        </article>

        <figure
          className={clsx(
            "flex shrink-0 items-center justify-center",
            "size-12 xl:size-16",
          )}
        >
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={56}
            height={56}
            className="object-contain h-auto w-10 sm:w-12 xl:w-16 opacity-8"
          />
        </figure>
      </div>
    </button>
  );
}
