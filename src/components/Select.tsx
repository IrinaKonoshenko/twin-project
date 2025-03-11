import clsx from "clsx";
import { useState } from "react";
import { Icon } from "./icon/Icon";

interface SelectProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function Select({ options, defaultValue, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onChange?.(value);
  };

  return (
    <div className="relative z-20">
      <button
        className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm hover:bg-gray-100 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <Icon
          icon="caretDown"
          size="12"
          className={clsx("transition-transform", isOpen && "rotate-180")}
        />
      </button>
      {isOpen && (
        <ul className="absolute w-full mt-1 border border-gray-300 rounded-lg bg-white shadow-md z-10">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
