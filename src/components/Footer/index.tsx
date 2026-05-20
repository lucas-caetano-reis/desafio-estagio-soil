import clsx from "clsx";
import DefaultButton from "@/components/DefaultButton";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "flex flex-col md:flex-row",
        "justify-center items-center",
        "bg-[#3f4c2d] text-white",
        "gap-6",
        "px-8 py-4",
        "sm:px-12 sm:py-6",
        "md:px-16 md:py-8",
        "lg:px-20 lg:py-10",
      )}
    >
      <div>
        <h2
          className={clsx(
            "font-bold leading-tight tracking-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
          )}
        >
          Vamos transformar a sua irrigação?
        </h2>

        <p
          className={clsx(
            "mt-4 text-white/95 leading-tight",
            "text-base sm:text-lg md:text-xl lg:text-2xl",
          )}
        >
          Reduza custos, aumente a produtividade e tenha controle total do seu
          sistema com a Soil.
        </p>
      </div>

      <DefaultButton
        label="Fale com nossos especialistas"
        title="Entrar em contato com a Soil"
        aria_label="Fale com nossos especialistas"
        href="#contato"
        className={clsx(
          "md:min-w-60",
          "px-4 py-2",
          "sm:px-6 sm:py-3",
          "md:px-8 md:py-4",
          "font-bold",
          "text-sm sm:text-base md:text-lg lg:text-xl",
          "bg-[#b7d256]",
          "transition-colors hover:bg-[#a8c247] active:bg-[#a8c247]",
        )}
      />
    </footer>
  );
}
