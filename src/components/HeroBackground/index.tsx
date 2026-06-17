import clsx from "clsx";
import Image from "next/image";

type HeroBackgroundProps = {
  imageSrc: string;
  imageAlt: string;
};

export default function HeroBackground({
  imageSrc,
  imageAlt,
}: Readonly<HeroBackgroundProps>) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        "w-full h-80 sm:h-120 lg:h-160",
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-[50%_25%]"
      />

      <div
        aria-hidden="true"
        className={clsx(
          "pointer-events-none absolute inset-0",
          "hidden lg:block bg-black/20",
        )}
      />
    </div>
  );
}
