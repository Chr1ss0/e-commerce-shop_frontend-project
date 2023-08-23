import styles from "./Searchbar.module.scss"
import { Link } from "react-router-dom"
import searchSvg from "../../../assets/images/search.svg"
import filterSvg from "../../../assets/images/filter.svg"
import { searchInputContext } from "../../../context/searchInputContext"
import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../../context/productsContext.js"

export const Searchbar = ({ onClickP, inputRefHome, inputRefProductList }) => {
  const [inputSearch, setInputSearch] = useState("")
  const { inputFocus, setInputFocus } = useContext(searchInputContext)
  const { productList, setDisplayedProducts, displayedProducts } =
    useContext(ProductsContext)
  const inputRefLinks = inputRefHome ? inputRefHome : inputRefProductList

  // useEffect(() => {
  //   if (productList.length > 0) {
  //     const getDisplayedProducts = productList.products.filter((product) =>
  //       product.title.toLowerCase().includes(inputSearch.toLowerCase().trim()),
  //     )
  //     setDisplayedProducts(getDisplayedProducts)
  //   }
  // }, [inputSearch, productList])

  console.log(productList.length)
  console.log(productList)

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
