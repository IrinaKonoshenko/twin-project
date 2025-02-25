import { Button } from "./Button";
import { Typography } from "./Typography";

export function DecisionSection() {
  return (
    <section className="mt-[180px]">
      <div className="container bg-[#F6F9FF] rounded-xl flex gap-[26px] items-center px-[60px] pt-[75px]">
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
        <div className="min-w-[459px]">
          <img src="/images/man.png" alt="" />
        </div>
      </div>
    </section>
  );
}
