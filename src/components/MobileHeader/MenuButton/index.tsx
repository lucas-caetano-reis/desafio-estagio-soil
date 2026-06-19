import clsx from "clsx";
import { Menu } from "lucide-react";

type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function MenuButton({
  isOpen,
  onClick,
}: Readonly<MenuButtonProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      title="Abrir menu de navegação"
      aria-label="Abrir menu de navegação"
      aria-expanded={isOpen}
      aria-controls="side-bar"
      className={clsx(
        "inline-flex",
        "h-10 w-10",
        "items-center justify-center",
        "rounded-full",
        "transition-colors hover:bg-white/10 active:bg-white/10",
      )}
    >
      <Menu
        aria-hidden="true"
        className={clsx("h-6 w-6", "md:h-8 md:w-8", "lg:h-4 lg:w-4")}
        strokeWidth={2.3}
      />
    </button>
  );
}
