import { Link } from "react-router-dom";

interface MenuGroupProps {
  items: { label: string; path: string }[];
}
/// меню в футере на главной лендинг
export function MenuGroup({ items }: MenuGroupProps) {
  return (
    <ul className="flex flex-col gap-5">
      {items.map(({ label, path }) => (
        <li key={path}>
          <Link
            to={path}
            className="text-header4 text-h hover:text-secondary transition"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
