import { ActionButton } from "../components/ActionButton";
import { BotCard } from "../components/BotCard";
import { Button } from "../components/Button";
import { Icon } from "../components/icon/Icon";
import { ReviewCard } from "../components/ReviewCard";
import { Socials } from "../components/Socials";
import { Star } from "../components/Stars";
import { Tag } from "../components/Tag";
import { Typography } from "../components/Typography";

export default function Bot() {
  return (
    <div className="mt-21">
      <div className="max-w-[1090px] mx-auto flex flex-col gap-8">
        <Ref />
        <div className="flex gap-34 pb-10">
          <LeftSide />
          <RightSide />
        </div>
      </div>
      <SimilarBots />
    </div>
  );
}

function Ref() {
  return (
    <a href="/catalog" className="pt-6 flex gap-2 items-center">
      <div className="text-secondary">
        <Icon icon="arrowLeft" />
      </div>
      <Typography className="text-header5 text-secondary">
        Смотреть все
      </Typography>
    </a>
  );
}

const reviews = [
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Алексей",
    company: "ООО «ТехноСофт»",
    grade: 4.5,
    createdDate: "2025-03-10",
    description:
      "Отличное обслуживание! Быстро помогли с настройкой продукта, поддержка работает на высшем уровне.",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Мария",
    company: "АО «Инновации Будущего»",
    grade: 5.0,
    createdDate: "2025-03-08",
    description:
      "Очень довольна! Продукт работает без сбоев, всё понятно и удобно. Буду рекомендовать коллегам.",
  },
];

