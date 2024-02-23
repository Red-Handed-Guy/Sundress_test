export interface CardDataInteface {
  id: number
  img: string
  name: string
  description: string
  isLiked: boolean
}

export interface ApiCardDataInteface {
  id: number
  description: string
  nameRU: string
  image: {
    url: string
  }
}
