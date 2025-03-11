import { Accordion } from "../components/Accordion";
import { BotCard } from "../components/BotCard";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Icon } from "../components/icon/Icon";
import { Input } from "../components/Input";
import { Radio } from "../components/Radio";
import { Star } from "../components/Stars";
import { Tag } from "../components/Tag";
import { Typography } from "../components/Typography";

export default function Catalog() {
  return (
    <div className="mt-21">
      <div className="max-w-[1312px] mx-auto flex gap-6 pt-6">
        <div className="w-[260px] shrink-0">
          <LeftSide />
        </div>
        <div className="grow">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="flex flex-col gap-4">
      <Accordion title="Тип бота" defaultOpen>
        <div className="flex flex-col gap-2">
          <Checkbox label="Все" value={true} onChange={() => null} />
          <Checkbox label="Голосовые боты" value={true} onChange={() => null} />
          <Checkbox label="Текстовые боты" value={true} onChange={() => null} />
          <Checkbox label="Шаблоны" value={true} onChange={() => null} />
        </div>
      </Accordion>
      <Accordion title="Сферы" defaultOpen>
        <div className="flex flex-col gap-2">
          <Checkbox
            label="Транспортные услуги"
            value={true}
            onChange={() => null}
          />
          <Checkbox
            label="Банковская сфера"
            value={true}
            onChange={() => null}
          />
          <Checkbox label="Страхование" value={true} onChange={() => null} />
          <Checkbox
            label="Интернет-магазины"
            value={true}
            onChange={() => null}
          />
          <Checkbox label="Коллекторы" value={true} onChange={() => null} />
          <Checkbox
            label="HR/Подбор персонала"
            value={false}
            onChange={() => null}
          />
          <Checkbox
            label="Анкетирование/Опросы"
            value={false}
            onChange={() => null}
          />
          <Checkbox label="Продажи" value={false} onChange={() => null} />
          <Checkbox label="Туризм" value={false} onChange={() => null} />
          <Checkbox label="Медицина" value={false} onChange={() => null} />
          <Checkbox label="Ритейл" value={false} onChange={() => null} />
          <Checkbox label="Другое" value={false} onChange={() => null} />
        </div>
      </Accordion>
      <Accordion title="Задачи" defaultOpen>
        <div className="flex flex-col gap-2">
          <Checkbox label="Лидогенерация" value={true} onChange={() => null} />
          <Checkbox label="Информирование" value={true} onChange={() => null} />
          <Checkbox label="NPS-опросы" value={true} onChange={() => null} />
          <Checkbox
            label="Интернет-магазины"
            value={true}
            onChange={() => null}
          />
          <Checkbox label="Бот-коллектор" value={true} onChange={() => null} />
        </div>
      </Accordion>
      <Accordion title="Языки" defaultOpen>
        <div className="flex flex-col gap-2">
          <Checkbox label="Русский" value={true} onChange={() => null} />
          <Checkbox label="English" value={true} onChange={() => null} />
          <Checkbox label="Tiếng Việt" value={true} onChange={() => null} />
          <Checkbox label="中文" value={true} onChange={() => null} />
          <Checkbox label="Казақ тілі" value={true} onChange={() => null} />
          <Checkbox label="Ўзбек тили" value={true} onChange={() => null} />
          <Checkbox label="ქართული ენა" value={true} onChange={() => null} />
        </div>
      </Accordion>
      <Accordion title="Цена" defaultOpen>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <p className="text-small text-input-label">От</p>
            <Input placeholder="0 ₽" value="" />
            <p className="text-small text-input-label">До</p>
            <Input placeholder="4 256 ₽" value="" />
          </div>
          <Radio value={false} label="Сначала дешёвые" onChange={() => null} />
          <Radio value={false} label="Сначала дорогие" onChange={() => null} />
          <Radio value={true} label="Неважно" onChange={() => null} />
        </div>
      </Accordion>
      <Accordion title="Рейтинг" defaultOpen>
        <div className="flex flex-col gap-2">
          <Radio
            value={false}
            label="Выбор пользователей"
            onChange={() => null}
          />
          <Radio value={true} label="Указать рейтинг" onChange={() => null} />
          <div className="flex gap-2 items-center">
            <p className="text-small text-input-label pt-px">От</p>
            <Star count={4} />
          </div>
        </div>
      </Accordion>
      <Accordion title="Дата" defaultOpen>
        <div className="flex flex-col gap-2">
          <Radio value={true} label="Сначала новые" onChange={() => null} />
          <Radio value={false} label="Сначала старые" onChange={() => null} />
          <Radio value={false} label="Диапазон дат" onChange={() => null} />
          <div className="flex gap-2 items-center ">
            <Input
              placeholder="дд.мм.гггг"
              value=""
              elementLeft={<Icon icon="calendar" size="17" />}
            />
            <Input
              placeholder="дд.мм.гггг"
              value=""
              elementLeft={<Icon icon="calendar" size="17" />}
            />
          </div>
        </div>
      </Accordion>
      <Accordion title="Каналы" defaultOpen>
        <div className="flex flex-col gap-2">
          <Checkbox label="Чат" value={true} onChange={() => null} />
          <Checkbox label="Телеграм" value={true} onChange={() => null} />
          <Checkbox label="ВКонтакте" value={true} onChange={() => null} />
          <Checkbox label="WhatsApp" value={true} onChange={() => null} />
          <Checkbox label="Viber" value={false} onChange={() => null} />
          <Checkbox label="Slack" value={false} onChange={() => null} />
          <Checkbox label="Skype" value={false} onChange={() => null} />
          <Checkbox label="Алиса" value={false} onChange={() => null} />
          <Checkbox label="WeСhat" value={false} onChange={() => null} />
        </div>
      </Accordion>
      <Accordion title="Популярные теги" defaultOpen>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 flex-wrap">
            <Tag textTag="Битрикс24" onClickRemove={() => null} />
            <Tag textTag="AMO" onClickRemove={() => null} />
            <Tag textTag="Допродажи" onClickRemove={() => null} />
            <Tag textTag="Гифки" onClickRemove={() => null} />
            <Tag textTag="Омниканальность" onClickRemove={() => null} />
            <Tag textTag="Простота" onClickRemove={() => null} />
            <Tag textTag="Компания" onClickRemove={() => null} />
            <Tag textTag="Покупатель" onClickRemove={() => null} />
            <Tag textTag="Товар" onClickRemove={() => null} />
            <Tag textTag="Оплата" onClickRemove={() => null} />
            <Tag textTag="Позвонить" onClickRemove={() => null} />
            <Tag textTag="Накладная" onClickRemove={() => null} />
            <Tag textTag="Трек-номер" onClickRemove={() => null} />
          </div>
          <div>
            <Button
              text="Показать еще"
              borderStyle="thin"
              color="blue"
              rounded
            />
          </div>
        </div>
      </Accordion>
      <div>
        <Button text="Отменить фильтры" borderStyle="thin" color="blue" />
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
];

function RightSide() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Typography className="text-header3">Показано ботов</Typography>
          <p className="text-small text-input-label">108</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Tag textTag="Сперва дешевле" onClickRemove={() => null} />
          <Tag textTag="Сначала новые" onClickRemove={() => null} />
          <Tag textTag="Рейтинг от 4" onClickRemove={() => null} />
          <Tag textTag="Транспортные услуги" onClickRemove={() => null} />
          <Tag textTag="Банковская сфера" onClickRemove={() => null} />
          <Tag textTag="Страхование" onClickRemove={() => null} />
          <Tag textTag="Интернет-магазины" onClickRemove={() => null} />
          <Tag textTag="Коллекторы" onClickRemove={() => null} />
          <Tag textTag="Телеграм" onClickRemove={() => null} />
          <Tag textTag="Вконтакте" onClickRemove={() => null} />
          <Tag textTag="WhatsApp" onClickRemove={() => null} />
          <Tag textTag="Битрикс24" onClickRemove={() => null} />
          <Tag textTag="AMO" onClickRemove={() => null} />
          <Tag textTag="Допродажи" onClickRemove={() => null} />
          <Tag textTag="Гифки" onClickRemove={() => null} />
          <Tag textTag="Омниканальность" onClickRemove={() => null} />
          <Tag textTag="Простота" onClickRemove={() => null} />
          <Tag textTag="Компания" onClickRemove={() => null} />
          <Tag textTag="Покупатель" onClickRemove={() => null} />
          <Tag textTag="Товар" onClickRemove={() => null} />
          <Tag textTag="Оплата" onClickRemove={() => null} />
          <Tag textTag="Позвонить" onClickRemove={() => null} />
          <Tag textTag="Накладная" onClickRemove={() => null} />
          <Tag textTag="Трек-номер" onClickRemove={() => null} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
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
