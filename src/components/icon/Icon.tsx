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
import ArrowLeft from "./assets/arrow-left.svg?react";
import Eye from "./assets/eye.svg?react";
import Calendar from "./assets/calendar.svg?react";
import Time from "./assets/time.svg?react";
import Odnoklassniki from "./assets/socials/odnoklassniki.svg?react";
import Mail from "./assets/mail.svg?react";
import Share from "./assets/share.svg?react";
import ArrowRight from "./assets/arrow-right.svg?react";
import Minus from "./assets/minus.svg?react";
import StarSmall from "./assets/star-small.svg?react";
import TextDot from "./assets/type-bot/text-bot.svg?react";
import VoiceBot from "./assets/type-bot/voice-bot.svg?react";
import TemplateBot from "./assets/type-bot/template-bot.svg?react";
import ArrowReplace from "./assets/arrow-replace.svg?react";
import Heart from "./assets/heart.svg?react";
import PlayButton from "./assets/play-button.svg?react";
import Download from "./assets/download.svg?react";
import QuestionCircle from "./assets/question-circle.svg?react";

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
  arrowLeft: ArrowLeft,
  eye: Eye,
  calendar: Calendar,
  time: Time,
  odnoklassniki: Odnoklassniki,
  mail: Mail,
  share: Share,
  arrowRight: ArrowRight,
  minus: Minus,
  starSmall: StarSmall,
  textBot: TextDot,
  voiceBot: VoiceBot,
  templateBot: TemplateBot,
  arrowReplace: ArrowReplace,
  heart: Heart,
  playButton: PlayButton,
  download: Download,
  questionCircle: QuestionCircle,
} as const;

export type IconName = keyof typeof ICON_LIST;

export interface IconProps {
  icon: IconName;
  size?: string | number;
  className?: string;
}

export function Icon({ icon, className, size = "24" }: IconProps) {
  const IconComponent = ICON_LIST[icon];

  return <IconComponent className={className} width={size} height={size} />;
}
