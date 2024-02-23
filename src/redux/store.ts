import { configureStore } from '@reduxjs/toolkit'
import savedCardsSlice from './slices/saved_cards_slice'

export const store = configureStore({
  reducer: { savedCardsSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
