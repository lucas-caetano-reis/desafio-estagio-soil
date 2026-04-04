import clsx from "clsx";
import Image from "next/image";

export default function FarmImage() {
  return (
    <div className={clsx("w-full lg:max-w-130", "xl:max-w-140")}>
      <div
        className={clsx(
          "relative mx-auto w-full overflow-hidden",
          "aspect-[1.16/1]",
          "max-w-125",
          "rounded-[28px] bg-[#71d98d]",
          "shadow-[0_20px_60px_rgba(75,102,38,0.18)]",
          "lg:mx-0 lg:max-w-none",
        )}
      >
        <Image
          src="/images/fazenda_conectada.png"
          alt="Ilustração de uma fazenda conectada com sensores, nuvem e monitoramento remoto."
          fill
          sizes="(max-width: 1023px) min(100vw - 3rem, 500px), 520px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
