import clsx from "clsx";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  isActive: boolean;
  onActivate: () => void;
  openModal: () => void;
};

export default function ProductCard({
  title,
  description,
  imageAlt,
  imageSrc,
  isActive = false,
  onActivate,
  openModal,
}: Readonly<ProductCardProps>) {
  return (
    <>
      <article
        onClick={() => {
          if (!isActive) {
            onActivate();
          }
        }}
        className={clsx(
          "relative",
          "flex w-full h-full flex-col",
          "overflow-hidden text-left",
          "rounded-2xl border-b-4",
          "bg-white",
          "transition-all duration-300 ease-in-out",

          isActive
            ? ["border-[#a8c453]", "shadow-lg", "scale-100", "opacity-100"]
            : ["border-black/5", "shadow-sm", "scale-95", "opacity-90"],
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
              "font-bold transition-colors duration-200",

              isActive ? ["text-[#a8c453]"] : ["text-[#1b2027]"],
            )}
          >
            {title}
          </h3>

          <p
            className={clsx(
              "mt-2 leading-tigh",
              "text-sm md:text-base lg:text-lg xl:text-xl",

              isActive ? ["text-[#1b2027]/80"] : ["text-[#1b2027]/90"],
            )}
          >
            {description}
          </p>

          <button
            type="button"
            title="Abrir modal"
            aria-label="Abrir modal"
            disabled={!isActive}
            onClick={(event) => {
              event.stopPropagation();

              if (!isActive) return;

              openModal();
            }}
            className={clsx(
              "mt-auto pt-8 w-fit",
              "font-semibold",
              "text-xs md:text-sm lg:text-base xl:text-lg",
              "transition-opacity duration-200",

              isActive
                ? [
                    "cursor-pointer",
                    "text-[#1b2027]/70",
                    "hover:text-[#1b2027]/50",
                    "active:text-[#1b2027]/50",
                  ]
                : ["cursor-not-allowed text-[#1b2027]/90"],
            )}
          >
            Saiba mais
          </button>
        </div>

        <div
          aria-hidden="true"
          className={clsx(
            "pointer-events-none absolute inset-0",
            "transition-colors duration-300 ease-out",
            isActive ? "bg-transparent" : "bg-black/5",
          )}
        />
      </article>
    </>
  );
}
