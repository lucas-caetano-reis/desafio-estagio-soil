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
    align: "center",
    dragFree: false,
  });

  return (
    <div
      className={clsx(
        "CarouselContainer",
        "mx-auto mt-12",
        "w-full max-w-7xl",
        "px-4",
      )}
    >
      <div
        ref={emblaRef}
        className={clsx(
          "CarouselViewport",
          "cursor-grab active:cursor-grabbing",
          "overflow-hidden",
          "px-1 py-2",
        )}
      >
        <div
          className={clsx(
            "CarouselTrack",
            "flex flex-row flex-nowrap touch-pan-y",
            "gap-6",
          )}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={clsx(
                "select-none",
                "shrink-0",
                "flex-[0_0_80%]",
                "sm:flex-[0_0_42.5%]",
                "lg:flex-[0_0_29%]",
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
