import styles from "./Searchbar.module.scss"
import filterSvg from "../../../assets/images/filter.svg"
import { useContext, useEffect, useState } from "react"
import { searchInputContext } from "../../../context/searchInputContext"
import { ProductsContext } from "../../../context/productsContext.js"
import { FilterContext } from "../../../context/filterContext.js"

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

  const {
    electronicsFilter,
    setElectronicsFilter,
    lifeStyleFilter,
    setLifeStyleFilter,
    homeFilter,
    setHomeFilter,
    clothesFilter,
    setClothesFilter,
    accessoriesFilter,
    setAccessoriesFilter,
    vehicleFilter,
    setVehicleFilter,
    menFilter,
    setMenFilter,
    womenFilter,
    setWomanFilter,
    price0_20Filter,
    setPrice0_20Filter,
    price20_50Filter,
    setPrice20_50Filter,
    price50_100Filter,
    setPrice50_100Filter,
    price100Filter,
    setPrice100Filter,
    appleFilter,
    setAppleFilter,
    samsungFilter,
    setSamsungFilter,
    superCodeFilter,
    setSuperCodeFilter,
    topSweaterFilter,
    setTopSweaterFilter,
    ghaziFilter,
    setGhaziFilter,
    vintageFilter,
    setVintageFilter,
    warehouseFilter,
    setWarehouseFilter,
    louisWillFilter,
    setLoisWillFilter,
    skmeiFilter,
    setSkmeiFilter,
    easternWatchFilter,
    setEasternWatchFilter,
  } = useContext(FilterContext)

  useEffect(() => {
    if (appleFilter) {
      const getDisplayedProducts = productList.filter((item) => {
        return item.brand.includes("Apple")
      })

      setDisplayedProducts(getDisplayedProducts)
    }
    if (samsungFilter) {
      const getDisplayedProducts = productList.filter((item) => {
        return item.brand.includes("Samsung")
      })

      setDisplayedProducts(getDisplayedProducts)
    }
    if (topSweaterFilter) {
      const getDisplayedProducts = productList.filter((item) => {
        return item.brand.includes("Top Sweater")
      })

      setDisplayedProducts(getDisplayedProducts)
    }
  }, [appleFilter, samsungFilter, productList])

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
