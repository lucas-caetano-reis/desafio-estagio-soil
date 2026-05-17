import clsx from "clsx";

const solutions = [
  "Automação remota via aplicativo.",
  "GPS e sensores embarcados.",
  "Conectividade por Satélite, RádioLoRa, Wi-Fi ou redes móveis.",
  "Plataforma intuitiva com suporte inteligente e proativo.",
];

export default function SolutionsList() {
  return (
    <ol
      className={clsx(
        "mt-8 space-y-6 pl-6",
        "list-decimal marker:font-bold marker:text-[#a5bf55]",
        "font-semibold leading-tight",
        "text-sm sm:text-base md:text-lg lg:text-xl",
      )}
    >
      {solutions.map((solution) => (
        <li key={solution} className="pl-4">
          <span>{solution}</span>
        </li>
      ))}
    </ol>
  );
}
