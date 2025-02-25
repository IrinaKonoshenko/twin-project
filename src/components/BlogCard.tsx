import { useMemo } from "react";
import {
  parseISO,
  format,
  differenceInHours,
  differenceInMinutes,
  isToday,
} from "date-fns";
import { Status } from "./Status";

interface BlogCardProps {
  img: string;
  title: string;
  description: string;
  createdDate: string;
  status?: "active" | "draft";
}

export function BlogCard({
  img,
  title,
  description,
  createdDate,
  status,
}: BlogCardProps) {
  const realDate = useMemo(() => {
    const date = parseISO(createdDate);

    if (isToday(date)) {
      const minutesAgo = differenceInMinutes(new Date(), date);
      if (minutesAgo < 60) {
        return `${minutesAgo} минут назад`;
      }
      const hoursAgo = differenceInHours(new Date(), date);
      return `${hoursAgo} часов ${minutesAgo % 60} минут назад`;
    }

    return format(date, "dd.MM.yyyy");
  }, [createdDate]);

  return (
    <div className="flex flex-col ring ring-border-off rounded-lg overflow-hidden h-120">
      <div className="flex justify-center items-center overflow-hidden h-60 shrink-0">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="flex flex-col gap-2 pt-4 px-6 pb-6 justify-between flex-grow border-t border-t-border-off">
        <div className="flex flex-col gap-2">
          <div className="text-header4">{title}</div>
          <div className="text-normal text-description">{description}</div>
        </div>
        <div className="flex justify-between items-center">
          <div>{realDate}</div>
          <div>
            <StatusProvider status={status} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatusProvider({
  status,
}: {
  status: BlogCardProps["status"];
}) {
  if (status === "active") {
    return <Status text="Active" color="green" />;
  }

  if (status === "draft") {
    return <Status text="Draft" color="red" />;
  }

  return null;
}

/// Если дата = сегодняшний день - то выводим n часов n минут назад
// Если дата < часа назад - выводим только n минут назад
// в остальных случаях - выводим DD.MM.YYYY
// useMemo, и

// parseIso, format, getDay - date fns
// const currentTime = new Date();
//
