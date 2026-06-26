import clsx from "clsx";

import { challenges } from "@/data/Challenges/challenges";
import ChallengeCard from "@/components/ChallengeCard";

export default function ChallengesSection() {
  return (
    <section
      id="desafio"
      className={clsx(
        "flex min-h-[calc(100svh-var(--header-height))] flex-col items-center",
        "bg-[#fffdf9]",
        "px-8 py-8",
        "sm:px-12 sm:py-10",
        "md:px-16 md:py-12",
        "lg:px-20 lg:py-14",
        "xl:px-24 xl:py-16",
      )}
    >
      <header className="text-center text-[#1b2027]">
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
          "gap-6 lg:gap-8",
        )}
      >
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.title} {...challenge} />
        ))}

        <div
          className={clsx(
            "flex items-center",
            "rounded-xl border-b-4 border-transparent",
            "px-4 py-4",
            "sm:px-6 sm:py-6",
            "xl:px-8 xl:py-8",
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
