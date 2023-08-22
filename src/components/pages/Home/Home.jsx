import Navbar from "../../layout/Navbar/Navbar"
import styles from "../Home/Home.module.scss"
import { Searchbar } from "../../shared/Searchbar/Searchbar.jsx"
import { CategoryMenu } from "../../layout/CategoryMenu/CategoryMenu.jsx"
import { ListMenuHome } from "../../layout/ListMenuHome/ListMenuHome.jsx"
import { AutoFlex } from "../../shared/AutoFlex/AutoFlex.jsx"
import { useContext, useEffect, useRef, useState } from "react"
import { apiBaseLink } from "../../../utility/apiBaseLink.js"
import { fetchList } from "../../../functions/fetchList.js"
import ProductItem from "../../shared/ProductItem/ProductItem.jsx"
import { FilterMenu } from "../../shared/FilterMenu/FilterMenu.jsx"
import { ProductsContext } from "../../../context/productsContext.js"
import { searchInputContext } from "../../../context/searchInputContext"

export const Home = () => {
  const [fetchDone, setFetchDone] = useState(false)
  const [filterMenu, setFilterMenu] = useState(false)
  const { productList } = useContext(ProductsContext)

  //State für Inputfeld Fokus
  const { inputFocus, setInputFocus } = useContext(searchInputContext)
  const inputRefHome = useRef(null)

  const handleSearchClick = () => {
    setInputFocus(true)
    inputRefHome.current.focus()
  }

  //Fetch for refresh

  return (
    <>
      {filterMenu ? (
        <FilterMenu onClickP={() => setFilterMenu(false)} />
      ) : (
        <>
          <header className={styles.header}>
            <h1 className={styles.headline}>Find your favourite Product</h1>
          </header>
          <Searchbar
            onClickP={() => setFilterMenu((prevState) => true)}
            inputRefHome={inputRefHome}
            setInputFocus={setInputFocus}
          />
          <CategoryMenu />
          <main>
            <ListMenuHome currentSearch={"Popular"} />
            <AutoFlex>
              {productList.products.map((product) => (
                <ProductItem
                  product={product}
                  key={product.id}
                />
              ))}
            </AutoFlex>
          </main>
          <Navbar handleSearchClick={handleSearchClick} />
        </>
      )}
    </>
  )
}
