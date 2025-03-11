import { ReactNode, useState } from "react";
import { Icon } from "./icon/Icon";
import { Typography } from "./Typography";
import clsx from "clsx";

interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export function Accordion({
  title,
  defaultOpen = false,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-4 border-b pb-4 border-[#E9E5F0]">
      <div className="flex gap-2 items-center justify-between">
        <Typography className="text-header5">{title}</Typography>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-6 h-6 justify-center flex items-center text-input-label"
        >
          <Icon icon={isOpen ? "minus" : "plus"} size="16" />
        </button>
      </div>
      {isOpen && <div className="">{children}</div>}
    </div>
  );
}
