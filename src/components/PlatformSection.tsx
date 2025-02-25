import { Typography } from "./Typography";

export function PlatformSection() {
  return (
    <section className="mt-[163px] pb-[72px]">
      <div className="container flex flex-col gap-[57px]">
        <Typography className="text-h1 text-h text-center">
          Платформа Twin
        </Typography>
        <div className="flex gap-[64px] items-center">
          <div className="min-w-[494px]">
            <img src="/images/schema.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-[14px]">
            <div className="flex flex-col gap-[3px]">
              <Typography className="text-header4 text-secondary">
                Конструктор ботов
              </Typography>
              <Typography className="text-[32px] font-medium text-h leading-[39px]">
                Боты под ваши задачи
              </Typography>
            </div>
            <Typography className="text-p text-text">
              Выберите бота из каталога и редактируйте его под ваши нужды или
              сделайте собственного. Мы поможем создать и интегрировать вашего
              первого бота.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
