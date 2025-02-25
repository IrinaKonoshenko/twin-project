import { HomeLogo } from "../components/HomeLogo";
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
];

export function HomeFooter() {
  return (
    <footer className="mt-[198px] pb-3">
      <div className="container flex justify-between">
        <div>
          <HomeLogo type="homeFooter" />
        </div>
        <div className="flex gap-10">
          {menuGroups.map((items, index) => (
            <MenuGroup key={index} items={items} />
          ))}
        </div>
        <div className="flex flex-col gap-15">
          <div className="flex flex-col gap-3">
            <div className="flex gap-5">
              <Icon icon="vk" size="28"></Icon>
              <Icon icon="facebook" size="28"></Icon>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-very-small">hello@twin24.ai</p>
              <p className="text-very-small">+7 (999) 999-99-99</p>
            </div>
          </div>
          <div>
            <a className="text-secondary text-very-small font-medium" href="">
              English version
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
