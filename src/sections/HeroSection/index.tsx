import clsx from "clsx";

import DefaultButton from "@/components/DefaultButton";
import Header from "@/components/Header";

export default function HeroSection() {
  return (
    <>
      <Header />

      <section
        className={clsx(
          "relative overflow-hidden text-white",
          "min-h-140 sm:min-h-155 lg:min-h-180 xl:min-h-195",
          "bg-[#2f6fa3]",
          "bg-[image:url('/images/hero_background.jpg')]",
          "bg-cover bg-no-repeat",
          "bg-position-[60%_12%]",
          "sm:bg-position-[62%_10%]",
          "md:bg-position-[66%_12%]",
          "lg:bg-position-[71%_16%]",
          "xl:bg-position-[74%_18%]",
          "2xl:bg-position-[76%_20%]",
        )}
      >
        <div
          className={clsx(
            "relative mx-auto xl:ml-0",
            "w-full max-w-7xl",
            "px-6 py-14",
            "sm:px-8 sm:py-16",
            "lg:px-16 lg:py-20",
            "xl:px-16 xl:py-24",
          )}
        >
          <div
            className={clsx(
              "max-w-84",
              "sm:max-w-108",
              "md:max-w-lg",
              "lg:max-w-120",
              "xl:max-w-125",
              "xl:mr-auto",
            )}
          >
            <h1
              className={clsx(
                "font-bold tracking-tight",
                "text-[35px] leading-[1.04] text-white/92",
                "sm:text-[51px]",
                "md:text-[61px] md:leading-[1.02]",
                "lg:text-[63px]",
                "xl:text-[68px] xl:leading-[1.01]",
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
                "mt-5 max-w-[288px]",
                "text-[16px] leading-[1.7] text-white/90",
                "sm:mt-6 sm:max-w-88 sm:text-[18px]",
                "md:max-w-100 md:text-[20px] md:leading-[1.45]",
                "lg:max-w-84 lg:text-[18px]",
                "xl:max-w-90 xl:text-[19px] xl:leading-[1.45]",
              )}
            >
              Telemetria para pivôs com tecnologia que reduz custos e aumenta a
              produtividade.
            </p>

            <div
              className={clsx("mt-8 w-full sm:w-auto", "lg:mt-16", "xl:mt-20")}
            >
              <DefaultButton
                className={clsx("md:min-w-0", "lg:min-w-92", "xl:min-w-90")}
              >
                Quero transformar minha irrigação
              </DefaultButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
