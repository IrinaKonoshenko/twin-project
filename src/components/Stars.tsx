import clsx from "clsx";
import { Icon } from "./icon/Icon";

interface StarProps {
  count: number;
}

export function Star({ count }: StarProps) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="flex items-center justify-center w-6 h-6">
          <Icon
            key={index}
            icon="starSmall"
            size="20"
            className={clsx({
              "text-[#E5A831]": index < count,
              "text-[#DCD8E3]": index >= count,
            })}
          />
        </div>
      ))}
    </div>
  );
}
