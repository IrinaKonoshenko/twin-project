import { Link } from "react-router-dom";

const menuItems = [
  { label: "На сайт Twin", path: "/" },
  { label: "Личный кабинет", path: "/personalCabinet" },
  { label: "Оферта", path: "/offer" },
  { label: "Быстрая помощь", path: "/quickHelp" },
];
/// меню в хедере на всех страницах
export function HeaderMenu() {
  return (
    <nav className="">
      <ul className="flex gap-6 items-center">
        {menuItems.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className="font-medium text-header4 hover:text-secondary transition"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
