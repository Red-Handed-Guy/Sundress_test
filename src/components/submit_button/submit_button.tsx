import { FC } from 'react'
import styles from './submit_button.module.scss'

interface SubmitButtonInterface {
  onClick: () => void
  text: string
  disabled: boolean
}

const SubmitButton: FC<SubmitButtonInterface> = ({
  onClick,
  text,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${disabled && styles.button_disabled}`}
      onClick={onClick}
    >
      <p className={styles.button_text}>{text}</p>
    </button>
  )
}

export default SubmitButton
