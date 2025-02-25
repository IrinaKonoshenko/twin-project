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
            <Icon icon="telegram" size="24"></Icon>
            <Icon icon="whatsapp" size="24"></Icon>
            <Icon icon="vk" size="24"></Icon>
          </div>
          <div className="flex flex-col gap-3 items-end">
            <p className="text-very-small text-[#56556E]">hello@twin24.ai</p>
            <p className="text-very-small text-[#56556E]">+7 (999) 999-99-99</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
