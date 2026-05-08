import clsx from "clsx";

export default function LoginButton() {
  return (
    <button
      type="button"
      title="Botão de login"
      aria-label="Botão de login"
      className={clsx(
        "inline-flex",
        "items-center justify-center",
        "rounded-full",
        "min-w-28",
        "px-8 py-3",
        "font-bold text-[#2f3b1d]",
        "bg-white transition-colors hover:bg-[#f3f3ed]",
      )}
    >
      <a href="https://pc.soiltech.com.br/"> Login </a>
    </button>
  );
}
