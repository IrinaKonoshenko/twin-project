import { Button } from "./Button";
import { Typography } from "./Typography";

export function ChoiceSection() {
  return (
    <section className="mt-[160px]">
      <div className="container flex flex-col gap-[61px]">
        <Typography className="text-h1 text-h text-center">
          Говорят и пишут как человек
        </Typography>
        <div className="flex gap-8">
          <div className="w-1/2 bg-[#F6F9FF] border border-[#E6EAF2] rounded-lg py-9 px-8">
            <div className="flex flex-col gap-[33px]">
              <div className="flex flex-col gap-6">
                <div className="flex gap-3 items-center">
                  <Typography className="text-[32px] text-h font-medium">
                    Twin
                  </Typography>
                  <Typography className="text-[17px] text-white bg-blue p-[3px] px-[7px] tracking-[1.2px] uppercase font-medium">
                    Voice
                  </Typography>
                </div>
                <Typography className="text-p text-text ">
                  Говорят естественным человеческим голосом, умеют распознавать
                  настроение и отвечать на вопросы. Стабильно работают 99%
                  времени благодаря микросервисной инфраструктуре. Поминутная
                  оплата от 7 ₽ за минуту.
                </Typography>
              </div>
              <div>
                <Button
                  borderStyle="thin"
                  color="blue"
                  rounded
                  text="Подробнее"
                ></Button>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-[#F6F9FF] border border-[#E6EAF2] rounded-lg py-9 px-8">
            <div className="flex flex-col gap-[62px]">
              <div className="flex flex-col gap-6">
                <div className="flex gap-3 items-center">
                  <Typography className="text-[32px] text-h font-medium">
                    Twin
                  </Typography>
                  <Typography className="text-[17px] text-white bg-blue p-[3px] px-[7px] tracking-[1.2px] uppercase font-medium">
                    chat
                  </Typography>
                </div>
                <Typography className="text-p text-text ">
                  Работают на сайтах, в мессенджерах, по электронной почте и
                  СМС. Боты понимают контекст общения, могут принимать и
                  отправлять файлы и документы. От 60 копеек за итерацию.
                </Typography>
              </div>
              <div>
                <Button
                  borderStyle="thin"
                  color="blue"
                  rounded
                  text="Подробнее"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
