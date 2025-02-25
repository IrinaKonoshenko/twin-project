import { Typography } from "./Typography";

export function OmnicanalitySection() {
  return (
    <section className="py-[70px] bg-[#F6F9FF]">
      <div className="container">
        <div className="flex gap-12 items-center">
          <div className="flex flex-col gap-[14px]">
            <div className="flex flex-col gap-[3px]">
              <Typography className="text-header4 text-secondary">
                Омниканальность
              </Typography>
              <Typography className="text-[32px] font-medium text-h leading-[39px]">
                Органичное общение во всех каналах коммуникации
              </Typography>
            </div>
            <Typography className="text-p text-text">
              Боты работают по сценариям и обмениваются информацией о клиенте —
              процесс становится цельным и автоматизированным. Поддержка
              звонков, соцсетей, мессенджеров, СМС и электронной почты.
            </Typography>
          </div>
          <div className="min-w-[513px]">
            <img src="/images/cross.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
