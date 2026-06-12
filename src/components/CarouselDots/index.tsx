import clsx from "clsx";

type CarouselDotsProps = {
  scrollSnaps: number[];
  selectedSnap: number;
  onDotClick: (index: number) => void;
};

export default function CarouselDots({
  scrollSnaps,
  selectedSnap,
  onDotClick,
}: Readonly<CarouselDotsProps>) {
  return (
    <div className="mt-4 flex justify-center gap-2">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Ir para a posição ${index + 1}`}
          aria-current={index === selectedSnap ? "true" : undefined}
          title={`Ir para a posição ${index + 1}`}
          onClick={() => onDotClick(index)}
          className={clsx(
            "PositionDots",
            "h-3 w-3 rounded-full",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-[#a8c453] focus:ring-offset-2",
            index === selectedSnap
              ? "scale-110 bg-[#a8c453]"
              : "bg-[#1b2027]/30 hover:bg-[#1b2027]/50",
          )}
        />
      ))}
    </div>
  );
}
