import Check from "./assets/check.svg?react";

const ICON_LIST = {
  check: Check,
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
