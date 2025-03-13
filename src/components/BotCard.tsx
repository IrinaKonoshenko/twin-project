import { Link } from "react-router-dom";
import { ActionButton } from "./ActionButton";
import { Button } from "./Button";
import { Icon } from "./icon/Icon";
import { Stars } from "./Stars";
import { Tag } from "./Tag";
import { Typography } from "./Typography";

interface BotCardProps {
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
}

export function BotCard({
  id,
  title,
  price,
  rating,
  countReviews,
  description,
  tags,
  socials,
  type,
  isFavorite,
}: BotCardProps) {
  return (
    <div className="relative flex flex-col gap-4 ring ring-border-off rounded-lg pt-3 px-4 pb-4 bg-white">
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <div className="flex flex-col">
            <p className="text-small text-input-label">ID {id}</p>
            <Typography className="text-header4">{title}</Typography>
          </div>
          <div className="min-w-8 h-16">
            {type === "text" && <Icon icon="textBot" size="32" />}
            {type === "voice" && <Icon icon="voiceBot" size="32" />}
            {type === "template" && <Icon icon="templateBot" size="32" />}
          </div>
        </div>
        <div className="flex flex-col">
          {price ? (
            <div className="flex gap-1">
              <p className="text-header2 text-green">{price}</p>
              <p className="text-header2 text-green">₽</p>
            </div>
          ) : (
            <p className="text-header2 text-green">Бесплатно</p>
          )}
          <div className="flex gap-1 items-center">
            <Typography>{rating}</Typography>
            <Stars count={4} />
            <Typography className="text-[#9E9BB1] text-small pt-px">
              ({countReviews})
            </Typography>
          </div>
        </div>
        <div>{description}</div>
      </div>
      <div className="flex flex-col gap-2 h-[125px]">
        {tags.length > 0 && ( /// Если теги есть
          <>
            <p className="text-very-small text-input-label">Теги и сферы</p>
            <div className="flex gap-1 flex-wrap">
              {tags.slice(0, 5).map((item, key) => (
                <Tag key={key} textTag={item} />
              ))}
              {tags.length > 4 && <Tag textTag={`+${tags.length - 5}`} />}
            </div>
          </>
        )}
      </div>
      <div className="flex gap-1">
        <a href="" className="w-6 h-6 flex justify-center items-center">
          <Icon icon="telegram" size="21" />
        </a>
        <a href="" className="w-6 h-6 flex justify-center items-center">
          <Icon icon="whatsapp" size="21" />
        </a>
        <a href="" className="w-6 h-6 flex justify-center items-center">
          <Icon icon="viber" size="21" />
        </a>
        <a href="" className="w-6 h-6 flex justify-center items-center">
          <Icon icon="facebook" size="21" />
        </a>
      </div>
      <div className="h-[1px] bg-[#E9E5F0]"></div>
      <div className="flex justify-between items-center">
        <div>
          <Button text="Купить" borderStyle="bold" color="blue" rounded />
        </div>
        <div className="flex gap-2">
          <ActionButton icon="playButton" color="blue" />
          <ActionButton icon="arrowReplace" color="blue" />
          <ActionButton icon="heart" color={isFavorite ? "pink" : "grey"} />
        </div>
      </div>
      <Link to="/bot" className="absolute inset-0 z-10" />
    </div>
  );
}
