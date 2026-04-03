import clsx from "clsx";

type DefaultButtonProps = {
  children: string;
} & React.ComponentProps<"button">;

export default function DefaultButton({
  children,
  className,
  type = "button",
  ...props
}: Readonly<DefaultButtonProps>) {
  return (
    <button
      aria-label={children}
      title={children}
      type={type}
      className={clsx(
        "inline-flex",
        "w-full md:w-auto md:min-w-60",
        "items-center justify-center",
        "rounded-full",
        "px-8 py-4",
        "sm:text-[16px] md:text-[18px] lg:text-[20px]",
        "font-bold text-white",
        "bg-[#b7d256] transition-colors hover:bg-[#a8c247]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
