import { SearchIcon } from "@/components/Shared/Icons"

export const Search = () => {
  return (
    <form className="bg-gray-100 rounded-xl px-4 py-3 flex">
      <input type="text" className="bg-transparent outline-none w-full text-xl" placeholder="Search..." />
      <button className="text-purple-500 p-1">
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  )
}