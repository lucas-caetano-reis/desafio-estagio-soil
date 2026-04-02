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
        "w-full",
        "md:w-auto",
        "md:min-w-60",
        "items-center",
        "justify-center",
        "rounded-full",
        "bg-[#b7d256]",
        "px-8",
        "py-4",
        "text-3xl",
        "md:text-sm",
        "font-bold",
        "text-white",
        "transition-colors",
        "hover:bg-[#a8c247]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
