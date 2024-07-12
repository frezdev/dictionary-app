import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  isOpen: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { toggleModal } = modalSlice.actions
export default modalSlice.reducer