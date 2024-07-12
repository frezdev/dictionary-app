"use client"
import { HistoryIcon } from "@/components/Shared/Icons"
import { historial } from "@/services/historial"
import { HistorialItem } from "@/types"
import { useEffect, useState } from "react"
import { Modal } from "./Modal"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { toggleModal } from "@/redux/features/modal/modalSlice"

export const HistoryButton = () => {
  const [items, setItems] = useState<HistorialItem[]>([])
  const isOpen = useAppSelector(state => state.modalReducer.isOpen)
  const dispatch = useAppDispatch()

  const handleOpen = () => {
    dispatch(toggleModal())
  }

  useEffect(() => {
    const historialItems = historial.get();

    if (!historialItems) return;
    setItems(historialItems)
  }, [])

  return (
    <div>
      <button title="open-historial" onClick={handleOpen} className="btn btn-primary text-zinc-500 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-900">
        <HistoryIcon width={30} height={30} />
      </button>
      {isOpen && <Modal items={items} />}
    </div>
  )
}
