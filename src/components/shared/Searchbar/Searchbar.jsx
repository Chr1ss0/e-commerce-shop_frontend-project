import styles from "./Searchbar.module.scss"
import { Link, useLocation } from "react-router-dom"
import searchSvg from "../../../assets/images/search.svg"
import filterSvg from "../../../assets/images/filter.svg"
import { searchInputContext } from "../../../context/searchInputContext"
import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../../context/productsContext.js"
import { superCode } from "../../../utility/superCodeArray.js"

export const Searchbar = ({ onClickP, inputRefHome, inputRefProductList }) => {
  const [inputSearch, setInputSearch] = useState("")

  const inputRefLinks = inputRefHome ? inputRefHome : inputRefProductList

  const { setInputFocus } = useContext(searchInputContext)
  const { productList, setDisplayedProducts, displayedProducts } =
    useContext(ProductsContext)

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
