import clsx from "clsx";
import ChallengeCard from "@/components/ChallengeCard";

const challenges = [
  {
    title: "Viagens",
    description: "só para ligar ou desligar pivôs?",
    iconAlt: "Ícone de deslocamento e localização.",
    iconSrc: "/images/icone_caminho.png",
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
    iconSrc: "/images/icone_conta_de_luz.png",
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
        "w-full bg-[#fffdf9] text-[#1b2027]",
        "px-6 py-16",
        "sm:px-8 sm:py-20",
        "lg:px-16 lg:py-24",
        "xl:px-20 xl:py-28",
      )}
    >
      <div className="mx-auto flex flex-col w-full max-w-7xl items-center">
        <header className="max-w-4xl text-center">
          <h2
            className={clsx(
              "font-bold text-[#31421f]",
              "leading-[1.05] tracking-tight",
              "text-[2.3rem]",
              "sm:text-[2.9rem]",
              "lg:text-[3.5rem]",
            )}
          >
            O Desafio no Campo
          </h2>

          <p
            className={clsx(
              "mt-4 leading-[1.2] text-[#31421f]",
              "text-[1.35rem]",
              "sm:text-[1.7rem]",
              "lg:text-[2rem]",
            )}
          >
            Você já perdeu tempo e dinheiro com:
          </p>
        </header>

        <div
          className={clsx(
            "w-full mt-12 grid grid-cols-1 gap-5",
            "lg:mt-16 lg:grid-cols-2 lg:gap-6",
          )}
        >
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={challenge.title}
              {...challenge}
              isPrimary={index === 0}
            />
          ))}

          <div
            className={clsx(
              "flex items-center rounded-[1.75rem]",
              "px-2 py-3",
              "lg:px-6",
            )}
          >
            <p
              className={clsx(
                "max-w-[18ch] text-left text-[2rem] font-bold leading-[1.1]",
                "text-[#a8c453]",
                "sm:text-[2.3rem]",
                "lg:text-[2.7rem]",
                "italic",
              )}
            >
              A Soil nasceu para mudar essa realidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
