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
        "mt-10 space-y-5 pl-7",
        "list-decimal",
        "text-[18px] text-white font-semibold leading-tight",
        "marker:font-bold marker:text-[#a5bf55]",
        "sm:text-[20px]",
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
