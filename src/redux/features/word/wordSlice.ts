import { createSlice } from "@reduxjs/toolkit";
import type { APIResponse } from "@/types"

export interface InitiaState {
  word: APIResponse[],
}
export const initialState: InitiaState = {
  word: [],
}

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.word = [...action.payload]
    },
  }
})

export const { setWord } = wordSlice.actions
export default wordSlice.reducer