function LeftSide() {
  return (
    <div className="flex flex-col gap-12 max-w-161">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-small text-input-label">ID 102</p>
          <Typography className="text-header1">
            Оптимизатор продаж для Битрикc24
          </Typography>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Typography className="text-very-small text-input-label">
              от
            </Typography>
            <Typography className="text-very-small text-secondary">
              Александр Селлеров
            </Typography>
            <Typography className="text-very-small text-input-label">
              версия 2.51, обновлено 3 дня назад
            </Typography>
          </div>
          <div className="flex gap-2">
            <Icon icon="download" size="12" className="text-input-label" />
            <Typography className="text-very-small text-input-label">
              10 354 установок
            </Typography>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div>
              <Button text="Купить" borderStyle="bold" color="blue" rounded />
            </div>
            <div className="flex gap-2">
              <ActionButton icon="playButton" color="blue" />
              <ActionButton icon="arrowReplace" color="blue" />
              <ActionButton icon="heart" color="pink" />
            </div>
          </div>
          <div className="flex gap-2 items-center py-[6px] px-4">
            <Icon icon="questionCircle" className="" size="20" />
            <Typography className="text-header5">Помощь по боту</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography className="text-header4">
            Простая оптимизация продаж и интеграция с Битрикс24
          </Typography>
          <div className="flex flex-col gap-6">
            <Typography className="text-normal text-tertiary">
              Устали от бесконечных файлов в эксель и проверять продажников,
              слушая их разговоры? Я тоже, поэтому придумал этого бота.
            </Typography>
            <Typography className="text-normal text-tertiary">
              Бот обучался на 200 000 пользователях ВКонтакте крупнейших
              пабликов по продаже одежды.
            </Typography>
            <Typography className="text-normal text-tertiary">
              Бот может сам продавать, допрадовать, запоминать корзину. <br />
              Всё это подтягивается в Битрикс24.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography className="text-header4">Что нового?</Typography>
          <Typography className="text-normal text-tertiary">
            Обновили API. Всё стало работать лучше.
          </Typography>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <Typography className="text-header3">Отзывы пользователей</Typography>
          <a href="/catalog" className="flex gap-2 items-center">
            <Typography className="text-header5 text-secondary">
              Смотреть все (34)
            </Typography>
            <div className="text-secondary">
              <Icon icon="arrowRight" />
            </div>
          </a>
        </div>
        <div className="flex items-center gap-4">
          {reviews.map((items, index) => (
            <ReviewCard
              key={index}
              avatarUrl={items.avatarUrl}
              name={items.name}
              company={items.company}
              grade={items.grade}
              createdDate={items.createdDate}
              description={items.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Typography className="text-header5">Стоимость</Typography>
        <Typography className="text-header2 text-green">Бесплатно</Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography className="text-header5">Оценка бота</Typography>
        <div className="flex gap-1 items-center">
          <Typography>4.1</Typography>
          <Star count={4} />
          <Typography className="text-[#9E9BB1] text-very-small pt-px">
            12 оценок
          </Typography>
        </div>
        <div className="text-secondary">
          <Button
            text="Оценить"
            borderStyle="thin"
            color="blue"
            leftElement={<Icon icon="starSmall" size="20" />}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Typography className="text-header5">Тип бота</Typography>
        <div className="flex gap-2 items-center">
          <Tag textTag="Текстовый бот" />
          <Tag textTag="Голосовой бот" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Typography className="text-header5">Сферы</Typography>
        <div className="flex flex-wrap gap-2 items-center">
          <Tag textTag="Банковская сфера" />
          <Tag textTag="Коллекторы" />
          <Tag textTag="Интернет-магазины" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Typography className="text-header5">Работает с</Typography>
        <div className="flex flex-col gap-2">
          <Socials label="Телеграм" leftElement={<Icon icon="telegram" />} />
          <Socials label="ВКонтакте" leftElement={<Icon icon="vk" />} />
          <Socials label="WhatsApp" leftElement={<Icon icon="whatsapp" />} />
          <Socials label="Viber" leftElement={<Icon icon="viber" />} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Typography className="text-header5">Теги</Typography>
        <div className="flex flex-wrap gap-2 items-center">
          <Tag textTag="Битрикс24" />
          <Tag textTag="Простота" />
          <Tag textTag="Компания" />
          <Tag textTag="Омниканальность" />
        </div>
      </div>
    </div>
  );
}

const cards: Array<{
  id: number;
  title: string;
  price?: number;
  rating: number;
  countReviews: number;
  description: string;
  tags: Array<string>;
  socials: Array<string>;
  type: "voice" | "text" | "template";
  isFavorite?: boolean;
}> = [
  {
    id: 102,
    title: "Оптимизатор продаж для Битрикс 24",
    price: 200,
    rating: 4.1,
    countReviews: 11,
    description: "Простая оптимизация продаж и интеграция с Битрикс24",
    tags: [
      "Текст",
      "Финтех",
      "Текст",
      "Финтех",
      "Текст",
      "Финтех",
      "Текст",
      "Финтех",
      "Текст",
      "Финтех",
    ],
    socials: [],
    type: "text",
  },
  {
    id: 103,
    title: "Оптимизатор продаж для Битрикс 24",
    rating: 4.1,
    countReviews: 11,
    description: "Простая оптимизация продаж и интеграция с Битрикс24",
    tags: ["Текст"],
    socials: [],
    type: "template",
  },
  {
    id: 104,
    title: "Оптимизатор продаж для Битрикс 24",
    rating: 4.1,
    countReviews: 11,
    description: "Простая оптимизация продаж и интеграция с Битрикс24",
    tags: [],
    socials: [],
    type: "voice",
    isFavorite: true,
  },
  {
    id: 102,
    title: "Оптимизатор продаж для Битрикс 24",
    price: 200,
    rating: 4.1,
    countReviews: 11,
    description: "Простая оптимизация продаж и интеграция с Битрикс24",
    tags: [
      "Текст",
      "Финтех",
      "Текст",
      "Финтех",
      "Текст",
      "Финтех",
      "Текст",
      "Финтех",
      "Текст",
      "Финтех",
    ],
    socials: [],
    type: "text",
  },
];

function SimilarBots() {
  return (
    <div className="bg-disabled px-16 pb-16">
      <Typography className="text-header3 py-6">Похожие боты</Typography>
      <div className="flex gap-4">
        {cards.map((item) => (
          <BotCard
            key={item.id}
            countReviews={item.countReviews}
            description={item.description}
            id={item.id}
            rating={item.rating}
            socials={item.socials}
            tags={item.tags}
            title={item.title}
            type={item.type}
            price={item.price}
            isFavorite={item.isFavorite}
          />
        ))}
      </div>
    </div>
  );
}
