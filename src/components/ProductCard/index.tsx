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
        "rounded-[14px] border-b-4",
        "bg-white",
        "transition-all duration-200",
        "border-transparent hover:border-[#a8c453]",
        "shadow-xl hover:shadow-2xl",
        "hover:-translate-y-1 hover:scale-101",
      )}
    >
      <figure className="relative aspect-[1.2/1] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover"
        />
      </figure>

      <div
        className={clsx(
          "flex min-h-35.5 flex-col px-5 pb-5 pt-4",
          "sm:min-h-38 sm:px-6 sm:pb-6 sm:pt-5",
        )}
      >
        <article>
          <h3
            className={clsx(
              "text-[1.65rem] font-bold leading-[1.08] tracking-[-0.02em]",
              "text-[#1b2027] transition-colors duration-200 group-hover:text-[#a8c453]",
            )}
          >
            {title}
          </h3>

          <p className="mt-2 max-w-[28ch] text-[1rem] leading-[1.35] text-[#3e4349]">
            {description}
          </p>
        </article>

        <span className="mt-auto pt-8 text-[1rem] font-semibold text-[#6b7076]">
          {moreLabel}
        </span>
      </div>
    </div>
  );
}
