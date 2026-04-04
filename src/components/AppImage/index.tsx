import clsx from "clsx";
import Image from "next/image";

export default function AppImage() {
  return (
    <div className={clsx("w-full md:max-w-155", "xl:max-w-175")}>
      <div
        className={clsx(
          "relative mx-auto w-full overflow-hidden",
          "aspect-1.25/1",
          "max-w-135",
          "sm:max-w-155",
          "md:max-w-none",
        )}
      >
        <Image
          src="/images/telas_app.png"
          alt={
            "Telas do aplicativo Soil com mapas, históricos e indicadores de irrigação."
          }
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 700px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
