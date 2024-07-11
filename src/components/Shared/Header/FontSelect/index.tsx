"use client"
import { useState } from 'react'
import { ArrowDownIcon } from '@/components/Shared/Icons'

interface Props {
  fonts: string[]
}

export const FontSelect = ({ fonts }: Props) => {
  const [open, setOpen] = useState(false);

  const handleTogle = () => setOpen(!open)

  const handleSelect = () => {
    handleTogle()
  }
  return (
    <div className="text-gray-950 dark:text-gray-400_ flex items-center relative">
      <button onClick={handleTogle} className="flex items-center gap-2 cursor-pointer rounded-lg py-1 hover:bg-purple-200">
        <span className="font-bold ps-2">{'Serif'}</span>
        <span className="text-purple-600">
          <ArrowDownIcon />
        </span>
      </button>
      {open && (
        <div className="absolute w-40 h-fit p-2 grid justify-items-center bg-white rounded-lg shadow-gray-500 shadow-sm top-[calc(100%+10px)] right-0">
          {fonts.map((font, index) => (
            <>
              <button onClick={handleSelect} key={font} role='option' aria-selected className="gap-2 cursor-pointer text-center w-full hover:bg-gray-100 rounded-lg p-3">
                <span className="font-bold text-lg text-gray-700">{font}</span>
              </button>
              {(index < fonts.length - 1) && <span className="border-b border-gray-200 w-[90%] block"></span>}
            </>
          ))}
        </div>
      )}
    </div>
  )
}
