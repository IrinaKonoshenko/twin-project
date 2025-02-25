import { Button } from "./Button";
import { Icon } from "./icon/Icon";
import { Typography } from "./Typography";

export function CatalogSection() {
  return (
    <section className="mt-[142px]">
      <div className="container flex flex-col gap-[59px]">
        <div className="flex flex-col gap-[69px]">
          <div className="flex flex-col gap-[27px]">
            <Typography className="text-h text-h1 text-center">
              Каталог сценариев и решений
            </Typography>
            <Typography className="text-text text-p max-w-[740px] mx-auto text-center">
              Мы собрали сценарии взаимодействий с клиентом и сделали для них
              ботов, которых вы можете добавить себе в кабинет и встроить в
              нужные вам процессы.
            </Typography>
          </div>
          <ul className="flex gap-8 items-center justify-center">
            <li className="flex flex-col ring ring-inset ring-border-off rounded-lg">
              <div className="relative">
                <div className="max-w-[352px] overflow-hidden flex justify-center items-center">
                  <img src="/images/phone.jpg" alt="" />
                </div>
                <div className="absolute -bottom-6 right-8 flex gap-4 justify-center items-center z-10">
                  <div className="w-12 h-12 rounded-full bg-white text-secondary flex justify-center items-center z-10 shadow-[0_4px_8px_rgba(144,152,160,0.16)]">
                    <Icon icon="play" size="36" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex justify-center items-center z-10">
                    <Icon icon="plus" size="22" />
                  </div>
                </div>
              </div>
              <div className="px-8 pt-4.5 pb-8 flex flex-col gap-10">
                <div className="flex flex-col gap-[3px]">
                  <div className="flex gap-0.5 items-center text-stars">
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                  </div>
                  <div className="max-w-[288px] flex flex-col gap-1">
                    <Typography className="text-[22px] leading-[27.5px] font-medium text-h">
                      Напоминание о корзине
                    </Typography>
                    <Typography className="text-[15px] leading-[23px] text-text">
                      Напомните клиентам о том, что у них остались товары в
                      корзине
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Icon icon="facebook" size="30" />
                  <Icon icon="vk" size="30" />
                </div>
              </div>
            </li>
            <li className="flex flex-col ring ring-inset ring-border-off rounded-lg">
              <div className="relative">
                <div className="max-w-[352px] overflow-hidden flex justify-center items-center">
                  <img src="/images/tablet.jpg" alt="" />
                </div>
                <div className="absolute -bottom-6 right-8 flex gap-4 justify-center items-center z-10">
                  <div className="w-12 h-12 rounded-full bg-white text-secondary flex justify-center items-center z-10 shadow-[0_4px_8px_rgba(144,152,160,0.16)]">
                    <Icon icon="play" size="36" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex justify-center items-center z-10">
                    <Icon icon="plus" size="22" />
                  </div>
                </div>
              </div>
              <div className="px-8 pt-4.5 pb-8 flex flex-col gap-10">
                <div className="flex flex-col gap-[3px]">
                  <div className="flex gap-0.5 items-center text-stars">
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                  </div>
                  <div className="max-w-[288px] flex flex-col gap-1">
                    <Typography className="text-[22px] leading-[27.5px] font-medium text-h">
                      Оформление кредита
                    </Typography>
                    <Typography className="text-[15px] leading-[23px] text-text">
                      Простой бот для быстрого оформления кредита через сайт или
                      мессенджер
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Icon icon="whatsapp" size="30" />
                  <Icon icon="viber" size="30" />
                  <Icon icon="telegram" size="30" />
                </div>
              </div>
            </li>
            <li className="flex flex-col ring ring-inset ring-border-off rounded-lg">
              <div className="relative">
                <div className="max-w-[352px] overflow-hidden flex justify-center items-center">
                  <img src="/images/car.jpg" alt="" />
                </div>
                <div className="absolute -bottom-6 right-8 flex gap-4 justify-center items-center z-10">
                  <div className="w-12 h-12 rounded-full bg-white text-secondary flex justify-center items-center z-10 shadow-[0_4px_8px_rgba(144,152,160,0.16)]">
                    <Icon icon="play" size="36" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex justify-center items-center z-10">
                    <Icon icon="plus" size="22" />
                  </div>
                </div>
              </div>
              <div className="px-8 pt-4.5 pb-8 flex flex-col gap-10">
                <div className="flex flex-col gap-[3px]">
                  <div className="flex gap-0.5 items-center text-stars">
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                    <Icon icon="star" size="22" />
                  </div>
                  <div className="max-w-[288px] flex flex-col gap-1">
                    <Typography className="text-[22px] leading-[27.5px] font-medium text-h">
                      Трекер посылок
                    </Typography>
                    <Typography className="text-[15px] leading-[23px] text-text">
                      Отслеживание посылки, оформление страховки и доставки
                      курьером
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Icon icon="vk" size="30" />
                  <Icon icon="whatsapp" size="30" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <Button text="Весь каталог" color="blue" filled rounded />
        </div>
      </div>
    </section>
  );
}
