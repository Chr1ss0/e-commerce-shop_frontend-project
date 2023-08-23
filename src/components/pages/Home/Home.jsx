import Navbar from "../../layout/Navbar/Navbar"
import styles from "../Home/Home.module.scss"
import { Searchbar } from "../../shared/Searchbar/Searchbar.jsx"
import { CategoryMenu } from "../../layout/CategoryMenu/CategoryMenu.jsx"
import { ListMenuHome } from "../../layout/ListMenuHome/ListMenuHome.jsx"
import { AutoFlex } from "../../shared/AutoFlex/AutoFlex.jsx"

import { useContext, useEffect, useState, useRef } from "react"
import { apiCategoryLink } from "../../../utility/apiBaseLink.js"

import { fetchList } from "../../../functions/fetchList.js"
import ProductItem from "../../shared/ProductItem/ProductItem.jsx"
import { FilterMenu } from "../../shared/FilterMenu/FilterMenu.jsx"
import { ProductsContext } from "../../../context/productsContext.js"
import { searchInputContext } from "../../../context/searchInputContext"
import { superCode } from "../../../utility/superCodeArray.js"
import { useLocation, useParams } from "react-router-dom"

export const Home = () => {
  const [fetchDone, setFetchDone] = useState(false)
  const [filterMenu, setFilterMenu] = useState(false) // context
  const inputRefHome = useRef(null)
  const { productList, setProductList } = useContext(ProductsContext)
  const { inputFocus, setInputFocus } = useContext(searchInputContext)
  const currentLocation = useLocation().pathname
  const category = useParams().category

  //State für Inputfeld Fokus

  const handleSearchClick = () => {
    setInputFocus(true)
    inputRefHome.current.focus()
  }

  useEffect(() => {
    if (currentLocation !== "/home/") {
      fetchList(
        `${apiCategoryLink}${category}?limit=100`,
        setProductList,
        setFetchDone,
      )
    }
  }, [currentLocation])


  console.log(productList)


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
            {fetchDone && currentLocation !== "/home" ? (
              <AutoFlex>
                {productList.products.map((entry) => (
                  <ProductItem
                    product={entry}
                    key={entry.id}
                  />
                ))}
              </AutoFlex>
            ) : (
              <AutoFlex>
                {superCode.map((entry) => (
                  <ProductItem
                    product={entry}
                    key={entry.id}
                  />
                ))}
              </AutoFlex>
            )}
          </main>
          <Navbar handleSearchClick={handleSearchClick} />
        </>
      )}
    </>
  )
}
