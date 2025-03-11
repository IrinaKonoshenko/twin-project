import { FooterMenu } from "../components/FooterMenu";
import { Icon } from "../components/icon/Icon";
import { Logo } from "../components/Logo";
import { MenuGroup } from "../components/MenuGroup";

const menuGroups = [
  [
    { label: "TwinVoice", path: "/twinvoice" },
    { label: "TwinChat", path: "/twinchat" },
  ],
  [{ label: "Каталог решений", path: "/catalog" }],
  [{ label: "Стоимость", path: "/pricing" }],
  [
    { label: "О компании", path: "/about" },
    { label: "База знаний", path: "/knowledge" },
    { label: "Блог", path: "/blog" },
  ],
  [{ label: "API", path: "/api" }],
  [{ label: "Помощь", path: "/help" }],
  [{ label: "FAQ", path: "/faq" }],
];

export function Footer() {
  return (
    <footer className="py-6">
      <div className="max-w-[1312px] mx-auto flex justify-between">
        <div>
          <Logo type="footer" />
        </div>
        <div className="flex gap-10">
          {menuGroups.map((items, index) => (
            <FooterMenu key={index} items={items} />
          ))}
        </div>
        <div className="flex flex-col gap-6 items-end">
          <div className="flex gap-2">
            <a
              href=""
              className="hover:scale-110 transition-transform duration-300"
            >
              <Icon icon="telegram" size="24"></Icon>
            </a>
            <a
              href=""
              className="hover:scale-110 transition-transform duration-300"
            >
              <Icon icon="whatsapp" size="24"></Icon>
            </a>
            <a
              href=""
              className="hover:scale-110 transition-transform duration-300"
            >
              <Icon icon="vk" size="24"></Icon>
            </a>
          </div>
          <div className="flex flex-col gap-3 items-end">
            <a
              href="mailto:hello@twin24.ai"
              className="text-very-small text-tertiary hover:text-secondary"
            >
              hello@twin24.ai
            </a>
            <a
              href="tel:+79999999999"
              className="text-very-small text-tertiary hover:text-secondary"
            >
              +7 (999) 999-99-99
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
