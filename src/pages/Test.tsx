import { Checkbox } from "../components/Checkbox";
import { Chip } from "../components/Chip";
import { Radio } from "../components/Radio";

export default function Test() {
  return (
    <div className="flex flex-col gap-10 ">
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
      <div className="flex flex-wrap justify-center items-center gap-10">
        <Checkbox value={true} label="aaaaaa" onChange={() => null} />
        <Checkbox value={false} label="aaaaaa" onChange={() => null} />

        <Checkbox value={true} label="aaaaaa" disabled onChange={() => null} />
        <Checkbox value={false} label="aaaaaa" disabled onChange={() => null} />

        <Checkbox value={false} label="aaaaaa" invalid onChange={() => null} />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10">
        <Radio value={true} label="aaaaaa" onChange={() => null} />
        <Radio value={false} label="aaaaaa" onChange={() => null} />

        <Radio value={true} label="aaaaaa" disabled onChange={() => null} />
        <Radio value={false} label="aaaaaa" disabled onChange={() => null} />

        <Radio value={false} label="aaaaaa" invalid onChange={() => null} />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10">
        <Chip value={true} label="Включено" onChange={() => null} />
        <Chip value={false} label="Отключено" onChange={() => null} />

        <Chip value={true} label="Включено" disabled onChange={() => null} />
        <Chip value={false} label="Отключено" disabled onChange={() => null} />

        <Chip value={false} label="Отключено" invalid onChange={() => null} />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
