import styles from "./CategoryMenuTile.module.scss"
import { NavLink } from "react-router-dom"
export const CategoryMenuTile = ({
  emoji,
  catDisplay,
  catLink,
  classNameP,
}) => {
  //Implement NavLink
  return (
    <NavLink
      className={classNameP}
      to={`${catLink}`}>
      <article className={styles.container}>
        <div className={styles.bg_wrapper}>
          <div className={styles.emoji}>{emoji}</div>
        </div>
        <h3 className={styles.cat_name}>{catDisplay}</h3>
      </article>
    </NavLink>
  )
}
