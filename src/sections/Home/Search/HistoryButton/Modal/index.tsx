import { CloseIcon } from "@/components/Shared/Icons"
import { HistorialItem } from "@/types"
import { HistorialList } from "./HistorialList"
import { useAppDispatch } from "@/redux/hooks";
import { toggleModal } from "@/redux/features/modal/modalSlice";

interface Props {
  items: HistorialItem[];
}

export const Modal = ({ items }: Props) => {
  const dispatch = useAppDispatch()

  const handleClose = () => dispatch(toggleModal())

  return (
    <dialog className="fixed  grid place-items-center bg-zinc-800/60 inset-0 w-full h-[100dvh]">
      <div className="w-[90%] max-w-96 h-[80dvh] bg-white dark:bg-zinc-800 rounded-xl ">
        <header className="relative">
          <h1 className="text-2xl p-5 font-bold text-zinc-800 dark:text-zinc-200">
            Historial
          </h1>
          <span className="absolute top-2 right-2">
            <button onClick={handleClose} className="rounded-full hover:bg-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-700 p-1">
              <CloseIcon width={30} height={30} />
            </button>
          </span>
        </header>
        <HistorialList items={items} />
      </div>
    </dialog>
  )
}
