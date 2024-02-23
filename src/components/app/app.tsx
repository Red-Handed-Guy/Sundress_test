import { FC, useEffect } from 'react'
import { getData } from '../../api/api'
import { useAppDispatch } from '../../redux/hooks'
import { setSavedCards } from '../../redux/slices/saved_cards_slice'
import { CardDataInteface } from '../../types'
import { Outlet } from 'react-router-dom'
import styles from './app.module.scss'

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const savedCards = JSON.parse(
      localStorage.getItem('savedCards'),
    ) as CardDataInteface[]
    if (savedCards === null) {
      getData(dispatch)
      return
    }
    dispatch(setSavedCards({ data: savedCards }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  )
}

export default App
