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
        "w-fit",
        "rounded-br-4xl",
        "bg-white",
        "shadow-sm",
        "px-4 py-4",
      )}
    >
      <Image
        src="/images/logo_soil.png"
        alt="Logo da Soil Tecnologia"
        width={120}
        height={60}
        priority
        style={{ width: "auto", height: "auto" }}
      />
    </Link>
  );
}
