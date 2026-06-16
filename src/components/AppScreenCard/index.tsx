import clsx from "clsx";
import Image from "next/image";

type AppScreenCardProps = {
  imageAlt: string;
  imageSrc: string;
  isActive: boolean;
  onActivate: () => void;
};

export default function AppScreenCard({
  imageAlt,
  imageSrc,
  isActive = false,
  onActivate,
}: Readonly<AppScreenCardProps>) {
  return (
    <div
      onClick={() => {
        if (!isActive) {
          onActivate();
        }
      }}
      className={clsx(
        "aspect-375/812",
        "w-full overflow-hidden",
        "rounded-2xl bg-[#e8f0cd] shadow-lg",

        "transition-all duration-300 ease-out",
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-90",
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={375}
        height={812}
        className="w-full h-full object-cover"
      />

      <div
        aria-hidden="true"
        className={clsx(
          "pointer-events-none absolute inset-0",
          "transition-colors duration-300 ease-out",
          isActive ? "bg-transparent" : "bg-black/10",
        )}
      />
    </div>
  );
}
