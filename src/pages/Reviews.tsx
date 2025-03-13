import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Icon } from "../components/icon/Icon";
import { Radio } from "../components/Radio";
import { ReviewCard } from "../components/ReviewCard";
import { Stars } from "../components/Stars";
import { TruncatedText } from "../components/TruncatedText";
import { Typography } from "../components/Typography";
import { BackLink } from "../components/BackLink";

const reviews = [
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Алексей",
    company: "ООО «ТехноСофт»",
    grade: 4.5,
    createdDate: "2025-03-10",
    description:
      "Отличное обслуживание! Быстро помогли с настройкой продукта, поддержка работает на высшем уровне. Отличное обслуживание! Быстро помогли с настройкой продукта, поддержка работает на высшем уровне.Отличное обслуживание! Быстро помогли с настройкой продукта, поддержка работает на высшем уровне.Отличное обслуживание! Быстро помогли с настройкой продукта, поддержка работает на высшем уровне.Отличное обслуживание! Быстро помогли с настройкой продукта, поддержка работает на высшем уровне.Отличное обслуживание! Быстро помогли с настройкой продукта, поддержка работает на высшем уровне.Отличное обслуживание! Быстро помогли с настройкой продукта, поддержка работает на высшем уровне.",
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
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Дмитрий",
    company: "Частный предприниматель",
    grade: 3.8,
    createdDate: "2025-03-05",
    description:
      "В целом неплохо, но хотелось бы больше возможностей в настройках. Интерфейс удобный, но есть мелкие недочеты.",
  },
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
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Дмитрий",
    company: "Частный предприниматель",
    grade: 3.8,
    createdDate: "2025-03-05",
    description:
      "В целом неплохо, но хотелось бы больше возможностей в настройках. Интерфейс удобный, но есть мелкие недочеты.",
  },
];

export default function Review() {
  return (
    <div className="mt-21 pb-8">
      <div className="max-w-[1090px] mx-auto flex flex-col gap-8">
        <BackLink text="Оптимизатор продаж для Битрикс24" link="/bot" />
        <Typography className="text-header1">34 отзыва о боте</Typography>
        <div className="flex gap-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {reviews.map((items, index) => (
                <div className="w-[756px]">
                  <ReviewCard
                    key={index}
                    avatarUrl={items.avatarUrl}
                    name={items.name}
                    company={items.company}
                    grade={items.grade}
                    createdDate={items.createdDate}
                    description={
                      <TruncatedText text={items.description} maxWords={20} />
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-secondary">
              <Button
                text="Оставить отзыв"
                borderStyle="thin"
                color="blue"
                leftElement={<Icon icon="starSmall" size="20" />}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Typography className="text-header5">
                Фильтр по отзывам
              </Typography>
              <div className="flex flex-col gap-2">
                <Radio
                  value={false}
                  label="Выбор пользователей"
                  onChange={() => null}
                />
                <Radio
                  value={true}
                  label="Указать рейтинг"
                  onChange={() => null}
                />
                <div className="flex gap-2 items-center pt-px">
                  <Checkbox
                    value={true}
                    label={<Stars count={5} size={20} />}
                    onChange={() => null}
                  />
                  <Typography className="text-small text-input-label">
                    415 оценок
                  </Typography>
                </div>
                <div className="flex gap-2 items-center pt-px">
                  <Checkbox
                    value={true}
                    label={<Stars count={4} size={20} />}
                    onChange={() => null}
                  />
                  <Typography className="text-small text-input-label">
                    25 оценок
                  </Typography>
                </div>
                <div className="flex gap-2 items-center pt-px">
                  <Checkbox
                    value={false}
                    label={<Stars count={3} size={20} />}
                    onChange={() => null}
                  />
                  <Typography className="text-small text-input-label">
                    2 оценки
                  </Typography>
                </div>
                <div className="flex gap-2 items-center pt-px">
                  <Checkbox
                    value={false}
                    label={<Stars count={2} size={20} />}
                    onChange={() => null}
                  />
                  <Typography className="text-small text-input-label">
                    0 оценок
                  </Typography>
                </div>
                <div className="flex gap-2 items-center pt-px">
                  <Checkbox
                    value={false}
                    label={<Stars count={1} size={20} />}
                    onChange={() => null}
                  />
                  <Typography className="text-small text-input-label">
                    3 оценки
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
