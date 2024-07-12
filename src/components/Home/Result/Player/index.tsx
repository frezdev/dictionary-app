"use client"
import { useRef } from 'react'
import { PlayArrowIcon } from "@/components/Shared/Icons"

interface Props {
  audio: string;
}
export const Player = ({ audio }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlay = () => {
    if (audioRef.current && audio) {
      audioRef.current.play()
    }
  }


  return (
    <section className="flex items-center">
      <button onClick={handlePlay} className="text-purple-500 dark:text-purple-800 bg-purple-200 dark:bg-purple-300 p-4 rounded-full hover:opacity-70">
        <PlayArrowIcon width={30} height={30} />
      </button>
      <audio ref={audioRef} src={audio} className="hidden" />
    </section>
  )
}
