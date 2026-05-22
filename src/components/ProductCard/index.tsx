import clsx from "clsx";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
};

export default function ProductCard({
  title,
  description,
  imageAlt,
  imageSrc,
}: Readonly<ProductCardProps>) {
  return (
    <article
      className={clsx(
        "group",
        "flex flex-col",
        "w-full max-w-3xs sm:max-w-2xs md:max-w-xs lg:max-w-sm",
        "overflow-hidden text-left",
        "rounded-2xl border-b-4",
        "bg-white",
        "transition-all duration-200",
        "border-transparent hover:border-[#a8c453] active:border-[#a8c453]",
        "shadow-xl hover:shadow-2xl active:shadow-2xl",
        "hover:-translate-y-1 active:-translate-y-1",
        "hover:scale-101 active:scale-101",
      )}
    >
      <figure className="aspect-384/320 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={384}
          height={320}
          className="w-full h-full object-cover"
        />
      </figure>

      <div
        className={clsx(
          "flex flex-1 flex-col",
          "px-4 pb-4 pt-4",
          "xl:px-6 xl:pb-6 xl:pt-6",
        )}
      >
        <h3
          className={clsx(
            "text-base md:text-lg lg:text-xl xl:text-2xl",
            "font-bold text-[#1b2027] transition-colors duration-200",
            "group-hover:text-[#a8c453] group-active:text-[#a8c453]",
          )}
        >
          {title}
        </h3>

        <p
          className={clsx(
            "mt-2 leading-tight text-[#1b2027]/80",
            "text-sm md:text-base lg:text-lg xl:text-xl",
          )}
        >
          {description}
        </p>

        <span
          className={clsx(
            "mt-auto pt-8 w-fit",
            "font-semibold text-[#1b2027]/70",
            "text-xs md:text-sm lg:text-base xl:text-lg",
            "transition-opacity duration-200",
            "hover:text-[#1b2027]/50 active:text-[#1b2027]/50",
            "cursor-pointer",
          )}
        >
          Saiba mais
        </span>
      </div>
    </article>
  );
}
