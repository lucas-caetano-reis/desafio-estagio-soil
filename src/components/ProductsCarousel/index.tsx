import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";

import ProductCard from "@/components/ProductCard";
import CarouselButton from "@/components/CarouselButton";
import CarouselDots from "@/components/CarouselDots";
import { useEmblaControls } from "@/hooks/Carousel/useEmblaControls";

import type { Product } from "@/data/Products/products";

type ProductsCarouselProps = {
  products: Product[];
  onOpenModal: (product: Product) => void;
};

export default function ProductsCarousel({
  products,
  onOpenModal,
}: Readonly<ProductsCarouselProps>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    align: "start",
    breakpoints: {
      "(min-width: 1024px)": { align: "center" },
    },
  });

  const {
    prevButtonDisabled,
    nextButtonDisabled,
    selectedSnap,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
  } = useEmblaControls({ emblaApi });

  return (
    <div
      className={clsx(
        "CarouselContainer",
        "relative",
        "mx-auto mt-12 px-12",
        "w-full max-w-105 md:max-w-215 lg:max-w-7xl",
      )}
    >
      <CarouselButton
        direction="prev"
        onClick={scrollPrev}
        disabled={prevButtonDisabled}
      />

      <div
        ref={emblaRef}
        className={clsx(
          "CarouselViewport",
          "cursor-grab active:cursor-grabbing",
          "overflow-hidden",
          "py-4",
        )}
      >
        <div className={clsx("CarouselTrack", "flex touch-pan-y")}>
          {products.map((product) => (
            <div
              key={product.id}
              className={clsx(
                "CarouselSlide",
                "select-none",
                "min-w-0 shrink-0",
                "flex-[0_0_100%]",
                "md:flex-[0_0_50%]",
                "lg:flex-[0_0_33.333%]",
                "px-2",
              )}
            >
              <ProductCard
                {...product}
                openModal={() => onOpenModal(product)}
              />
            </div>
          ))}
        </div>
      </div>

      <CarouselButton
        direction="next"
        onClick={scrollNext}
        disabled={nextButtonDisabled}
      />

      <CarouselDots
        scrollSnaps={scrollSnaps}
        selectedSnap={selectedSnap}
        onDotClick={scrollTo}
      />
    </div>
  );
}
