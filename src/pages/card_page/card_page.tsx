import { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CardDataInteface } from '../../types'
import { useAppSelector } from '../../redux/hooks'
import { movieImgUrl } from '../../api/api'
import styles from './card_page.module.scss'

const CardPage: FC = () => {
  const params = useParams()
  const savedCards = useAppSelector(state => state.savedCardsSlice.savedCards)
  const [selectedCard, setSelectedCard] = useState<CardDataInteface | null>(
    null,
  )

  useEffect(() => {
    const card = savedCards.find(card => card.id === +params.card)
    if (card) {
      setSelectedCard(card)
    }
  }, [params.card, savedCards])

  return (
    <section className={styles.container}>
      <Link className={styles.back_link} to={'/'}>
        {'Назад'}
      </Link>
      <img
        src={movieImgUrl + selectedCard?.img}
        alt={selectedCard?.name}
        className={styles.image}
      />
      <h1 className={styles.title}>{selectedCard?.name}</h1>
      <p className={styles.text}>{selectedCard?.description}</p>
    </section>
  )
}

export default CardPage
