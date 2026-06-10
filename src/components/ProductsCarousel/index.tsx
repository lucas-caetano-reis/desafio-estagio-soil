import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";

import type { Product } from "@/data/Products/products";
import ProductCard from "@/components/ProductCard";

type ProductsCarouselProps = {
  products: Product[];
  onOpenModal: (product: Product) => void;
};

export default function ProductsCarousel({
  products,
  onOpenModal,
}: Readonly<ProductsCarouselProps>) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  return (
    <div
      className={clsx(
        "CarouselContainer",
        "mx-auto mt-12 px-4",
        "w-full max-w-105 md:max-w-215 lg:max-w-7xl",
      )}
    >
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
    </div>
  );
}
