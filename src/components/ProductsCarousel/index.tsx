"use client";

import { useRef } from "react";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import ProductCard from "@/components/ProductCard";
import CarouselButton from "@/components/CarouselButton";
import CarouselDots from "@/components/CarouselDots";
import { useEmblaControls } from "@/hooks/Carousel/useEmblaControls";

import type { Product } from "@/data/Products/products";

type ProductsCarouselProps = {
  products: Product[];
  onOpenModal: (product: Product) => void;
  isModalOpen: boolean;
};

export default function ProductsCarousel({
  products,
  onOpenModal,
  isModalOpen,
}: Readonly<ProductsCarouselProps>) {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
      containScroll: false,
      align: "start",
      breakpoints: {
        "(min-width: 1024px)": { align: "center" },
      },
    },
    [autoplay.current],
  );

  const {
    selectedSnap,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
    stopAutoplay,
    playAutoplay,
  } = useEmblaControls({ emblaApi, isModalOpen });

  return (
    <div
      className={clsx(
        "CarouselContainer",
        "relative",
        "mx-auto mt-12 px-12",
        "w-full max-w-105 md:max-w-215 lg:max-w-7xl",
      )}
    >
      <CarouselButton direction="prev" onClick={scrollPrev} disabled={false} />

      <div
        ref={emblaRef}
        onMouseEnter={stopAutoplay}
        onMouseLeave={playAutoplay}
        className={clsx(
          "CarouselViewport",
          "cursor-grab active:cursor-grabbing",
          "overflow-hidden",
          "py-4",
        )}
      >
        <div className={clsx("CarouselTrack", "flex touch-pan-y")}>
          {products.map((product, index) => (
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
                isActive={index === selectedSnap}
                onActivate={() => scrollTo(index)}
                openModal={() => onOpenModal(product)}
              />
            </div>
          ))}
        </div>
      </div>

      <CarouselButton direction="next" onClick={scrollNext} disabled={false} />

      <CarouselDots
        scrollSnaps={scrollSnaps}
        selectedSnap={selectedSnap}
        onDotClick={scrollTo}
      />
    </div>
  );
}
