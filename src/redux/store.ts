import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './features/word/wordSlice'
import modalReducer from './features/modal/modalSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      wordReducer,
      modalReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']