import { BackLink } from "../components/BackLink";
import { Button } from "../components/Button";
import { Icon } from "../components/icon/Icon";
import { Input } from "../components/Input";
import { Stars } from "../components/Stars";
import { Textarea } from "../components/Textarea";
import { Typography } from "../components/Typography";

export default function ReviewNew() {
  return (
    <div className="mt-21 pb-[239px]">
      <div className="max-w-[1090px] mx-auto flex flex-col gap-8">
        <div className="flex justify-between items-center pt-6">
          <BackLink link="/bot" text="Оптимизатор продаж для Битрикс24" />
          <div className="p-2">
            <Button
              text="Закрыть"
              borderStyle="no"
              leftElement={<Icon icon="cross" size={14} />}
            />
          </div>
        </div>
        <Typography className="text-header1">
          Оптимизатор продаж для Битрикc24
        </Typography>
        <div className="w-161 mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Typography className="text-header3">Оценка</Typography>
            <Stars
              count={0}
              size={52}
              variant="big"
              interactive
              onChange={(value) => console.log("Выбран рейтинг:", value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography className="text-header3">Отзыв</Typography>
            <Typography className="text-normal text-tertiary">
              Необязательно, но будет здорово, если напишите: это поможет другим
            </Typography>
          </div>
          <div className="flex gap-4 items-center">
            <Input value="" label="Ваше имя" onChange={() => null} />
            <Input value="" label="Организация" onChange={() => null} />
          </div>
          <Textarea
            placeholder="Ваш отзыв"
            value=""
            onChange={() => null}
            rows={7}
          />
          <div>
            <Button text="Отправить отзыв" borderStyle="thin" color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
}
