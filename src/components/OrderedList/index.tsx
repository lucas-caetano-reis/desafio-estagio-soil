import clsx from "clsx";

type OrderedListProps = {
  items: string[];
  classname?: string;
};

export default function OrderedList({
  items,
  classname,
}: Readonly<OrderedListProps>) {
  return (
    <ol className={clsx("list-decimal marker:font-bold", classname)}>
      {items.map((item) => (
        <li key={item} className="pl-4">
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
