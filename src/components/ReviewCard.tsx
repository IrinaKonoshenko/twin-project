import { Icon } from "./icon/Icon";
import { Typography } from "./Typography";

interface ReviewCardProps {
  avatarUrl: string;
  name: string;
  company: string;
  grade: number;
  createdDate: string;
  description: string;
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

function truncateText(text: string, maxLength: number = 100) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export function ReviewCard({
  avatarUrl,
  name,
  company,
  grade,
  createdDate,
  description,
}: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-4 p-4 ring ring-[#E9E5F0] rounded-lg w-[314px] max-h-[193px]">
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 flex justify-center items-center rounded-full overflow-hidden">
          <img src={avatarUrl} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-header4">{name}</div>
          <div className="text-small text-tertiary">{company}</div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <div className="text-small text-input-label">{grade}</div>
              <Icon icon="starSmall" size="13" className="text-input-label" />
            </div>
            <div className="text-small text-input-label">{createdDate}</div>
          </div>
        </div>
      </div>
      <Typography className="text-normal">
        {truncateText(description, 85)}
      </Typography>
    </div>
  );
}
