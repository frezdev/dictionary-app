'use client'
import { useAppSelector } from "@/redux/hooks"
import { Result } from "./Result"
import { Welcome } from "./Welcome"

export const MainSection = () => {
  const [word] = useAppSelector(state => state.wordReducer.word)

  return (
    <>
      {word
        ? <Result word={word} />
        : <Welcome />
      }
    </>
  )
}
