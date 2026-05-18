import clsx from "clsx";

import DefaultButton from "@/components/DefaultButton";

export default function HeroSection() {
  return (
    <section
      className={clsx(
        "overflow-hidden text-white",
        "bg-[#2f6fa3]",
        "bg-[image:url('/images/hero_background.jpg')]",
        "bg-cover bg-no-repeat",
        "bg-position-[50%_25%]",
      )}
    >
      <div
        className={clsx(
          "max-w-sm",
          "sm:max-w-md",
          "md:max-w-lg",
          "lg:max-w-xl",
          "xl:max-w-2xl",
          "px-8 py-8",
          "sm:px-12 sm:py-12",
          "md:px-16 md:py-16",
          "lg:px-20 lg:py-20",
          "xl:px-24 xl:py-24",
        )}
      >
        <h1
          className={clsx(
            "font-bold leading-tight tracking-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
          )}
        >
          Irrigação inteligente em qualquer lugar.
          <br />
          <em className="font-semibold italic"> Mesmo sem internet.</em>
        </h1>

        <p
          className={clsx(
            "mt-5 leading-tight",
            "text-base sm:text-lg md:text-xl lg:text-2xl",
          )}
        >
          Telemetria para pivôs com tecnologia que reduz custos e aumenta a
          produtividade.
        </p>

        <DefaultButton
          label="Quero transformar minha irrigação"
          aria_label="Quero transformar minha irrigação"
          title="Descubra os produtos que irão transformar sua irrigação"
          href="#produtos"
          className={clsx(
            "mt-8",
            "px-4 py-2",
            "sm:px-6 sm:py-3",
            "md:px-8 md:py-4",
            "font-bold",
            "text-sm sm:text-base md:text-lg lg:text-xl",
            "bg-[#b7d256]",
            "transition-colors hover:bg-[#a8c247] active:bg-[#a8c247]",
          )}
        />
      </div>
    </section>
  );
}
