import { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

type UseEmbraControlsProps = {
  emblaApi: EmblaCarouselType | undefined;
  isModalOpen: boolean;
};

export function useEmblaControls({
  emblaApi,
  isModalOpen,
}: UseEmbraControlsProps) {
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

  const stopAutoplay = useCallback(() => {
    emblaApi?.plugins().autoplay?.stop();
  }, [emblaApi]);

  const playAutoplay = useCallback(() => {
    if (isModalOpen) return;

    emblaApi?.plugins().autoplay?.play();
  }, [emblaApi, isModalOpen]);

  const resetAutoplay = useCallback(() => {
    if (isModalOpen) return;

    emblaApi?.plugins().autoplay?.reset();
  }, [emblaApi, isModalOpen]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      resetAutoplay();
    },
    [emblaApi, resetAutoplay],
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

  useEffect(() => {
    if (!emblaApi) return;

    if (isModalOpen) {
      stopAutoplay();
      return;
    }

    playAutoplay();
  }, [emblaApi, isModalOpen, stopAutoplay, playAutoplay]);

  return {
    prevButtonDisabled,
    nextButtonDisabled,
    selectedSnap,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
    stopAutoplay,
    playAutoplay,
  };
}
