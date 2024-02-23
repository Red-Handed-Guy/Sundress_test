import { FC } from 'react'
import styles from './checkbox.module.scss'
import HeartSvgBlack from '../../image/like_black.svg'

interface Checkbox {
  handleToggleCheckbox: () => void
  searchCheckbox: boolean
}

const Checkbox: FC<Checkbox> = ({ handleToggleCheckbox, searchCheckbox }) => {
  return (
    <div className={styles.search_form__switch_wrapper}>
      <label className={styles.search_form__switch}>
        <input
          checked={searchCheckbox}
          onChange={handleToggleCheckbox}
          className={styles.search_form__check_input}
          type="checkbox"
        />

        <span className={styles.search_form__slider}></span>
      </label>
      <HeartSvgBlack />
    </div>
  )
}

export default Checkbox
