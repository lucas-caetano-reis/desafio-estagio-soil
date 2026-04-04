import Image from "next/image";

export default function AppImage() {
  return (
    <Image
      src="/images/telas_app.png"
      alt={
        "Telas do aplicativo Soil com mapas, históricos e indicadores de irrigação."
      }
      fill
      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 700px"
      className="object-contain"
    />
  );
}
