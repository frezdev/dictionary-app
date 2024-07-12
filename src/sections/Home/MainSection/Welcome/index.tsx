import Image from "next/image"
import welcome from '@/assets/images/welcome.svg'

export const Welcome = () => {
  return (
    <section className="flex gap-8 min-h-[70dvh] items-center justify-center flex-col py-8">
      <Image src={welcome} alt="" width={300} />
      <h1 className="font-bold text-center sm:text-2xl text-xl text-gray-800 dark:text-gray-400">Welcome to the MyDictionary App</h1>
    </section>
  )
}
