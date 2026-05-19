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
    <div
      className={clsx(
        "max-w-3xs sm:max-w-2xs md:max-w-xs lg:max-w-sm",
        "group",
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
      <figure className="aspect-384/320">
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
          "flex flex-col",
          "px-4 pb-4 pt-4",
          "xl:px-6 xl:pb-6 xl:pt-6",
        )}
      >
        <article>
          <h3
            className={clsx(
              "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl",
              "font-bold text-[#1b2027] transition-colors duration-200",
              "group-hover:text-[#a8c453] group-active:text-[#a8c453]",
            )}
          >
            {title}
          </h3>

          <p
            className={clsx(
              "mt-2 leading-tight text-[#3e4349]",
              "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl",
            )}
          >
            {description}
          </p>
        </article>

        <span
          className={clsx(
            "pt-8 font-semibold text-[#6b7076]",
            "text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg",
          )}
        >
          Saiba mais
        </span>
      </div>
    </div>
  );
}
