import styles from "./CategoryMenu.module.scss"
import CircularProgress from "@mui/material/CircularProgress"
import { v4 as uuidv4 } from "uuid"
import Box from "@mui/material/Box"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { CategoryMenuTile } from "../CategoryMenuTile/CategoryMenuTile.jsx"
import { apiCategoriesLink } from "../../../utility/apiBaseLink.js"
import { categoryIcons } from "../../../utility/categoryIcons.js"

export const CategoryMenu = () => {
  const [categories, setCategories] = useState([])
  const [fetchDone, setFetchDone] = useState(false)
  const [mergeDone, setMergeDone] = useState(false)
  const navLinkLocation = useLocation().pathname

  useEffect(() => {
    const fetchListCategories = async () => {
      try {
        const response = await fetch(apiCategoriesLink)
        if (!response.ok) {
          throw new Error(`fetchProductList failed: ${response.status}`)
        }
        const data = await response.json()
        setCategories(data)
        setFetchDone(true)
      } catch (error) {
        console.error("Error:", error)
      }
    }
    fetchListCategories()
  }, [])

  useEffect(() => {
    if (fetchDone) {
      setCategories((prevData) =>
        prevData.map((entry, index) => ({
          name: entry,
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
            classNameP={
              navLinkLocation === "/home" ? styles.active : styles.pending
            }
            emoji={"👻"}
            catDisplay={"SuperCode"}
            catLink={"/home"}
          />
          {categories.map((category) => (
            <CategoryMenuTile
              classNameP={({ isActive, isPending }) =>
                isPending ? styles.pending : isActive ? styles.active : ""
              }
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
        <section>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
              width: "100%",
              marginLeft: "100px",
            }}>
            <CircularProgress />
          </Box>
        </section>
      )}
    </section>
  )
}
