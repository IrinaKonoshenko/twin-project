import { Button } from "./Button";
import { Typography } from "./Typography";

export function DecisionSection() {
  return (
    <section className="mt-[180px]">
      <div className="relative container z-1 py-20 px-15 bg-[#F6F9FF] rounded-xl flex gap-[26px] items-center">
        <div className="flex flex-col gap-[47px]">
          <div className="flex flex-col gap-[22px] max-w-[520px] ">
            <Typography className="text-[32px] font-medium leading-[39px] text-h">
              Индивидуальное решение
            </Typography>
            <Typography className="text-p text-text">
              Всё под ключ! Разобьем клиентский путь на сценарии, сделаем ботов
              под каждый из них и интегрируем в процессы компании.
            </Typography>
          </div>
          <div>
            <Button text="Оставить заявку" color="blue" filled rounded />
          </div>
        </div>
        <div className="absolute bottom-0 right-[55px] -z-[1] w-[459px] h-[338px]">
          <img src="/images/man.png" alt="" />
        </div>
      </div>
    </section>
  );
}
