import clsx from "clsx";
import DefaultButton from "@/components/DefaultButton";

export default function Footer() {
  return (
    <footer className={clsx("bg-[#3f4c2d]", "text-white")}>
      <div
        className={clsx(
          "flex flex-col md:flex-row",
          "justify-center items-center",
          "px-12 py-12",
          "md:px-16 lg:px-16",
          "gap-8",
        )}
      >
        <div>
          <h2
            className={clsx(
              "font-bold leading-tight",
              "text-3xl md:text-4xl",
            )}
          >
            Vamos transformar a sua irrigação?
          </h2>

          <p
            className={clsx(
              "mt-4",
              "text-white/95 leading-tight",
              "text-base",
              "text-lg",
              "md:text-2xl",
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
            "w-auto md:min-w-60",
            "px-8 py-4",
            "text-sm sm:text-base md:text-lg lg:text-xl",
            "font-bold",
            "bg-[#b7d256]",
            "transition-colors hover:bg-[#a8c247] active:bg-[#a8c247]",
          )}
        />
      </div>
    </footer>
  );
}
