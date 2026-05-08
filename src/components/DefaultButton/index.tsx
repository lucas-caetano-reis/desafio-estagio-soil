import clsx from "clsx";

type DefaultButtonProps = {
  label: string;
  title: string;
  aria_label: string;
  href: string;
  className?: string;

} & React.ComponentProps<"button">;

export default function DefaultButton({
  label,
  title,
  aria_label,
  href,
  className,
  ...props
}: Readonly<DefaultButtonProps>) {
  return (
    <button
      type="button"
      title={title}
      aria-label={aria_label}
      className={clsx(
        "inline-flex",
        "items-center justify-center",
        "rounded-full",
        "cursor-pointer",
        className,
      )}
      {...props}
    >
      <a href={href}> {label} </a>
    </button>
  );
}
