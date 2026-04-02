import clsx from "clsx";
import DefaultButton from "@/components/DefaultButton";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "w-full",
        "bg-[#3f4c2d]",
        "px-6",
        "py-10",
        "text-white",
        "md:px-16",
        "lg:px-24",
      )}
    >
      <div
        className={clsx(
          "mx-auto",
          "flex",
          "w-full",
          "max-w-6xl",
          "flex-col",
          "gap-8",
          "md:flex-row",
          "md:items-center",
          "md:justify-between",
        )}
      >
        <div className={clsx("max-w-3xl")}>
          <h2
            className={clsx(
              "text-3xl",
              "font-bold",
              "leading-tight",
              "md:text-5xl",
            )}
          >
            Vamos transformar a sua irrigação?
          </h2>

          <p
            className={clsx(
              "mt-4",
              "max-w-2xl",
              "text-lg",
              "leading-snug",
              "text-white/95",
              "md:text-2xl",
            )}
          >
            Reduza custos, aumente a produtividade e tenha controle total do seu
            sistema com a Soil.
          </p>
        </div>

        <DefaultButton>Fale como nossos especialistas</DefaultButton>
      </div>
    </footer>
  );
}
