import { Typography } from "./Typography";

export function InfoSection() {
  return (
    <section className="mt-[199px]">
      <div className="container flex flex-col gap-[81px]">
        <Typography className="text-h1 text-h text-center">
          Узнайте про Twin больше
        </Typography>
        <ul className="flex gap-8">
          <li className="ring ring-inset ring-border-off rounded-lg flex gap-5 px-6 items-center py-8">
            <div className="max-w-[80px] overflow-hidden">
              <img src="/images/blog.png" alt="" />
            </div>
            <div className="flex flex-col gap-2 max-w-[204px]">
              <Typography className="text-[22px] leading-[27px] text-h">
                Блог
              </Typography>
              <Typography className="text-[15px] text-text leading-[23px]">
                Полезные статьи, кейсы, лайфхаки и новости
              </Typography>
            </div>
          </li>
          <li className="ring ring-inset ring-border-off rounded-lg flex gap-5 px-6 items-center py-8">
            <div className="max-w-[80px] overflow-hidden">
              <img src="/images/knowledge.png" alt="" />
            </div>
            <div className="flex flex-col gap-2 max-w-[204px]">
              <Typography className="text-[22px] leading-[27px] text-h">
                База знаний
              </Typography>
              <Typography className="text-[15px] text-text leading-[23px]">
                Ответы на вопросы по использованию сервиса
              </Typography>
            </div>
          </li>
          <li className="ring ring-inset ring-border-off rounded-lg flex gap-5 px-6 items-center py-8">
            <div className="max-w-[80px] overflow-hidden">
              <img src="/images/company.png" alt="" />
            </div>
            <div className="flex flex-col gap-2 max-w-[204px]">
              <Typography className="text-[22px] leading-[27px] text-h">
                О компании
              </Typography>
              <Typography className="text-[15px] text-text leading-[23px]">
                Наша история и патенты
              </Typography>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
