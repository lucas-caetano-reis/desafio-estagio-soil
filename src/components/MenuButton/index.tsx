import clsx from "clsx";
import { Menu } from "lucide-react";

export default function MenuButton() {
  return (
    <button
      type="button"
      title="Abrir menu de navegação"
      aria-label="Abrir menu de navegação"
      className={clsx(
        "inline-flex",
        "h-10 w-10",
        "items-center justify-center",
        "rounded-full",
        "transition-colors hover:bg-white/10 active:bg-white/10",
      )}
    >
      <Menu
        className={clsx("h-6 w-6", "md:h-8 md:w-8", "lg:h-4 lg:w-4")}
        strokeWidth={2.3}
      />
    </button>
  );
}
