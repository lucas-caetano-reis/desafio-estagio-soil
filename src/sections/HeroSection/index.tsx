import Image from "next/image";
import clsx from "clsx";

import DefaultButton from "@/components/DefaultButton";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-[#aac55d] text-white">
      <div
        className={clsx(
          "relative overflow-hidden",
          "w-full h-80 sm:h-120 lg:h-160",
        )}
      >
        <Image
          src="/images/hero_background.jpg"
          alt="Funcionários da Soil instalando um monitor em um pivô agrícola."
          fill
          priority
          className="object-cover object-[50%_25%]"
        />

        <div className="hidden lg:block absolute inset-0 bg-black/20" />
      </div>

      <div
        className={clsx(
          "flex w-full flex-col",
          "justify-center items-center lg:items-start",
          "px-8 py-8",
          "sm:px-12 sm:py-12",
          "md:px-16 md:py-16",
          "lg:px-20 lg:py-20",
          "xl:px-24 xl:py-24",
          "lg:absolute lg:inset-0",
        )}
      >
        <div
          className={clsx(
            "flex flex-col",
            "max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl",
          )}
        >
          <h1
            className={clsx(
              "font-bold leading-tight",
              "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
            )}
          >
            Irrigação inteligente em qualquer lugar.{" "}
            <em className="font-semibold italic inline-flex">
              {" "}
              Mesmo sem internet.{" "}
            </em>
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
              "text-[#2f3b1d] lg:text-white font-bold",
              "text-sm sm:text-base md:text-lg lg:text-xl",
              "bg-white lg:bg-[#b7d256]",
              "transition-colors hover:bg-[#f3f3ed] active:bg-[#f3f3ed]",
              "lg:hover:bg-[#a8c247] lg:active:bg-[#a8c247]",
            )}
          />
        </div>
      </div>
    </section>
  );
}
