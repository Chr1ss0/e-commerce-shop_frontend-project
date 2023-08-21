import dressSvg from "../../../assets/images/dress.svg"
import sofaSvg from "../../../assets/images/sofa .svg"
import smartWatchSvg from "../../../assets/images/smartwatch.svg"
import foodSvg from "../../../assets/images/food .svg"
import cosmeticsSvg from "../../../assets/images/cosmetics.svg"
import { CategoryMenuTileTile } from "../CategoryMenuTile/CategoryMenuTileTile.jsx"
import styles from "./CategoryMenu.module.scss"

export const CategoryMenu = () => {
  return (
    <section className={styles.flexbox_wrapper}>
      <CategoryMenuTileTile
        img={dressSvg}
        catName={"Category 1"}
      />{" "}
      <CategoryMenuTileTile
        img={sofaSvg}
        catName={"Category 2"}
      />{" "}
      <CategoryMenuTileTile
        img={smartWatchSvg}
        catName={"Category 3"}
      />{" "}
      <CategoryMenuTileTile
        img={cosmeticsSvg}
        catName={"Category 4"}
      />{" "}
      <CategoryMenuTileTile
        img={foodSvg}
        catName={"Category 5"}
      />
    </section>
  )
}
