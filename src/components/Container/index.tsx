import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: Readonly<ContainerProps>) {
  return (
    <div
      className={clsx(
        "w-full",
        "min-h-screen",
        "bg-white",
      )}
    >
      {children}
    </div>
  );
}
