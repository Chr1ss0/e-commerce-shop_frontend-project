import styles from "./FilterMenu.module.scss"
export const FilterMenu = ({ onClickP }) => {
  return (
    <aside className={styles.container}>
      <h2>Filter Seite</h2>
      <div onClick={onClickP}>back</div>
    </aside>
  )
}
