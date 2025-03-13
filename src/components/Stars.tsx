import clsx from "clsx";
import { Icon } from "./icon/Icon";
import { useState } from "react";

interface StarsProps {
  count: number;
  size?: number;
  variant?: "small" | "big";
  interactive?: boolean; // Новый проп для интерактивности
  onChange?: (value: number) => void; // Колбэк для клика по звезде
}

export function Stars({
  count,
  size,
  variant = "small",
  interactive = false,
  onChange,
}: StarsProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number>(count);

  const handleClick = (index: number) => {
    if (interactive) {
      setSelected(index + 1);
      onChange?.(index + 1);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (interactive) {
      setHovered(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHovered(null);
    }
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={clsx("flex items-center justify-center cursor-pointer", {
            "w-6 h-6": variant === "small",
            "w-16 h-16": variant === "big",
          })}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon="starSmall"
            size={size}
            className={clsx({
              "text-[#E5A831]": interactive
                ? index < (hovered ?? selected)
                : index < count,
              "text-[#DCD8E3]": interactive
                ? index >= (hovered ?? selected)
                : index >= count,
            })}
          />
        </div>
      ))}
    </div>
  );
}
