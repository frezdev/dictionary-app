import { PartOfSpeech } from "@/components/Home/Result/PartOfSpeech"
import { Player } from "@/components/Home/Result/Player"
import { HorizontalSeparator } from "@/components/Shared/HorizontalSeparator"
import { SourceUrls } from "@/components/Home/Result/SourceUrls"
import { ResultTitle } from "@/components/Home/Result/ResultTitle"
import type { APIResponse } from "@/types"

interface Props {
  word: APIResponse
}
export const Result = ({ word }: Props) => {
  const audio = word.phonetics.find(p => p.audio)?.audio

  return (
    <article className="mt-10">
      <section className="flex items-center justify-between">
        <ResultTitle word={word.word} phonetic={word.phonetic} />
        {audio && <Player audio={audio} />}
      </section>
      {word.meanings.map((meaning, index) => (
        <PartOfSpeech key={`${meaning.partOfSpeech}_${index}`} meaning={meaning} />
      ))}
      <HorizontalSeparator />
      <SourceUrls sourceUrls={word.sourceUrls} />
    </article>
  )
}
