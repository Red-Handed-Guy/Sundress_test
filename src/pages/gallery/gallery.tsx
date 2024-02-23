import { FC, useState } from 'react'
import styles from './gallery.module.scss'
import Card from '../../components/card/card'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import Checkbox from '../../components/checkbox/checkbox'
import SubmitButton from '../../components/submit_button/submit_button'
import { getData } from '../../api/api'
import Preloader from '../../components/preloader/preloader'

const Gallery: FC = () => {
  const savedCards = useAppSelector(state => state.savedCardsSlice.savedCards)
  const savedCardsState = useAppSelector(state => state.savedCardsSlice)
  const [searchCheckbox, setSearchCheckbox] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleToggleCheckbox = () => {
    setSearchCheckbox(!searchCheckbox)
  }
  const savedCardsFiltered = searchCheckbox
    ? savedCards.filter(card => card.isLiked)
    : savedCards

  const handleReloadCards = () => {
    localStorage.clear
    getData(dispatch)
  }

  return (
    <section className={styles.gallery_wrapper} aria-label="Галерея">
      <SubmitButton
        disabled={false}
        text="Загрузить карточки заново"
        onClick={handleReloadCards}
      />
      <Checkbox
        handleToggleCheckbox={handleToggleCheckbox}
        searchCheckbox={searchCheckbox}
      />
      {savedCardsState.isLoading && <Preloader />}
      {savedCardsState.isError && (
        <p style={{ textAlign: 'center' }}>{savedCardsState.textError}</p>
      )}
      {savedCardsState.isSucces && (
        <div className={styles.gallery}>
          {savedCardsFiltered?.map(card => {
            return <Card cardData={card} key={card.id} />
          })}
        </div>
      )}
    </section>
  )
}

export default Gallery
