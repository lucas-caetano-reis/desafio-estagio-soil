import clsx from "clsx";
import DefaultButton from "@/components/DefaultButton";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "w-full",
        "bg-[#3f4c2d]",
        "text-white",
        "px-6 py-10",
        "md:px-16 lg:px-24",
      )}
    >
      <div
        className={clsx(
          "mx-auto",
          "flex flex-col md:flex-row",
          "w-full max-w-6xl",
          "gap-8",
          "md:items-center md:justify-between",
        )}
      >
        <div className={clsx("max-w-2xl")}>
          <h2 className={clsx("font-bold", "text-3xl/snug md:text-4xl/snug")}>
            Vamos transformar a sua irrigação?
          </h2>

          <p
            className={clsx(
              "mt-4",
              "text-white/95",
              "text-lg/snug md:text-2xl/snug",
            )}
          >
            Reduza custos, aumente a produtividade e tenha controle total do seu
            sistema com a Soil.
          </p>
        </div>

        <DefaultButton
          label="Fale com nossos especialistas"
          title="Botão para entrar em contato os especialistas da Soil"
          aria_label="Fale com nossos especialistas"
          href="#contato"
          className={clsx(
            "w-full md:w-auto md:min-w-60",
            "px-8 py-4",
            "sm:text-[16px] md:text-[18px] lg:text-[20px]",
            "font-bold text-white",
            "bg-[#b7d256] transition-colors hover:bg-[#a8c247]",
          )}
        />
      </div>
    </footer>
  );
}
