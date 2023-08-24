import styles from "./Searchbar.module.scss"
import filterSvg from "../../../assets/images/filter.svg"
import { useContext, useEffect, useState } from "react"
import { searchInputContext } from "../../../context/searchInputContext"
import { ProductsContext } from "../../../context/productsContext.js"
import { FilterContext } from "../../../context/filterContext.js"
import { useLocation } from "react-router-dom"

export const Searchbar = ({ onClickP, inputRefHome, inputRefProductList }) => {
  const inputRefLinks = inputRefHome ? inputRefHome : inputRefProductList
  const [inputSearch, setInputSearch] = useState("")
  const { setInputFocus } = useContext(searchInputContext)
  const { productList, setDisplayedProducts, displayedCategoryProducts } =
    useContext(ProductsContext)
  const {
    electronicsFilter,
    lifeStyleFilter,
    homeFilter,
    clothesFilter,
    accessoriesFilter,
    vehicleFilter,
    menFilter,
    womenFilter,
    price0_20Filter,
    price20_50Filter,
    price50_100Filter,
    price100Filter,
    appleFilter,
    samsungFilter,
    superCodeFilter,
    topSweaterFilter,
    ghaziFilter,
    vintageFilter,
    warehouseFilter,
    louisWillFilter,
    skmeiFilter,
    easternWatchFilter,
  } = useContext(FilterContext)

  const searchLocation = useLocation().pathname

  const filters = [
    appleFilter,
    samsungFilter,
    superCodeFilter,
    topSweaterFilter,
    ghaziFilter,
    vintageFilter,
    warehouseFilter,
    easternWatchFilter,
    louisWillFilter,
    skmeiFilter,
    price0_20Filter,
    price20_50Filter,
    price50_100Filter,
    price100Filter,
    electronicsFilter,
    lifeStyleFilter,
    clothesFilter,
    homeFilter,
    vehicleFilter,
    accessoriesFilter,
    menFilter,
    womenFilter,
  ]
  const isFilterSet = filters.some((filter) => filter === true)

  const activeBrandFilters = [
    { filter: appleFilter, brand: "Apple" },
    { filter: topSweaterFilter, brand: "Top Sweater" },
    { filter: samsungFilter, brand: "Samsung" },
    { filter: ghaziFilter, brand: "Ghazi Fabric" },
    { filter: superCodeFilter, brand: "SuperCode" },
    { filter: vintageFilter, brand: "Vintage Apparel" },
    { filter: warehouseFilter, brand: "The Warehouse" },
    { filter: easternWatchFilter, brand: "Eastern Watches" },
    { filter: louisWillFilter, brand: "LouisWill" },
    { filter: skmeiFilter, brand: "SKMEI 9117" },
  ]
  const activePriceFilters = [
    { filter: price0_20Filter, priceRange: [0, 20] },
    { filter: price20_50Filter, priceRange: [20, 50] },
    { filter: price50_100Filter, priceRange: [50, 100] },
    { filter: price100Filter, priceRange: [100, Infinity] },
  ]
  const activeCateGoryFilters = [
    {
      filter: electronicsFilter,
      category: ["smartphones", "laptops", "lighting"],
    },
    {
      filter: lifeStyleFilter,
      category: ["fragrances", "skincare", "groceries"],
    },
    {
      filter: clothesFilter,
      category: [
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
      ],
    },
    {
      filter: homeFilter,
      category: ["home-decoration", "lighting", "furniture"],
    },
    { filter: vehicleFilter, category: ["automotive", "motorcycle"] },
    {
      filter: accessoriesFilter,
      category: [
        "mens-watches",
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
      ],
    },
    {
      filter: menFilter,
      category: [
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "sunglasses",
        "tops",
      ],
    },
    {
      filter: womenFilter,
      category: [
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
      ],
    },
  ]

  useEffect(() => {
    if (searchLocation === "/products") {
      if (isFilterSet) {
        const filteredProducts = productList.filter((item) => {
          return activeBrandFilters.some((activeFilter) => {
            return (
              activeFilter.filter && item.brand.includes(activeFilter.brand)
            )
          })
        })
        const searchValue = inputSearch.toLowerCase().trim()
        const getDisplayedProducts = filteredProducts.filter((product) => {
          const searchFor = ["title", "brand", "category"]
          return searchFor.some((key) =>
            product[key].toLowerCase().includes(searchValue),
          )
        })
        setDisplayedProducts(getDisplayedProducts)
      } else {
        const searchValue = inputSearch.toLowerCase().trim()
        const getDisplayedProducts = productList.filter((product) => {
          const searchFor = ["title", "brand"]
          return searchFor.some((key) =>
            product[key].toLowerCase().includes(searchValue),
          )
        })
        setDisplayedProducts(getDisplayedProducts)
      }
    } else {
      if (isFilterSet) {
        const filteredProducts = displayedCategoryProducts.filter((item) => {
          return activeBrandFilters.some((activeFilter) => {
            return (
              activeFilter.filter && item.brand.includes(activeFilter.brand)
            )
          })
        })

        const searchValue = inputSearch.toLowerCase().trim()
        const getDisplayedProducts = filteredProducts.filter((product) => {
          const searchFor = ["title", "brand"]
          return searchFor.some((key) =>
            product[key].toLowerCase().includes(searchValue),
          )
        })
        setDisplayedProducts(getDisplayedProducts)
      } else {
        const searchValue = inputSearch.toLowerCase().trim()
        const getDisplayedProducts = displayedCategoryProducts.filter(
          (product) => {
            const searchFor = ["title", "brand"]
            return searchFor.some((key) =>
              product[key].toLowerCase().includes(searchValue),
            )
          },
        )
        setDisplayedProducts(getDisplayedProducts)
      }
    }
  }, [
    searchLocation,
    inputSearch,
    productList,
    displayedCategoryProducts,
    appleFilter,
    samsungFilter,
    superCodeFilter,
    topSweaterFilter,
    ghaziFilter,
    vintageFilter,
    warehouseFilter,
    easternWatchFilter,
    louisWillFilter,
    skmeiFilter,
  ])

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
        className={
          isFilterSet ? styles.button_filterSet : styles.button_notFilterSet
        }
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
