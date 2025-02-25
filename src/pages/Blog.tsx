import { BlogCard } from "../components/BlogCard";
import { Chip } from "../components/Chip";
import { Icon } from "../components/icon/Icon";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Typography } from "../components/Typography";

const blogList: {
  img: string;
  title: string;
  description: string;
  createdDate: string;
  status?: "active" | "draft";
}[] = [
  {
    img: "/images/dress.jpg",
    title: "Повышаем продажи подключая корзину с сайта в диалог",
    description:
      "Рассказываем зачем это нужно. Добавляем пользователей, создаём им роли и распределяем права.",
    createdDate: new Date(Date.UTC(2025, 1, 26)).toISOString(),
    status: "active",
  },
  {
    img: "/images/peoples.jpg",
    title: "Роли пользователей",
    description:
      "Рассказываем зачем это нужно. Добавляем пользователей, создаём им роли и распределяем права.",
    createdDate: new Date(Date.UTC(2025, 1, 25)).toISOString(),
    status: "draft",
  },
  {
    img: "/images/robot.jpg",
    title: "Ваш первый робот",
    description: "Узнайте, как создать вашего нового сотрудника с нуля.",
    createdDate: new Date(Date.UTC(2025, 1, 15)).toISOString(),
    status: "active",
  },
  {
    img: "/images/oleg.jpg",
    title: "Интервью с Олегом Юшковым",
    description: "Узнайте, как создать вашего нового сотрудника с нуля.",
    createdDate: new Date(2025, 2, 23).toISOString(),
  },
  {
    img: "/images/attraction.jpg",
    title: "TWIN на конференции в Лондоне",
    description:
      "Рассказывали и показывали о новых возможностях в коммуникации с пользователями",
    createdDate: new Date(2025, 2, 20).toISOString(),
    status: "active",
  },
  {
    img: "/images/package.jpg",
    title: "Повышение LTV клиента после введения трекинга посылок",
    description:
      "Супер-кейс наших клиентов – крупнешего перевозчика посылок в СНГ, самый популярынй материал года на vc.ru",
    createdDate: new Date(1995, 6, 2).toISOString(),
    status: "draft",
  },
  {
    img: "/images/womanphone.jpg",
    title: "Лучшие практики дозвона",
    description: "Вебинар Twin с Игорем Калининым.",
    createdDate: new Date(2021, 6, 2).toISOString(),
    status: "active",
  },
  {
    img: "/images/kb2.6.jpg",
    title: "КБ v2.6",
    description:
      "Добавили возможности итераций через PayPal и отправление геолокации",
    createdDate: new Date(1993, 9, 4).toISOString(),
    status: "draft",
  },
];

export default function Blog() {
  return (
    <section className="mt-[108px] pb-20">
      <div className="max-w-[1312px] mx-auto flex-col flex gap-6">
        <div className="flex justify-between items-center py-6">
          <Typography className="text-header1">Блог</Typography>
          <div className="w-[310px]">
            <Input
              value=""
              placeholder="Поиск"
              elementLeft={<Icon icon="picture" size="18" />}
            />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Chip value={false} onChange={() => null} label="Новости TWIN" />
          <Chip value={false} onChange={() => null} label="Кейсы компаний" />
          <Chip value={false} onChange={() => null} label="Видео" />
          <Chip value={false} onChange={() => null} label="Вебинары" />
          <Chip value={false} onChange={() => null} label="Обновления" />
          <Chip
            value={false}
            onChange={() => null}
            label="Рекомендации по разработке"
          />
          <Chip value={false} onChange={() => null} label="Исследования" />
          <Chip value={false} onChange={() => null} label="Плейлист" />
          <Chip value={false} onChange={() => null} label="Юмор" />
          <Chip
            value={false}
            onChange={() => null}
            label="Технические статьи"
          />
          <Chip value={false} onChange={() => null} label="Без раздела" />
        </div>
        <div className="flex justify-between">
          <Typography className="text-header3">Всего 478 публикаций</Typography>
          <div>
            <Select
              label="Самые новые"
              elementRight={<Icon icon="caretDown" size="6" />}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {blogList.map((items, index) => (
            <BlogCard
              key={index}
              createdDate={items.createdDate}
              img={items.img}
              description={items.description}
              title={items.title}
              status={items.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
