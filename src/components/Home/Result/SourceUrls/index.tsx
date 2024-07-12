import { ExternalLinkIcon } from '@/components/Shared/Icons';

interface Props {
  sourceUrls: string[];
}
export const SourceUrls = ({ sourceUrls }: Props) => {
  return (
    <section className="flex flex-wrap gap-5 text-sm py-8">
      <span className="text-gray-600 dark:text-gray-300">Source</span>
      <ul className="grid gap-2">
        {sourceUrls.map(url => (
          <li key={url} className="w-full">
            <a
              className="underline gap-1 items-center flex text-gray-600 dark:text-gray-300"
              href={url}
              target="_blank"
            >
              <span className='line-clamp-1 max-w-[80vw] break-words'>{url}</span>
              <ExternalLinkIcon width={'1em'} height={'1em'} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
