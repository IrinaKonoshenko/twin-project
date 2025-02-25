import { Link } from "react-router-dom";

const menuItems = [
  { label: "Продукты", path: "/products" },
  { label: "Каталог решений", path: "/catalog" },
  { label: "Ресурсы", path: "/resources" },
  { label: "Стоимость", path: "/pricing" },
  { label: "API", path: "/api" },
];
/// меню в хедере на главной лендинг
export function Navbar() {
  return (
    <nav className="">
      <ul className="flex gap-6 items-center">
        {menuItems.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className="font-medium text-[15px] text-[#435269] hover:text-secondary transition"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
