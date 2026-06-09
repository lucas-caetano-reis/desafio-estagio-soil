import clsx from "clsx";

import { navigationItems } from "@/data/NavigationItems/navigationItems";

type NavigationLinksProps = {
  listClassName?: string;
  textClassName?: string;
  iconClassName?: string;
  onItemClick?: () => void;
  showIcons?: boolean;
};

export default function NavigationLinks({
  listClassName,
  textClassName,
  iconClassName,
  onItemClick,
  showIcons = false,
}: Readonly<NavigationLinksProps>) {
  return (
    <nav aria-label="Menu de navegação">
      <ul className={clsx(listClassName, textClassName)}>
        {navigationItems.map(({ key, label, arialabel, href, icon: Icon }, index) => (
          <li key={key}>
            <a
              aria-label={arialabel}
              title={arialabel}
              href={href}
              className={clsx(
                "transition-opacity hover:opacity-85 active:opacity-85",
                showIcons && "inline-flex items-center gap-1.5 leading-tight",
                index === 0 ? "font-bold" : "font-medium",
              )}
              onClick={onItemClick}
            >
              {showIcons ? (
                <Icon className={clsx("shrink-0", iconClassName)} strokeWidth={2} />
              ) : null}
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
