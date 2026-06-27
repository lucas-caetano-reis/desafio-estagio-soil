import clsx from "clsx";
import AppScreensCarousel from "@/components/AppScreensCarousel";

export default function AppSection() {
  return (
    <section
      id="aplicativo"
      className={clsx(
        "flex flex-col",
        "items-center justify-center",
        "bg-[#fffdf9]",
        "px-8 py-8",
        "sm:px-12 sm:py-10",
        "md:px-16 md:py-12",
        "lg:px-20 lg:py-14",
      )}
    >
      <header className="text-center text-[#1b2027]">
        <h2
          className={clsx(
            "font-bold leading-tight tracking-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
          )}
        >
          Conheça o aplicativo da Soil
        </h2>
      </header>

      <h3
        className={clsx(
          "mt-2 text-[#1f252c] leading-tight",
          "text-lg sm:text-xl md:text-2xl lg:text-3xl",
        )}
      >
        Disponível para{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.soiltechapp2"
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "text-[#a5bf55] underline decoration-[#a5bf55]/40 underline-offset-4",
            "transition-colors hover:text-[#94ac4c] hover:decoration-[#94ac4c]",
          )}
        >
          Android
        </a>{" "}
        e{" "}
        <a
          href="https://apps.apple.com/br/app/soilapp2/id6470928312"
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "text-[#a5bf55] underline decoration-[#a5bf55]/40 underline-offset-4",
            "transition-colors hover:text-[#94ac4c] hover:decoration-[#94ac4c]",
          )}
        >
          iOS
        </a>
        :
      </h3>

      <AppScreensCarousel />
    </section>
  );
}
