import axios, { AxiosError, AxiosResponse } from 'axios'
import { ApiCardDataInteface } from '../types'
import {
  SavedCardsInterface,
  setInitialCards,
  setIsError,
  setIsLoading,
  setIsSucces,
  setTextError,
} from '../redux/slices/saved_cards_slice'
import { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

const moviesUrl = 'https://api.nomoreparties.co/beatfilm-movies'
export const movieImgUrl = 'https://api.nomoreparties.co'

export const getCards = (): Promise<AxiosResponse<ApiCardDataInteface[]>> => {
  return axios({
    method: 'GET',
    url: moviesUrl,
  })
}

export const getData = async (
  dispatch: ThunkDispatch<
    {
      savedCardsSlice: SavedCardsInterface
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>,
) => {
  dispatch(setIsError({ state: false }))
  dispatch(setIsSucces({ state: false }))
  dispatch(setIsLoading({ state: true }))
  dispatch(setTextError({ err: '' }))
  try {
    const data = await getCards()
    dispatch(setInitialCards({ data: data.data }))
    dispatch(setIsSucces({ state: true }))
  } catch (error) {
    dispatch(setIsError({ state: true }))
    const err = error.toJSON() as AxiosError
    dispatch(setTextError({ err: err.message }))
  } finally {
    dispatch(setIsLoading({ state: false }))
  }
}
