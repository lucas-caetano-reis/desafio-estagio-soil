import clsx from "clsx";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  moreLabel: string;
  imageAlt: string;
  imageSrc: string;
};

export default function ProductCard({
  title,
  description,
  moreLabel,
  imageAlt,
  imageSrc,
}: Readonly<ProductCardProps>) {
  return (
    <div
      className={clsx(
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
      <figure className="relative aspect-[1.2/1]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        />
      </figure>

      <div
        className={clsx(
          "flex flex-col",
          "px-4 sm:px-6",
          "pb-4 sm:pb-6",
          "pt-4 sm:pt-6",
        )}
      >
        <article>
          <h3
            className={clsx(
              "text-2xl font-bold tracking-tight",
              "text-[#1b2027] transition-colors duration-200",
              "group-hover:text-[#a8c453] group-active:text-[#a8c453]",
            )}
          >
            {title}
          </h3>

          <p className="text-[#3e4349] text-base leading-snug mt-2">
            {description}
          </p>
        </article>

        <span className="text-[#6b7076] text-base font-semibold pt-8">
          {moreLabel}
        </span>
      </div>
    </div>
  );
}
