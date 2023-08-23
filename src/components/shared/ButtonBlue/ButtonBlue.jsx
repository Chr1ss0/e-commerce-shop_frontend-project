import styles from "./ButtonBlue.module.scss"
export const ButtonBlue = ({ text }) => {
  return <button className={styles.button}>{text}</button>
}
