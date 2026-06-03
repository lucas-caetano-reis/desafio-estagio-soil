import clsx from "clsx";
import { contactItems } from "@/components/ContactLinks/contactItems";

type ContactLinksProps = {
  listClassName?: string;
  textClassName?: string;
  iconClassName?: string;
  onItemClick?: () => void;
};

export default function ContactLinks({
  listClassName,
  textClassName,
  iconClassName,
  onItemClick,
}: Readonly<ContactLinksProps>) {
  return (
    <nav aria-label="Informações de contato">
      <ul className={clsx(listClassName, textClassName)}>
        {contactItems.map(({ key, label, info, href, icon: Icon }) => (
          <li key={key}>
            <a
              aria-label={info}
              title={info}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "inline-flex",
                "items-center",
                "gap-1.5 leading-tight",
                "transition-opacity hover:opacity-85 active:opacity-85",
              )}
              onClick={onItemClick}
            >
              <Icon className={clsx("shrink-0", iconClassName)} strokeWidth={2} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
