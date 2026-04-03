import clsx from "clsx";
import { SearchIcon } from "lucide-react";

export default function SearchButton() {
  return (
    <button
      type="button"
      title="Botão de pesquisa"
      aria-label="Botão de pesquisa"
      className={clsx(
        "inline-flex",
        "h-10 w-10",
        "items-center justify-center",
        "rounded-full",
        "transition-colors hover:bg-white/10",
      )}
    >
      <SearchIcon className={clsx("h-4, w-4")} strokeWidth={2.3} />
    </button>
  );
}
