import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Logomarca da Soil"
      title="Logomarca da Soil"
      className={clsx(
        "w-20 sm:w-25 md:w-30 lg:w-40",
        "rounded-br-xl sm:rounded-br-2xl md:rounded-br-3xl lg:rounded-br-4xl",
        "bg-[#fffdf9]",
        "shadow-sm",
        "px-2 py-2",
        "md:px-3 md:py-3",
        "lg:px-4 lg:py-4",
        "transition-colors hover:bg-[#f3f3ed] active:bg-[#f3f3ed]",
      )}
    >
      <Image
        src="/images/logo_soil.png"
        alt="Logo da Soil Tecnologia"
        width={128}
        height={74}
        className="w-full h-auto object-cover"
      />
    </Link>
  );
}
