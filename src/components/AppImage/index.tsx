import clsx from "clsx";
import Image from "next/image";

export default function AppImage() {
  return (
    <div
      className={clsx(
        "w-full",
        "max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl",
        "aspect-2/1 overflow-hidden",
      )}
    >
      <Image
        src="/images/telas_app.png"
        alt="Telas do aplicativo Soil com mapas, históricos e indicadores de irrigação."
        width={768}
        height={384}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
