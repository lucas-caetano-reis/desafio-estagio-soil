import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: Readonly<ContainerProps>) {
  return (
    <div className={clsx("bg-[#fffdf9]", "min-h-screen")}>
      <div className={clsx("max-w-screen")}>{children}</div>
    </div>
  );
}
