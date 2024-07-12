interface Props {
  list: string[];
  name: string;
}
export const SemanticField = ({ list, name }: Props) => {
  return (
    <div className="flex gap-5 mt-7">
      <p className="text-gray-500 capitalize">{name}</p>
      <ul className="flex gap-7 flex-wrap list-disc ps-3">
        {list.map((text, index) => (
          <li
            key={`${text}_${index}`}
            className="marker:text-purple-500 text-purple-500 font-bold "
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}
