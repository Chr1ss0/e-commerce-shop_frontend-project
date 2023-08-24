import styles from "../Home/Home.module.scss"
import { CategoryMenu } from "../../layout/CategoryMenu/CategoryMenu.jsx"
import { useContext, useEffect, useState, useRef } from "react"
import { useLocation, useParams } from "react-router-dom"
import { apiCategoryLink } from "../../../utility/apiBaseLink.js"
import { ProductsContext } from "../../../context/productsContext.js"
import { searchInputContext } from "../../../context/searchInputContext"
import { superCodeObject } from "../../../utility/superCodeData.js"
import { AutoFlex } from "../../shared/AutoFlex/AutoFlex.jsx"
import { ListMenuHome } from "../../layout/ListMenuHome/ListMenuHome.jsx"
import { Searchbar } from "../../shared/Searchbar/Searchbar.jsx"
import { fetchList } from "../../../functions/fetchList.js"
import ProductItem from "../../shared/ProductItem/ProductItem.jsx"
import { FilterMenu } from "../../shared/FilterMenu/FilterMenu.jsx"
import Navbar from "../../layout/Navbar/Navbar"

export const Home = () => {
  const [fetchDone, setFetchDone] = useState(false)
  const [filterMenu, setFilterMenu] = useState(false)
  const inputRefHome = useRef(null)
  const { setProductList, displayedProducts } = useContext(ProductsContext)
  const { setInputFocus } = useContext(searchInputContext)

  const currentLocation = useLocation().pathname
  const category = useParams().category

  const handleSearchClick = () => {
    setInputFocus(true)
    inputRefHome.current.focus()
  }

  // useEffect(() => {
  //   if (currentLocation !== "/home") {
  //     fetchList(`${apiCategoryLink}${category}`, setProductList, setFetchDone)
  //   } else if (currentLocation === "/home") {
  //     setProductList(superCodeObject.products)
  //   }
  // }, [currentLocation])

  return (
    <>
      {filterMenu ? (
        <FilterMenu onClickP={() => setFilterMenu(false)} />
      ) : (
        <>
          <header className={styles.header}>
            <h1 className={styles.headline}>Find your favorite Product</h1>
          </header>
          <Searchbar
            onClickP={() => setFilterMenu((prevState) => true)}
            inputRefHome={inputRefHome}
            setInputFocus={setInputFocus}
          />
          <CategoryMenu />
          <main className={styles.main}>
            <ListMenuHome
              currentSearch={
                currentLocation === "/home"
                  ? "SuperCode"
                  : category
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join("-")
              }
            />
            {/*{fetchDone && currentLocation !== "/home" ? (*/}
            {/*  <AutoFlex>*/}
            {/*    {displayedProducts.map((entry) => (*/}
            {/*      <ProductItem*/}
            {/*        product={entry}*/}
            {/*        key={entry.id}*/}
            {/*      />*/}
            {/*    ))}*/}
            {/*  </AutoFlex>*/}
            {/*) : (*/}
            <AutoFlex>
              {displayedProducts.map((entry) => (
                <ProductItem
                  product={entry}
                  key={entry.id}
                />
              ))}
            </AutoFlex>
            {/*)}*/}
          </main>
          <Navbar handleSearchClick={handleSearchClick} />
        </>
      )}
    </>
  )
}
