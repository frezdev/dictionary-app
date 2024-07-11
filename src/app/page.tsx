import { Search } from "@/sections/Home/Search";
import { Result } from "@/sections/Home/Result";

export default function Home() {
  return (
    <main className="grid pb-8 sm:mt-3">
      <Search />
      <Result />
    </main>
  );
}


