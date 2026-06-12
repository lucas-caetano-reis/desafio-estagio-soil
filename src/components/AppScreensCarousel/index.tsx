"use client";

import { useRef } from "react";
import { useEmblaControls } from "@/hooks/Carousel/useEmblaControls";

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import AppScreenCard from "@/components/AppScreenCard";
import CarouselButton from "@/components/CarouselButton";
import CarouselDots from "@/components/CarouselDots";

import { appScreens } from "@/data/AppScreens/appScreens";

export default function AppScreensCarousel() {
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

  const {
    selectedSnap,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
    stopAutoplay,
    playAutoplay,
  } = useEmblaControls({ emblaApi });

  return (
    <div
      className={clsx(
        "CarouselContainer",
        "relative",
        "mx-auto px-12",
        "w-full",
        "max-w-sm",
        "sm:max-w-xl",
        "md:max-w-3xl",
        "lg:max-w-5xl",
        "xl:max-w-7xl",
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
          {appScreens.map((screen, index) => (
            <div
              key={screen.id}
              className={clsx(
                "CarouselSlide",
                "select-none",
                "min-w-0 shrink-0 grow-0",
                "basis-full",
                "sm:basis-[33.333%]",
                "lg:basis-[20%]",
              )}
            >
              <AppScreenCard
                imageSrc={screen.imageSrc}
                imageAlt={screen.imageAlt}
                isActive={index === selectedSnap}
                onActivate={() => scrollTo(index)}
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
