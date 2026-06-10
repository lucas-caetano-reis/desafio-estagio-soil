"use client";

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import type { Product } from "@/data/Products/products";
import ProductCard from "@/components/ProductCard";
import CarouselButton from "../CarouselButton";
import CarouselDots from "../CarouselDots";

type ProductsCarouselProps = {
  products: Product[];
  onOpenModal: (product: Product) => void;
};

export default function ProductsCarousel({
  products,
  onOpenModal,
}: Readonly<ProductsCarouselProps>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  // Guardam a posição atualmente ativa e uma de lista de posições possíveis
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return;

    // Se o carrossel não puder mais avançar ou retroceder, desabilita os botões
    setPrevButtonDisabled(!emblaApi.canScrollPrev());
    setNextButtonDisabled(!emblaApi.canScrollNext());

    // Atualiza a posição ativa
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  //useCallback garante que a emblaApi seja recriada somente quando ela mudar

  // Atualiza o número de posições possíveis
  const updateScrollSnaps = useCallback(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onReInit = useCallback(() => {
    updateScrollSnaps();
    updateCarouselState();
  }, [updateScrollSnaps, updateCarouselState]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // Manda o carrossel ir para um card específico se um dot for clicado
  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    // Agenda as atualizações para o próximo frame do navegador
    // Evita erros de renderização em cascata
    const frameId = requestAnimationFrame(() => {
      updateScrollSnaps();
      updateCarouselState();
    });

    // Executa as funções quando esses eventos ocorrerem
    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", onReInit);

    // Função de limpeza
    return () => {
      cancelAnimationFrame(frameId);
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, updateCarouselState, updateScrollSnaps, onReInit]);

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
        selectedIndex={selectedIndex}
        onDotClick={scrollTo}
      />
    </div>
  );
}
