import axios, { AxiosError, AxiosResponse } from 'axios'
import { ApiCardDataInteface } from '../types'
import {
  SavedCardsInterface,
  setInitialCards,
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
  try {
    const data = await getCards()
    dispatch(setInitialCards({ data: data.data }))
  } catch (error) {
    const err = error.toJSON() as AxiosError
    console.log(err.status)
  }
}
