import { Definition } from "@/types";
import { Example } from "../Example";

interface Props {
  definitions: Definition[];
}

export const Meaning = ({ definitions }: Props) => {
  return (
    <div>
      <h4 className="text-gray-500 mb-5">Meaning</h4>
      <ul className="list-disc ps-8 grid gap-3">
        {definitions.map(def => (
          <div key={def.definition}>
            <li
              className="text-gray-800 marker:text-purple-500"
            >
              {def.definition}
            </li>
            {def.example && <Example key={def.example} text={def.example} />}
          </div>
        ))}
      </ul>
    </div>
  )
}
