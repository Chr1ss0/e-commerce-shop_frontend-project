import styles from "./ListMenuHome.module.scss"
import { Link } from "react-router-dom"

export const ListMenuHome = ({ currentSearch, onClickP }) => {
  return (
    <nav className={styles.container}>
      <h2 className={styles.current_search}>{currentSearch}</h2>
      <Link
        to={"/products"}
        className={styles.link}>
        View All
      </Link>
    </nav>
  )
}
