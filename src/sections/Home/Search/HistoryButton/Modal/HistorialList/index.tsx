"use client"
import { HistoryIcon } from '@/components/Shared/Icons'
import { toggleModal } from '@/redux/features/modal/modalSlice'
import { setWord } from '@/redux/features/word/wordSlice'
import { useAppDispatch } from '@/redux/hooks'
import { WordServices } from '@/services/words'
import { HistorialItem } from '@/types'
import { date } from '@/utils/date'

interface Props {
  items: HistorialItem[]
}
export const HistorialList = ({ items }: Props) => {
  const dispatch = useAppDispatch()

  const handleClick = (word: string) => async () => {
    const [error, data] = await WordServices.getByQuery(word)
    if (error) return

    dispatch(setWord(data))
    dispatch(toggleModal())
  }

  items.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <ul className="max-h-[85%] overflow-y-scroll">
      {items.map((item) => (
        <li
          key={item.word}
          className="px-5 py-4 border-b border-zinc-200 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:border-zinc-700"
        >
          <article title='historial-item' onClick={handleClick(item.word)} className="flex items-center justify-between dark:text-zinc-300 text-lg font-semibold">
            <div className="flex items-center gap-2">
              <HistoryIcon width={20} height={20} />
              {item.word}
            </div>
            <div>
              <span className="text-sm italic font-normal">
                {date.day(item.date)} {' - '} {date.hour(item.date)}
              </span>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}
