import { SwitchToggle } from './SwitchToggle'
import { FontSelect } from './FontSelect'
import { BookThinIcon } from '../Icons'

export const Header = () => {
  return (
    <header className="py-5 flex justify-between items-center">
      <span className="text-gray-500 dark:text-gray-300">
        <BookThinIcon width={40} height={40} />
      </span>
      <div className='flex items-center justify-between'>
        <FontSelect fonts={['serif', 'sans-serif', 'monospace']} />
        <span aria-label='separator' className="w-[1px] h-8 mx-3 bg-slate-300"></span>
        <SwitchToggle />
      </div>
    </header>
  )
}
