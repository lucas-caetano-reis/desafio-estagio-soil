import clsx from "clsx";

export default function LoginButton() {
  return (
    <button
      type="button"
      title="Botão de login"
      aria-label="Botão de login"
      className={clsx(
        "inline-flex",
        "min-w-28",
        "items-center justify-center",
        "rounded-full",
        "px-8 py-3",
        "font-bold text-[#2f3b1d]",
        "bg-white transition-colors hover:bg-[#f3f3ed]",
      )}
    >
      Login
    </button>
  );
}
