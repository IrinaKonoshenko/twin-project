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
              <a
                href=""
                className="hover:scale-110 transition-transform duration-300"
              >
                <Icon icon="vk" size="28"></Icon>
              </a>
              <a
                href=""
                className="hover:scale-110 transition-transform duration-300"
              >
                <Icon icon="facebook" size="28"></Icon>
              </a>
            </div>
            <div className="flex flex-col gap-3">
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
