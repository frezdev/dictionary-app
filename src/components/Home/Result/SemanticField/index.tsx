interface Props {
  list: string[];
  name: string;
}
export const SemanticField = ({ list, name }: Props) => {
  return (
    <div className="flex gap-5 mt-7">
      <p className="text-gray-500 capitalize">{name}</p>
      <ul className="flex gap-3">
        {list.map(text => (
          <li key={text} className="text-purple-500 font-bold">
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}
