import styles from "./CategoryMenuTile.module.scss"
import { Link } from "react-router-dom"
export const CategoryMenuTileTile = ({ emoji, catDisplay, catLink }) => {
  return (
    <Link
      className={styles.link}
      to={`products/${catLink}`}>
      <article className={styles.container}>
        <div className={styles.bg_wrapper}>
          <div className={styles.emoji}>{emoji}</div>
        </div>
        <h3 className={styles.cat_name}>{catDisplay}</h3>
      </article>
    </Link>
  )
}
