import clsx from "clsx";
import Header from "@/components/Header";
import DefaultButton from "@/components/DefaultButton";

export default function HeroSection() {
  return (
    <>
      <Header />
      <section
        className={clsx(
          "relative overflow-hidden",
          "bg-[#2f6fa3] text-white",
          "px-6 py-20",
          "sm:px-8 sm:py-24",
          "lg:px-16 lg:py-32",
        )}
      >
        <div
          className={clsx(
            "mx-auto flex min-h-130 w-full max-w-6xl items-center",
            "lg:min-h-160",
          )}
        >
          <div className={clsx("max-w-3xl")}>
            <h1
              className={clsx(
                "mt-6 font-bold tracking-tight",
                "text-4xl/tight",
                "sm:text-5xl/tight",
                "lg:text-7xl/tight",
              )}
            >
              Irrigação inteligente
              <br />
              em qualquer lugar.
              <br />
              <em className="font-semibold italic">Mesmo sem internet.</em>
            </h1>

            <p
              className={clsx(
                "mt-6 max-w-2xl",
                "text-base/relaxed text-white/85",
                "sm:text-lg/relaxed lg:text-[28px]/[1.45]",
              )}
            >
              Telemetria para pivôs com tecnologia que reduz custos e aumenta a
              produtividade.
            </p>

            <div className={clsx("mt-10 w-full sm:w-auto")}>
              <DefaultButton className={clsx("md:min-w-0", "lg:min-w-72")}>
                Quero transformar minha irrigação
              </DefaultButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
