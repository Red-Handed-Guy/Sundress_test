import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ApiCardDataInteface, CardDataInteface } from '../../types'

export interface SavedCardsInterface {
  savedCards: CardDataInteface[]
}

const initialState: SavedCardsInterface = {
  savedCards: [],
}

const savedCardsSlice = createSlice({
  name: 'savedCards',
  initialState,
  reducers: {
    setInitialCards: (
      state,
      action: PayloadAction<{ data: ApiCardDataInteface[] }>,
    ) => {
      const newState = action.payload.data.map(item => {
        return {
          id: item.id,
          img: item.image.url,
          isLiked: false,
          name: item.nameRU,
          description: item.description,
        }
      })
      localStorage.setItem('savedCards', JSON.stringify(newState))
      state.savedCards = newState
    },
    setSavedCards: (
      state,
      action: PayloadAction<{ data: CardDataInteface[] }>,
    ) => {
      state.savedCards = action.payload.data
    },
    deleteCard: (state, action: PayloadAction<{ id: number }>) => {
      const newState = state.savedCards.filter(
        item => item.id !== action.payload.id,
      )
      state.savedCards = newState
      localStorage.setItem('savedCards', JSON.stringify(newState))
    },
    toggleCardLike: (state, action: PayloadAction<{ id: number }>) => {
      const newState = state.savedCards.map(item =>
        item.id === action.payload.id
          ? { ...item, isLiked: !item.isLiked }
          : item,
      )
      state.savedCards = newState
      localStorage.setItem('savedCards', JSON.stringify(newState))
    },
  },
})

export const { deleteCard, setInitialCards, setSavedCards, toggleCardLike } =
  savedCardsSlice.actions

export default savedCardsSlice.reducer
