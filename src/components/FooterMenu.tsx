import { Link } from "react-router-dom";

interface FooterMenuProps {
  items: { label: string; path: string }[];
}
/// меню в футере на всех страницах
export function FooterMenu({ items }: FooterMenuProps) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map(({ label, path }) => (
        <li key={path}>
          <Link
            to={path}
            className="text-header5 text-tertiary hover:text-secondary transition"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
