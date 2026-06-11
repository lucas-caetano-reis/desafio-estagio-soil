import { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

type UseEmbraControlsProps = {
  emblaApi: EmblaCarouselType | undefined;
};

export function useEmblaControls({ emblaApi }: UseEmbraControlsProps) {
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return;

    setPrevButtonDisabled(!emblaApi.canScrollPrev());
    setNextButtonDisabled(!emblaApi.canScrollNext());
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

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

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const frameId = requestAnimationFrame(() => {
      updateScrollSnaps();
      updateCarouselState();
    });

    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", onReInit);

    return () => {
      cancelAnimationFrame(frameId);
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, updateCarouselState, updateScrollSnaps, onReInit]);

  return {
    prevButtonDisabled,
    nextButtonDisabled,
    selectedSnap,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
  };
}
