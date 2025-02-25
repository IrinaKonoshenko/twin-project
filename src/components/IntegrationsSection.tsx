import { Button } from "./Button";
import { Typography } from "./Typography";

export function IntegrationsSection() {
  return (
    <section className="bg-secondary">
      <div className="container flex gap-17">
        <div className="flex flex-col gap-10.5 max-w-[544px] pt-[153px]">
          <div className="flex flex-col gap-[14px] ">
            <div className="flex flex-col gap-[3px]">
              <Typography className="text-header4 text-white">
                Интеграции
              </Typography>
              <Typography className="text-[32px] font-medium text-white leading-[39px]">
                Подключайте ко всему
              </Typography>
            </div>
            <Typography className="text-p text-white">
              Платформа twin24 поддерживает интегрирации с большинством
              АТС-систем, CRM-систем (АМО, БИТРИКС, 1С, Мегаплан, Y-Clients) и
              Яндекс.Алисой. Для иных интеграций вы можете использовать
              документированное API.
            </Typography>
          </div>
          <div>
            <Button
              text="Документация API"
              color="white"
              borderStyle="bold"
              rounded
            />
          </div>
        </div>
        <div className="max-w-[484px]">
          <img src="/images/logocompanys.png" alt="" />
        </div>
      </div>
    </section>
  );
}
