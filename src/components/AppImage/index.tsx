import clsx from "clsx";
import Image from "next/image";

export default function AppImage() {
  return (
    <div
      className={clsx(
        "w-full",
        "relative aspect-1.25/1 overflow-hidden",
        "max-w-135 md:max-w-155 xl:max-w-175",
      )}
    >
      <Image
        src="/images/telas_app.png"
        alt="Telas do aplicativo Soil com mapas, históricos e indicadores de irrigação."
        fill
        className="object-contain"
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 700px"
      />
    </div>
  );
}
