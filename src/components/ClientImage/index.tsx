import clsx from "clsx";
import Image from "next/image";

export default function ClientImage() {
  return (
    <div
      className={clsx(
        "w-full bg-[#31431f]",
        "max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg",
        "aspect-square overflow-hidden",
        "rounded-4xl border-4 border-[#a5bf55]/90",
      )}
    >
      <Image
        src="/images/cliente.png"
        alt="Cliente usando o aplicativo da Soil no campo"
        width={312}
        height={312}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
