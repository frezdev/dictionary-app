"use client"
import { useEffect, useState } from 'react'
import { ArrowDownIcon } from '@/components/Shared/Icons'

interface Props {
  fonts: string[]
}

export const FontSelect = ({ fonts }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  const handleTogle = () => setOpen(!open)

  const changeFont = (font: string) => {
    const html = document.querySelector('html')
    html?.setAttribute('style', `font-family: ${font}`)
    setSelectedFont(font)
  }

  const handleSelect = (font: string) => () => {
    changeFont(font)

    window.localStorage.setItem('font-family', font)
    handleTogle()
  }

  useEffect(() => {
    const font = window.localStorage.getItem('font-family')
    font && changeFont(font)
  }, [])

  return (
    <div className="text-gray-950 dark:text-gray-400_ flex items-center relative">
      <button onClick={handleTogle} className="flex items-center gap-2 cursor-pointer rounded-lg py-1 hover:opacity-75">
        <span className="font-bold text-zinc-900 dark:text-gray-300 ps-2">{selectedFont}</span>
        <span className="text-purple-600">
          <ArrowDownIcon />
        </span>
      </button>
      {open && (
        <div className="absolute w-40 h-fit grid justify-items-center bg-zinc-100 dark:bg-zinc-900 rounded-lg shadow-gray-500 dark:shadow-gray-400 shadow-sm top-[calc(100%+10px)] right-0">
          {fonts.map((font, index) => {
            const isLast = index < fonts.length - 1
            return (
              <div key={font} className='w-full flex flex-col items-center'>
                <button
                  onClick={handleSelect(font)}
                  key={font}
                  role='option'
                  aria-selected
                  className="gap-2 cursor-pointer text-center w-full hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg p-3"
                >
                  <span className="font-bold text-lg text-gray-700 dark:text-gray-400">{font}</span>
                </button>
                {isLast && <span className="border-b border-gray-200 dark:border-gray-600 w-[90%] block"></span>}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
