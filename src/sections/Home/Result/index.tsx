import { PartOfSpeech } from "@/components/Home/Result/PartOfSpeech"
import { Player } from "@/components/Home/Result/Player"
import { HorizontalSeparator } from "@/components/Shared/HorizontalSeparator"
import { SourceUrls } from "@/components/Home/Result/SourceUrls"
import { ResultTitle } from "@/components/Home/Result/ResultTitle"
import { word } from "@/mock"

export const Result = () => {
  const [mock] = word

  const audio = mock.phonetics.find(p => p.audio)?.audio

  return (
    <article className="mt-10">
      <section className="flex items-center justify-between">
        <ResultTitle word={mock.word} phonetic={mock.phonetic} />
        {audio && <Player audio={audio} />}
      </section>
      {mock.meanings.map(meaning => (
        <PartOfSpeech key={meaning.partOfSpeech} meaning={meaning} />
      ))}
      <HorizontalSeparator />
      <SourceUrls sourceUrls={mock.sourceUrls} />
    </article>
  )
}
