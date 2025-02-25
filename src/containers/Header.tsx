import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HeaderMenu } from "../components/HeaderMenu";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Icon } from "../components/icon/Icon";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 items-center transition-colors duration-300 bg-[#F8F7FA]">
      <div className="w-[1312px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link to="/" className="">
            <Logo type="header" />
          </Link>

          <HeaderMenu />

          <div className="flex gap-4 w-[575px]">
            <Input
              placeholder="Поиск по названию или ID"
              value=""
              className="bg-white"
            />
            <Button
              text="Найти"
              borderStyle="bold"
              color="blue"
              leftElement={<Icon icon="search" size="16" />}
              rounded
            />
          </div>
        </div>
      </div>
    </header>
  );
}
