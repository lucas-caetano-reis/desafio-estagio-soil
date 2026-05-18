import clsx from "clsx";
import Image from "next/image";

export default function FarmImage() {
  return (
    <div
      className={clsx(
        "w-full bg-[#71d98d]",
        "max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg",
        "aspect-512/394 overflow-hidden",
        "rounded-4xl shadow-2xl",
      )}
    >
      <Image
        src="/images/fazenda_conectada.png"
        alt="Ilustração de uma fazenda conectada com sensores, nuvem e monitoramento remoto."
        width={512}
        height={394}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
