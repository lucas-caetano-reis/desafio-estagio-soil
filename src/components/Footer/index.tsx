import clsx from "clsx";

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

        <button
          type="button"
          aria-label="Fale com nossos especialistas"
          title="Fale com nossos especialistas"
          className={clsx(
            "inline-flex",
            "w-full",
            "items-center",
            "justify-center",
            "rounded-full",
            "bg-[#b7d256]",
            "px-8",
            "py-4",
            "text-sm",
            "font-bold",
            "text-white",
            "transition-colors",
            "hover:bg-[#a8c247]",
            "md:w-auto",
            "md:min-w-60",
          )}
        >
          Fale com nossos especialistas
        </button>
      </div>
    </footer>
  );
}
