import clsx from "clsx";
import ChallengeCard from "@/components/ChallengeCard";

const challenges = [
  {
    title: "Viagens",
    description: "só para ligar ou desligar pivôs?",
    iconAlt: "Ícone de deslocamento e localização.",
    iconSrc: "/images/icone_caminho_preto.png",
  },
  {
    title: "Falhas detectadas tarde demais,",
    description: "causando prejuízos?",
    iconAlt: "Ícone de gráfico com perda financeira.",
    iconSrc: "/images/icone_perda_de_dinheiro.png",
  },
  {
    title: "Irrigação em horários errados,",
    description: "elevando a conta de energia?",
    iconAlt: "Ícone de conta de luz.",
    iconSrc: "/images/icone_conta_de_luz_preto.png",
  },
  {
    title: "Desperdício de água e energia",
    description: "por falta de controle?",
    iconAlt: "Ícone de torneira.",
    iconSrc: "/images/icone_torneira.png",
  },
  {
    title: "Falta de dados confiáveis",
    description: "para planejar sua safra?",
    iconAlt: "Ícone de painel com dados.",
    iconSrc: "/images/icone_painel.png",
  },
] as const;

export default function ChallengesSection() {
  return (
    <section
      className={clsx(
        "flex flex-col",
        "bg-[#fffdf9]",
        "px-8 py-8",
        "sm:px-12 sm:py-10",
        "md:px-16 md:py-12",
        "lg:px-20 lg:py-14",
        "xl:px-24 xl:py-16",
      )}
    >
      <header className="text-center text-[#31421f]">
        <h2
          className={clsx(
            "font-bold leading-tight tracking-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
          )}
        >
          O Desafio no Campo
        </h2>

        <h3
          className={clsx(
            "mt-2 leading-tight",
            "text-xl sm:text-2xl md:text-3xl",
          )}
        >
          Você já perdeu tempo e dinheiro com:
        </h3>
      </header>

      <div
        className={clsx(
          "mt-12",
          "grid grid-cols-1 lg:grid-cols-2",
          "gap-4 lg:gap-6",
        )}
      >
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.title} {...challenge} />
        ))}

        <div
          className={clsx(
            "flex items-center",
            "rounded-xl border-b-4 border-transparent",
            "px-6 py-6",
          )}
        >
          <p
            className={clsx(
              "text-[#a8c453] font-bold",
              "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
            )}
          >
            A Soil nasceu para <em>mudar essa realidade.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
