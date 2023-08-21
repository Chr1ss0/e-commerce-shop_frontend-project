import styles from "./AutoFlex.module.scss"

export const AutoFlex = ({ children }) => {
  return <section className={styles.flex_container}>{children}</section>
}
