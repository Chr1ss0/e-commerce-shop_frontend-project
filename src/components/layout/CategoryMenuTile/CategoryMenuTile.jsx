import styles from "./CategoryMenuTile.module.scss"
import { NavLink } from "react-router-dom"
export const CategoryMenuTile = ({ emoji, catDisplay, catLink }) => {
  //Implement NavLink
  return (
    <NavLink
      className={styles.link}
      to={`/home/${catLink}`}>
      <article className={styles.container}>
        <div className={styles.bg_wrapper}>
          <div className={styles.emoji}>{emoji}</div>
        </div>
        <h3 className={styles.cat_name}>{catDisplay}</h3>
      </article>
    </NavLink>
  )
}
