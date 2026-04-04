import Image from "next/image";

export default function FarmImage() {
  return (
    <Image
      src="/images/fazenda_conectada.png"
      alt="Ilustração de uma fazenda conectada com sensores, nuvem e monitoramento remoto."
      fill
      sizes="(max-width: 1023px) min(100vw - 3rem, 500px), 520px"
      className="object-cover"
      priority
    />
  );
}
