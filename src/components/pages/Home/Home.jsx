import Navbar from "../../layout/Navbar/Navbar"
import styles from "../Home/Home.module.scss"
import { Searchbar } from "../../shared/Searchbar/Searchbar.jsx"
import { CategoryMenu } from "../../layout/CategoryMenu/CategoryMenu.jsx"
import { ListMenuHome } from "../../layout/ListMenuHome/ListMenuHome.jsx"
import { AutoFlex } from "../../shared/AutoFlex/AutoFlex.jsx"
import { useEffect, useState } from "react"
import { apiBaseLink } from "../../../utility/apiBaseLink.js"
import { fetchList } from "../../../functions/fetchList.js"
import ProductItem from "../../shared/ProductItem/ProductItem.jsx"
import { FilterMenu } from "../../shared/FilterMenu/FilterMenu.jsx"

export const Home = () => {
  const [productList, setProductList] = useState([])
  const [fetchDone, setFetchDone] = useState(false)
  const [filterMenu, setFilterMenu] = useState(false)

  useEffect(() => {
    fetchList(apiBaseLink, setProductList, setFetchDone)
  }, [])

  return (
    <>
      {filterMenu ? (
        <FilterMenu onClickP={() => setFilterMenu(false)} />
      ) : (
        <>
          <header className={styles.header}>
            <h1 className={styles.headline}>Find your favourite Product</h1>
          </header>
          <Searchbar onClickP={() => setFilterMenu((prevState) => true)} />
          <CategoryMenu />
          <main>
            <ListMenuHome currentSearch={"Popular"} />
          </main>
          <Navbar />
        </>
      )}
    </>
  )
}
