import { FC } from 'react'
import { movieImgUrl } from '../../api/api'
import styles from './card.module.scss'
import { CardDataInteface } from '../../types'
import HeartSvgBlack from '../../image/like_black.svg'
import HeartSvgTransparent from '../../image/like.svg'
import TrashSvg from '../../image/trash.svg'
import { useAppDispatch } from '../../redux/hooks'
import {
  deleteCard,
  toggleCardLike,
} from '../../redux/slices/saved_cards_slice'

interface CardInterface {
  cardData: CardDataInteface
}

const Card: FC<CardInterface> = ({ cardData }) => {
  const { img, isLiked, name, id } = cardData

  function handleClick() {
    //onCardClick(cardData)
  }

  const dispatch = useAppDispatch()

  const handleToggleCardLike = () => {
    dispatch(toggleCardLike({ id }))
  }
  const handleDeleteCard = () => {
    dispatch(deleteCard({ id }))
  }

  return (
    <article className={styles.card}>
      <button
        onClick={handleDeleteCard}
        type="button"
        className={styles.card__delete_button}
      >
        <TrashSvg className={styles.card__delete_button_img} />
      </button>

      <div className={styles.card__img_wrapper}>
        <img
          src={movieImgUrl + img}
          alt={name}
          className={styles.card__img}
          onClick={handleClick}
        />
      </div>
      <div className={styles.card__wrapper}>
        <h2 className={styles.card__title}>{name}</h2>

        <button
          type="button"
          onClick={handleToggleCardLike}
          className={styles.card__like_button}
        >
          {isLiked ? (
            <HeartSvgBlack className={styles.card__like_button_img} />
          ) : (
            <HeartSvgTransparent className={styles.card__like_button_img} />
          )}
        </button>
      </div>
    </article>
  )
}

export default Card
