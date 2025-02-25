import { Link } from "react-router-dom";
import { Typography } from "./Typography";
import { Button } from "./Button";
import { Icon } from "./icon/Icon";

export function HeroSection() {
  return (
    <section className="mt-[235px]">
      <div className="container flex gap-16 items-center">
        <div className="max-w-[448px] flex flex-col gap-9">
          <div className="flex flex-col gap-[23px]">
            <Typography className="text-h1 text-h leading-[55px]">
              Автоматизируйте коммуникации <br /> с ботами Twin
            </Typography>
            <Typography className="text-p text-text">
              Twin – платформа для построения омниканальных автоматизированных
              коммуникаций с клиентом
            </Typography>
          </div>
          <div className="flex gap-[34px] items-center">
            <Button color="blue" rounded filled text="Начать" />
            <Link
              to="/"
              className="flex gap-3 items-center text-secondary text-header4"
            >
              <div className="w-8 h-8 bg-blue rounded-full flex justify-center items-center fill-white">
                <Icon icon="play" className="text-white" size="32" />
              </div>
              Видео о платформе
            </Link>
          </div>
        </div>
        <div className="w-[605px] h-[417px] overflow-hidden">
          <img src="/images/main.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
