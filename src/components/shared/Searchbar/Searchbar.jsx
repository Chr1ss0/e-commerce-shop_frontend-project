import styles from "./Searchbar.module.scss"
import filterSvg from "../../../assets/images/filter.svg"
import { useContext, useEffect, useState } from "react"
import { searchInputContext } from "../../../context/searchInputContext"
import { ProductsContext } from "../../../context/productsContext.js"

export const Searchbar = ({ onClickP, inputRefHome, inputRefProductList }) => {
  const [inputSearch, setInputSearch] = useState("")

  const inputRefLinks = inputRefHome ? inputRefHome : inputRefProductList

  const { setInputFocus } = useContext(searchInputContext)
  const { productList, setDisplayedProducts } = useContext(ProductsContext)

  useEffect(() => {
    if (Object.keys(productList).length > 0) {
      const searchValue = inputSearch.toLowerCase().trim()
      const getDisplayedProducts = productList.filter((product) => {
        const searchFor = ["title", "brand", "category"]
        return searchFor.some((key) =>
          product[key].toLowerCase().includes(searchValue),
        )
      })
      setDisplayedProducts(getDisplayedProducts)
    }
  }, [inputSearch, productList])

  return (
    <div className={styles.flex_wrapper}>
      <label
        className={styles.label}
        htmlFor={"searchbar"}>
        Product search
      </label>
      <input
        className={styles.input}
        value={inputSearch}
        onChange={(event) => setInputSearch(event.target.value)}
        type="text"
        id="searchbar"
        placeholder={"Search"}
        ref={inputRefLinks}
        onFocus={() => setInputFocus(true)}
      />

      <div
        className={styles.button}
        onClick={onClickP}>
        <img
          className={styles.button_image}
          src={filterSvg}
          alt="filter"
        />
      </div>
    </div>
  )
}
