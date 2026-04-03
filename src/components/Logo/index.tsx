import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Ir para a página inicial da Soil"
      title="Ir para a página inicial da Soil"
      className={clsx(
        "z-10",
        "flex",
        "w-fit lg:w-full",
        "items-center justify-center",
        "self-start",
        "rounded-br-4xl",
        "bg-white",
        "shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
        "px-6 py-4",
        "sm:px-8",
        "lg:min-h-22 lg:px-5 lg:py-4",
        "xl:min-h-24.5 xl:px-7 xl:py-5",
      )}
    >
      <Image
        src="/images/logo_soil.png"
        alt="Logo da Soil Tecnologia"
        width={121}
        height={57}
        priority
        style={{ height: "auto", width: "auto" }}
      />
    </Link>
  );
}
