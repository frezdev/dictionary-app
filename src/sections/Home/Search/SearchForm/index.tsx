"use client"
import { SearchIcon } from "@/components/Shared/Icons"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./validation"
import { WordServices } from "@/services/words"
import { useAppDispatch } from "@/redux/hooks"
import { setWord } from "@/redux/features/word/wordSlice"
import { historial } from "@/services/historial"
import { toast } from "sonner"

export const SearchForm = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formValue) => {
      try {
        const [error, data] = await WordServices.getByQuery(formValue.search.trim())
        if (data) dispatch(setWord(data))
        if (error) throw new Error(error.message)

        // save in localStorage
        historial.save({
          word: formValue.search,
          date: new Date(),
          id: window.crypto.randomUUID()
        })

      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message, {
            style: { fontSize: 16, color: 'red' }
          })
        }
      }


    }
  })

  const { errors, values } = formik

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    formik.setFieldValue('search', value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    formik.handleSubmit()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        bg-gray-100 dark:bg-zinc-800 rounded-xl px-4 py-3 flex w-full
        ${errors.search && "outline outline-2 outline-red-500"}
      `}
    >
      <input
        value={values.search}
        onChange={handleChange}
        name="search"
        type="text"
        placeholder={errors.search ? errors.search : "Search..."}
        className={`
          bg-transparent
          dark:text-gray-200
          outline-none
          w-full text-xl
          ${errors.search && "placeholder:text-red-500"}
        `}
      />
      <button title="submit-button" type="submit" className="text-purple-500 p-1">
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  )
}