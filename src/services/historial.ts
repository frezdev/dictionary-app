import type { HistorialItem } from "@/types"
import { LocalStorage } from "@/utils/localStorage"

const KEY_HISTORIAL = 'WORDS_HISTORIAL';

const save = (newRegister: HistorialItem) => {
  const historial = LocalStorage.get(KEY_HISTORIAL) as HistorialItem[] | null

  if (!historial) {
    return LocalStorage.set(KEY_HISTORIAL, [newRegister])
  }
  const alreadyExists = historial.findIndex(item => item.word === newRegister.word);

  if (alreadyExists !== -1) {
    historial[alreadyExists] = newRegister
  } else {
    historial.push(newRegister)
  }

  LocalStorage.set(KEY_HISTORIAL, historial)
}

const get = () => {
  const historial = LocalStorage.get(KEY_HISTORIAL)
  return historial
}

export const historial = {
  save,
  get
}