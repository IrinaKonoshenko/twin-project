import Check from "./assets/check.svg?react";
import Cross from "./assets/cross.svg?react";
import Facebook from "./assets/socials/facebook.svg?react";
import Play from "./assets/play.svg?react";
import Plus from "./assets/plus.svg?react";
import Star from "./assets/star.svg?react";
import Viber from "./assets/socials/viber.svg?react";
import Vk from "./assets/socials/vk.svg?react";
import Whatsapp from "./assets/socials/whatsapp.svg?react";
import Telegram from "./assets/socials/telegram.svg?react";
import ChevronDown from "./assets/chevron-down.svg?react";
import CaretDown from "./assets/caret-down.svg?react";
import Picture from "./assets/picture.svg?react";
import Search from "./assets/search.svg?react";

const ICON_LIST = {
  check: Check,
  cross: Cross,
  facebook: Facebook,
  play: Play,
  plus: Plus,
  star: Star,
  viber: Viber,
  vk: Vk,
  whatsapp: Whatsapp,
  telegram: Telegram,
  chevronDown: ChevronDown,
  caretDown: CaretDown,
  picture: Picture,
  search: Search,
} as const;

export type IconName = keyof typeof ICON_LIST;

export interface IconProps {
  icon: IconName;
  size?: string;
  className?: string;
}

export function Icon({ icon, className, size = "24" }: IconProps) {
  const IconComponent = ICON_LIST[icon];

  return <IconComponent className={className} width={size} height={size} />;
}
