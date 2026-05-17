type UnorderedListProps = {
  items: string[];
  classname?: string;
};

export default function UnorderedList({
  items,
  classname,
}: Readonly<UnorderedListProps>) {
  return (
    <ul className={classname}>
      {items.map((item) => (
        <li key={item} className="pl-4">
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
