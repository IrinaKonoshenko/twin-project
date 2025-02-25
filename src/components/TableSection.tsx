import { Typography } from "./Typography";

export function TableSection() {
  return (
    <section className="pt-[221px] pb-[234px]">
      <div className="container relative flex justify-end items-center">
        <div className="absolute -left-[322px] min-w-[602px]">
          <img src="/images/worktable.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-[14px] max-w-[542px]">
          <div className="flex flex-col gap-[3px]">
            <Typography className="text-header4 text-secondary">
              Удобный личный кабинет
            </Typography>
            <Typography className="text-[32px] font-medium text-h leading-[39px]">
              Полный контроль и аналитика
            </Typography>
          </div>
          <Typography className="text-p text-text">
            Вся информация под рукой: ваши боты, логи и расходы за итерации,
            база данных о клиентах и подробная аналитика эффективности кампаний.
          </Typography>
        </div>
      </div>
    </section>
  );
}
