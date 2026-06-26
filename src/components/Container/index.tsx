import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: Readonly<ContainerProps>) {
  return (
    <div className="bg-[#fffdf9] min-h-screen">
      <div
        className={clsx(
          "max-w-screen",
          "[--header-height:53px]",
          "sm:[--header-height:64px]",
          "md:[--header-height:80px]",
          "lg:[--header-height:112px]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
