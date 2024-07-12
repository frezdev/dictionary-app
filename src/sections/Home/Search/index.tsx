import { HistoryButton } from './HistoryButton'
import { SearchForm } from './SearchForm'

export const Search = () => {
  return (
    <section className='flex items-center w-full gap-3'>
      <SearchForm />
      <HistoryButton />
    </section>
  )
}
