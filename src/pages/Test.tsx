import { Accordion } from "../components/Accordion";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Chip } from "../components/Chip";
import { Icon } from "../components/icon/Icon";
import { Input } from "../components/Input";
import { Radio } from "../components/Radio";
import { Tag } from "../components/Tag";
import { Textarea } from "../components/Textarea";

export default function Test() {
  return (
    <div className="flex flex-col gap-10 ">
      {/* заголовки */}
      <div>
        <h1 className="text-header1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nisi.
        </h1>
        <h2 className="text-header2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nisi.
        </h2>
        <h3 className="text-header3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nisi.
        </h3>
        <h4 className="text-header4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nisi.
        </h4>
        <h5 className="text-header5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nisi.
        </h5>
        <h6 className="text-header6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nisi.
        </h6>
        <h6 className="text-header7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nisi.
        </h6>
      </div>
      {/* Checkbox */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <Checkbox value={true} label="aaaaaa" onChange={() => null} />
        <Checkbox value={false} label="aaaaaa" onChange={() => null} />

        <Checkbox value={true} label="aaaaaa" disabled onChange={() => null} />
        <Checkbox value={false} label="aaaaaa" disabled onChange={() => null} />

        <Checkbox value={false} label="aaaaaa" invalid onChange={() => null} />
      </div>
      {/* Radio */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <Radio value={true} label="aaaaaa" onChange={() => null} />
        <Radio value={false} label="aaaaaa" onChange={() => null} />

        <Radio value={true} label="aaaaaa" disabled onChange={() => null} />
        <Radio value={false} label="aaaaaa" disabled onChange={() => null} />

        <Radio value={false} label="aaaaaa" invalid onChange={() => null} />
      </div>
      {/* Chip */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <Chip value={true} label="Включено" onChange={() => null} />
        <Chip value={false} label="Отключено" onChange={() => null} />

        <Chip value={true} label="Включено" disabled onChange={() => null} />
        <Chip value={false} label="Отключено" disabled onChange={() => null} />

        <Chip value={false} label="Отключено" invalid onChange={() => null} />
      </div>
      {/* Input */}
      <div className="flex flex-wrap justify-center gap-10">
        <Input placeholder="текст" value="ааааа" />
        <Input placeholder="текст" value="ааааа" label="название" />
        <Input placeholder="текст" value="ааааа" label="название" error />
        <Input
          placeholder="текст"
          value="ааааа"
          label="название"
          error="валидация"
        />
        <Input placeholder="текст" value="ааааа" disabled={true} />
        <Input
          placeholder="текст"
          value="ааааа"
          label="название"
          disabled={true}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <Input
          elementLeft={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
        />
        <Input
          elementLeft={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          label="название"
        />
        <Input
          elementLeft={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          label="название"
          error
        />
        <Input
          elementLeft={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          label="название"
          error="валидация"
        />
        <Input
          elementLeft={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          disabled={true}
        />
        <Input
          elementLeft={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          label="название"
          disabled={true}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <Input
          elementRight={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
        />
        <Input
          elementRight={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          label="название"
        />
        <Input
          elementRight={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          label="название"
          error
        />
        <Input
          elementRight={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          label="название"
          error="валидация"
        />
        <Input
          elementRight={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          disabled={true}
        />
        <Input
          elementRight={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          label="название"
          disabled={true}
        />
      </div>
      {/* Textarea */}
      <div className="flex flex-wrap justify-center gap-10">
        <Textarea
          elementRight={<Icon icon="facebook" />}
          placeholder="текст"
          value="ааааа"
        />
        <Textarea
          elementRight={<Icon icon="whatsapp" />}
          placeholder="текст"
          value="ааааа"
          label="название"
        />
        <Textarea
          elementRight={<Icon icon="viber" />}
          placeholder="текст"
          value="ааааа"
          label="название"
          error
        />
        <Textarea
          elementRight={<Icon icon="vk" />}
          placeholder="текст"
          value="ааааа"
          label="название"
          error="валидация"
        />
        <Textarea
          elementRight={<Icon icon="telegram" />}
          placeholder="текст"
          value="ааааа"
          disabled={true}
        />
        <Textarea
          elementRight={<Icon icon="check" />}
          placeholder="текст"
          value="ааааа"
          label="название"
          disabled={true}
        />
      </div>
      {/* Tag */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <Tag textTag="AMO" onClick={() => null} />
        <Tag textTag="Битрикс24" onClickRemove={() => null} />
        <Tag textTag="Компания" onClickRemove={() => null} />
        <Tag textTag="Битрикс24" onClickRemove={() => null} disabled />
      </div>
      {/* Button */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <div className="container flex flex-col gap-5">
          <div className="flex gap-5">
            <Button rounded color="blue" borderStyle="no" text="Начать" />
            <Button rounded color="blue" borderStyle="thin" text="Начать" />
            <Button rounded color="blue" borderStyle="bold" text="Начать" />
            <Button
              rounded
              color="blue"
              disabled
              borderStyle="bold"
              text="Начать"
            />
            <Button rounded color="blue" filled text="Начать1" />
            <Button rounded color="blue" disabled filled text="Начать1" />
            <Button color="blue" filled text="Начать1" />
            <div className="text-secondary">
              <Button
                rounded
                borderStyle="bold"
                color="blue"
                leftElement={<Icon icon="plus" />}
                text="Начать"
              />
            </div>
            <Button
              rounded
              borderStyle="bold"
              color="blue"
              rightElement={<Icon icon="check" />}
              text="Начать"
            />
            <div className="text-secondary">
              <Button
                rounded
                borderStyle="bold"
                color="blue"
                leftElement={<Icon icon="plus" />}
                text="Начать"
                filled
              />
            </div>
            <Button
              rounded
              borderStyle="bold"
              color="blue"
              rightElement={<Icon icon="check" />}
              text="Начать"
              filled
            />
          </div>
          <div className="flex gap-5">
            <Button rounded color="green" borderStyle="no" text="Начать" />
            <Button rounded color="green" borderStyle="thin" text="Начать" />
            <Button rounded color="green" borderStyle="bold" text="Начать" />
            <Button
              rounded
              color="green"
              disabled
              borderStyle="bold"
              text="Начать"
            />
            <Button rounded color="green" filled text="Начать1" />
            <Button rounded color="green" disabled filled text="Начать1" />
            <Button color="green" filled text="Начать1" />
            <Button
              rounded
              borderStyle="bold"
              color="green"
              leftElement={<Icon icon="check" />}
              text="Начать"
            />
            <Button
              rounded
              borderStyle="bold"
              color="green"
              rightElement={<Icon icon="check" />}
              text="Начать"
            />

            <Button
              rounded
              borderStyle="bold"
              color="green"
              leftElement={<Icon icon="check" />}
              text="Начать"
              filled
            />
            <Button
              rounded
              borderStyle="bold"
              color="green"
              rightElement={<Icon icon="check" />}
              text="Начать"
              filled
            />
          </div>
        </div>
      </div>
      {/* Accordion */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <Accordion title="Тип бота">
          <div className="flex flex-col gap-2">
            <Checkbox label="Exadasdad" value={true} onChange={() => null} />
            <Checkbox label="Exadasdad" value={false} onChange={() => null} />
            <Checkbox label="Exadasdad" value={true} onChange={() => null} />
            <Checkbox label="Exadasdad" value={true} onChange={() => null} />
          </div>
        </Accordion>
      </div>
    </div>
  );
}
