import clsx from "clsx";
import Image from "next/image";

export default function ClientImage() {
  return (
    <div
      className={clsx(
        "w-full bg-[#31431f]",
        "relative aspect-square overflow-hidden",
        "rounded-4xl border-4 border-[#a5bf55]/90",
        "max-w-84 sm:max-w-96 lg:max-w-md xl:max-w-lg",
      )}
    >
      <Image
        src="/images/cliente.png"
        alt="Cliente usando o aplicativo da Soil no campo"
        fill
        className="object-cover object-center"
        sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 28rem, (min-width: 640px) 24rem, 20rem"
      />
    </div>
  );
}
