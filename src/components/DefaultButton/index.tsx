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
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
