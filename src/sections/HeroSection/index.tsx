import clsx from "clsx";

import HeroBackgroundCarousel from "@/components/HeroBackgroundCarousel";
import DefaultButton from "@/components/DefaultButton";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-[#aac55d] text-white">
      <HeroBackgroundCarousel />

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
            Telemetria inteligente em qualquer lugar.{" "}
            <em className="font-semibold italic inline-flex">
              Mesmo sem internet.
            </em>
          </h1>

          <p
            className={clsx(
              "mt-5 leading-tight",
              "text-base sm:text-lg md:text-xl lg:text-2xl",
            )}
          >
            Telemetria para irrigação com tecnologia que reduz custos e aumenta
            a produtividade.
          </p>

          <DefaultButton
            label="Quero transformar minha irrigação"
            ariaLabel="Entrar em contato com funcionários da Soil."
            title="Entrar em contato com funcionários da Soil."
            href="https://wa.me/5535999679301?text=Ol%C3%A1%2C%20vim%20pelo%20site%20institucional%20e%20tenho%20interesse%20em%20conhecer%20melhor%20suas%20solu%C3%A7%C3%B5es.%20Poderiam%20me%20passar%20mais%20detalhes%3F"
            target="_blank"
            rel="noopener noreferrer"
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
