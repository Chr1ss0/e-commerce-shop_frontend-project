import { CategoryMenuTile } from "../CategoryMenuTile/CategoryMenuTile.jsx"
import styles from "./CategoryMenu.module.scss"
import { useEffect, useState } from "react"
import { fetchList } from "../../../functions/fetchList.js"
import { apiCategoriesLink } from "../../../utility/apiBaseLink.js"
import { categoryIcons } from "../../../utility/categoryIcons.js"
import { v4 as uuidv4 } from "uuid"
import { Link } from "react-router-dom"

export const CategoryMenu = () => {
  const [categorys, setCategorys] = useState([])
  const [fetchDone, setFetchDone] = useState(false)
  const [mergeDone, setMergeDone] = useState(false)

  useEffect(() => {
    fetchList(apiCategoriesLink, setCategorys, setFetchDone)
  }, [])

  useEffect(() => {
    if (fetchDone) {
      setCategorys((prevData) =>
        prevData.map((entry, index) => ({
          name: entry, // Assuming your category object has a property called "category"
          emoji: categoryIcons[index],
        })),
      )
      setMergeDone((prevState) => true)
    }
  }, [fetchDone, categoryIcons])

  return (
    <section className={styles.flexbox_wrapper}>
      {mergeDone ? (
        <>
          <CategoryMenuTile
            emoji={"👻"}
            catDisplay={"SuperCode"}
            catLink={"/home"}
          />
          {categorys.map((category) => (
            <CategoryMenuTile
              key={uuidv4()}
              catLink={`/home/${category.name}`}
              catDisplay={category.name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("-")}
              emoji={category.emoji}
            />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
