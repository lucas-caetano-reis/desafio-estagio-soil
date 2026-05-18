import clsx from "clsx";
import Image from "next/image";

type SectionImagesProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  classname?: string;
  imageClassname?: string;
};

export default function SectionImages({
  src,
  alt,
  width,
  height,
  imageClassname,
  classname,
}: Readonly<SectionImagesProps>) {
  return (
    <div className={clsx("w-full overflow-hidden", classname)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={clsx("w-full h-full", imageClassname)}
      />
    </div>
  );
}
