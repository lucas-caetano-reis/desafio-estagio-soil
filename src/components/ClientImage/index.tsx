import clsx from "clsx";
import Image from "next/image";

export default function ClientImage() {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-84",
        "sm:max-w-96",
        "lg:mx-0 lg:max-w-md",
        "xl:max-w-lg",
      )}
    >
      <div
        className={clsx(
          "relative aspect-square overflow-hidden",
          "rounded-4xl border-4 border-[#a5bf55]/90 bg-[#31431f]",
        )}
      >
        <Image
          src="/images/cliente.png"
          alt="Cliente usando o aplicativo da Soil no campo"
          fill
          className="object-cover object-center"
          sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 28rem, (min-width: 640px) 24rem, 21rem"
        />
      </div>
    </div>
  );
}
