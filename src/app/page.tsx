import { MainSection } from "@/sections/Home/MainSection";
import { Search } from "@/sections/Home/Search";


export default function Home() {
  return (
    <main className="grid pb-8 sm:mt-3">
      <Search />
      <MainSection />
    </main>
  );
}


