import styles from "./CategoryMenuTile.module.scss"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ProductsContext } from "../../../context/productsContext.js"
export const CategoryMenuTile = ({
  emoji,
  catDisplay,
  catLink,
  classNameP,
  filterName,
}) => {
  const { productList, setDisplayedProducts } = useContext(ProductsContext)
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
