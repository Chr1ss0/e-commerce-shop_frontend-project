import { CategoryMenuTile } from "../CategoryMenuTile/CategoryMenuTile.jsx"
import styles from "./CategoryMenu.module.scss"
import { useEffect, useState } from "react"
import { fetchList } from "../../../functions/fetchList.js"
import { apiCategoryLink } from "../../../utility/apiBaseLink.js"
import { categoryIcons } from "../../../utility/categoryIcons.js"
import { v4 as uuidv4 } from "uuid"

export const CategoryMenu = () => {
  const [categorys, setCategorys] = useState([])
  const [fetchDone, setFetchDone] = useState(false)

  useEffect(() => {
    fetchList(apiCategoryLink, setCategorys, setFetchDone)
  }, [])

  useEffect(() => {
    if (fetchDone) {
      setCategorys((prevData) =>
        prevData.map((entry, index) => ({
          name: entry, // Assuming your category object has a property called "category"
          emoji: categoryIcons[index],
        })),
      )
    }
  }, [fetchDone, categoryIcons])

  return (
    <section className={styles.flexbox_wrapper}>
      {fetchDone ? (
        categorys.map((category) => (
          <CategoryMenuTile
            key={uuidv4()}
            catLink={category.name}
            catDisplay={category.name}
            emoji={category.emoji}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
