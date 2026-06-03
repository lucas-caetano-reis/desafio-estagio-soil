import clsx from "clsx";

type DefaultButtonProps = {
  label: string;
  ariaLabel: string;
  className?: string;
} & React.ComponentProps<"a">;

export default function DefaultButton({
  label,
  ariaLabel,
  className,
  ...props
}: Readonly<DefaultButtonProps>) {
  return (
    <a
      aria-label={ariaLabel}
      className={clsx(
        "inline-flex",
        "items-center justify-center",
        "rounded-full",
        "cursor-pointer",
        className,
      )}
      {...props}
    >
      {label}
    </a>
  );
}
