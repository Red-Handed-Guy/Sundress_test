import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ApiCardDataInteface, CardDataInteface } from '../../types'

export interface SavedCardsInterface {
  savedCards: CardDataInteface[]
  isLoading: boolean
  isSucces: boolean
  isError: boolean
  textError: string
}

const initialState: SavedCardsInterface = {
  savedCards: [],
  isLoading: false,
  isSucces: false,
  isError: false,
  textError: '',
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
    setIsLoading: (state, action: PayloadAction<{ state: boolean }>) => {
      state.isLoading = action.payload.state
    },
    setIsSucces: (state, action: PayloadAction<{ state: boolean }>) => {
      state.isSucces = action.payload.state
    },
    setIsError: (state, action: PayloadAction<{ state: boolean }>) => {
      state.isError = action.payload.state
    },
    setTextError: (state, action: PayloadAction<{ err: string }>) => {
      state.textError = action.payload.err
    },
  },
})

export const {
  deleteCard,
  setInitialCards,
  setSavedCards,
  toggleCardLike,
  setIsError,
  setIsLoading,
  setIsSucces,
  setTextError,
} = savedCardsSlice.actions

export default savedCardsSlice.reducer
