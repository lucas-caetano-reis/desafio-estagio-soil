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
        "mx-auto mt-8 px-12",
        "w-full",
        "max-w-xs",
        "sm:max-w-sm",
        "md:max-w-3xl",
        "lg:max-w-4xl",
        "xl:max-w-7xl",
      )}
    >
      <CarouselButton
        direction="prev"
        placementLeft="-left-4"
        placementRight="-right-4"
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
                "flex-[0_0_100%]",
                "md:flex-[0_0_33.333%]",
                "xl:flex-[0_0_20%]",
                "px-2",
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

      <CarouselButton
        direction="next"
        placementLeft="-left-4"
        placementRight="-right-4"
        onClick={scrollNext}
        disabled={false}
      />

      <CarouselDots
        scrollSnaps={scrollSnaps}
        selectedSnap={selectedSnap}
        onDotClick={scrollTo}
      />
    </div>
  );
}
