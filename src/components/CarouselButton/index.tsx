import clsx from "clsx";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type CarouselButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
};

export default function CarouselButton({
  direction,
  onClick,
  disabled,
}: Readonly<CarouselButtonProps>) {
  const isPrev = direction === "prev";

  const Icon = isPrev ? ArrowBigLeft : ArrowBigRight;

  return (
    <button
      type="button"
      aria-label={isPrev ? "Produto anterior" : "Próximo produto"}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        isPrev ? "PrevButton" : "NextButton",
        "absolute top-1/2 z-10 -translate-y-1/2",
        isPrev ? "left-0" : "right-0",
        "flex h-10 w-10 items-center justify-center rounded-full",
        "bg-white text-[#1b2027] shadow-md",
        "transition-all duration-200",
        "cursor-pointer",
        "hover:bg-[#a8c453] hover:text-white",
        "focus:outline-none focus:ring-2 focus:ring-[#a8c453] focus:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
      )}
    >
      <Icon
        aria-hidden="true"
        className="h-6 w-6"
        strokeWidth={2}
      />
    </button>
  );
}
