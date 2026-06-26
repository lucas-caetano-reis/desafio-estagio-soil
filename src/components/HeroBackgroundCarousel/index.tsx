"use client";

import { useRef } from "react";
import { useEmblaControls } from "@/hooks/Carousel/useEmblaControls";

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import HeroBackground from "@/components/HeroBackground";
import CarouselButton from "@/components/CarouselButton";

import { backgrounds } from "@/data/Backgrounds/backgrounds";

export default function HeroBackgroundCarousel() {
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
      align: "center",
    },
    [autoplay.current],
  );

  const { scrollPrev, scrollNext, stopAutoplay, playAutoplay } =
    useEmblaControls({ emblaApi });

  return (
    <div
      className={clsx(
        "CarouselContainer",
        "relative h-[calc((100svh-var(--header-height))/2)] w-full",
        "lg:h-[calc(100svh-var(--header-height))]",
      )}
    >
      <CarouselButton
        direction="prev"
        placementLeft="left-5"
        placementRight="right-5"
        onClick={scrollPrev}
        disabled={false}
      />

      <div
        ref={emblaRef}
        onMouseEnter={stopAutoplay}
        onMouseLeave={playAutoplay}
        className={clsx(
          "CarouselViewport",
          "cursor-grab active:cursor-grabbing",
          "h-full overflow-hidden",
        )}
      >
        <div className={clsx("CarouselTrack", "flex h-full touch-pan-y")}>
          {backgrounds.map((background) => (
            <div
              key={background.id}
              className={clsx(
                "CarouselSlide",
                "select-none",
                "h-full",
                "min-w-0 shrink-0 grow-0",
                "flex-[0_0_100%]",
              )}
            >
              <HeroBackground
                imageSrc={background.imageSrc}
                imageAlt={background.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>

      <CarouselButton
        direction="next"
        placementLeft="left-5"
        placementRight="right-5"
        onClick={scrollNext}
        disabled={false}
      />
    </div>
  );
}
