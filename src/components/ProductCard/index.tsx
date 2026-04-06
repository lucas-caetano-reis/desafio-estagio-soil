import clsx from "clsx";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  moreLabel: string;
  imageAlt: string;
  imageSrc: string;
  titleClassName?: string;
};

export default function ProductCard({
  title,
  description,
  moreLabel,
  imageAlt,
  imageSrc,
  titleClassName,
}: Readonly<ProductCardProps>) {
  return (
    <article
      className={clsx(
        "overflow-hidden rounded-[14px]",
        "border border-[#e7e1d8] bg-white text-left",
        "shadow-[0_18px_45px_rgba(27,32,39,0.08)]",
      )}
    >
      <div className="relative aspect-[1.45/1] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div
        className={clsx(
          "flex min-h-35.5 flex-col px-5 pb-5 pt-4",
          "sm:min-h-38 sm:px-6 sm:pb-6 sm:pt-5",
        )}
      >
        <div>
          <h3
            className={clsx(
              "text-[1.65rem] font-bold leading-[1.08] tracking-[-0.02em]",
              "text-[#1b2027]",
              titleClassName,
            )}
          >
            {title}
          </h3>

          <p className="mt-2 max-w-[28ch] text-[1rem] leading-[1.35] text-[#3e4349]">
            {description}
          </p>
        </div>

        <span className="mt-auto pt-8 text-[1rem] font-semibold text-[#6b7076]">
          {moreLabel}
        </span>
      </div>
    </article>
  );
}
