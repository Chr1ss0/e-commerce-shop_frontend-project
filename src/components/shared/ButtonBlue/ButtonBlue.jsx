import styles from "./ButtonBlue.module.scss"
export const ButtonBlue = ({ text, onClickP }) => {
  return (
    <button
      onClick={onClickP}
      className={styles.button}>
      {text}
    </button>
  )
}
