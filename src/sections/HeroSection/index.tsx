import clsx from "clsx";

import DefaultButton from "@/components/DefaultButton";

export default function HeroSection() {
  return (
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
          "relative mx-auto",
          "w-full",
          "px-8 py-8",
          "sm:px-12 sm:py-12",
          "md:px-16 md:py-16",
          "lg:px-20 lg:py-20",
          "xl:px-24 xl:py-24",
        )}
      >
        <div
          className={clsx(
            "max-w-xs",
            "sm:max-w-sm",
            "md:max-w-md",
            "lg:max-w-lg",
            "xl:max-w-xl",
          )}
        >
          <h1
            className={clsx(
              "font-bold tracking-tight",
              "text-2xl",
              "sm:text-3xl",
              "md:text-4xl",
              "lg:text-5xl",
              "xl:text-6xl",
            )}
          >
            Irrigação inteligente em qualquer lugar.
            <br />
            <em className="font-semibold italic"> Mesmo sem internet.</em>
          </h1>

          <p
            className={clsx(
              "mt-5",
              "text-sm",
              "sm:text-base",
              "md:text-lg",
              "lg:text-xl",
              "xl:text-2xl"
            )}
          >
            Telemetria para pivôs com tecnologia que reduz custos e aumenta a
            produtividade.
          </p>

          <div
            className={clsx("mt-8 w-full")}
          >
            <DefaultButton
              label="Quero transformar minha irrigação"
              aria_label="Quero transformar minha irrigação"
              title="Descubra os produtos que irão transformar sua irrigação"
              href="#produtos"
              className={clsx(
                "w-auto",
                "px-4 py-4",
                "text-sm sm:text-base md:text-lg lg:text-xl",
                "font-bold",
                "bg-[#b7d256] transition-colors hover:bg-[#a8c247]",
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
