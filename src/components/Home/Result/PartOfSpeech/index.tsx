import { courgetteFont } from '@/assets/fonts'
import { Meaning } from '@/components/Home/Result/Meaning';
import { Meaning as MeaningTypes } from '@/types';
import { SemanticField } from '@/components/Home/Result/SemanticField';
import { HorizontalSeparator } from '@/components/Shared/HorizontalSeparator';

interface Props {
  meaning: MeaningTypes;
}
export const PartOfSpeech = ({ meaning }: Props) => {
  return (
    <section className='py-6'>
      <div className="flex items-center gap-6 mb-10">
        <h3 className={`${courgetteFont.className} font-bold text-lg`}>{meaning.partOfSpeech}</h3>
        <HorizontalSeparator />
      </div>
      <section className="grid gap-5">
        <Meaning definitions={meaning.definitions} />
        {meaning.synonyms.length > 0 && <SemanticField list={meaning.synonyms} name="synonyms" />}
        {meaning.antonyms.length > 0 && <SemanticField list={meaning.antonyms} name="antonyms" />}
      </section>
    </section>

  )
}
