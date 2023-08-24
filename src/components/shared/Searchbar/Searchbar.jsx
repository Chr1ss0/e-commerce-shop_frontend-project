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
  const { inputFocus, setInputFocus } = useContext(searchInputContext)
  const { productList, setDisplayedProducts, displayedProducts } =
    useContext(ProductsContext)
  const inputRefLinks = inputRefHome ? inputRefHome : inputRefProductList

  const searchValue = inputSearch.toLowerCase().trim()

  const searchLocation = useLocation().pathname

  //Doent work for SuperCode Array yet
  useEffect(() => {
    if (Object.keys(productList).length > 0 && productList.total > 0) {
      const getDisplayedProducts = productList.products.filter((product) => {
        const searchFor = ["title", "brand", "category"]
        return searchFor.some((key) =>
          product[key].toLowerCase().includes(searchValue),
        )
      })
      setDisplayedProducts(getDisplayedProducts)
    } else {
      const getDisplayedProducts = superCode.filter((product) =>
        product.title.toLowerCase().includes(inputSearch.toLowerCase().trim()),
      )
      setDisplayedProducts([...getDisplayedProducts])

      // if (searchLocation === "/products") {
      //   set([...productList.products, ...superCode])
      // }
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
