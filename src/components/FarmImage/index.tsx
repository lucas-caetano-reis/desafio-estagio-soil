import clsx from "clsx";
import Image from "next/image";

export default function FarmImage() {
  return (
    <div
      className={clsx(
        "w-full bg-[#71d98d]",
        "relative aspect-[1.30/1] overflow-hidden",
        "rounded-2xl shadow-2xl",
        "max-w-125 lg:max-w-130 xl:max-w-140",
      )}
    >
      <Image
        src="/images/fazenda_conectada.png"
        alt="Ilustração de uma fazenda conectada com sensores, nuvem e monitoramento remoto."
        fill
        className="object-cover"
        sizes="(max-width: 1024px) min(100vw - 3rem, 500px), 520px"
      />
    </div>
  );
}
