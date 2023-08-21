import Navbar from "../../layout/Navbar/Navbar"
import styles from "./Home.module.scss"
import { Searchbar } from "../../shared/Searchbar/Searchbar.jsx"
import { CategoryMenu } from "../../layout/CategoryMenu/CategoryMenu.jsx"
import { ListMenuHome } from "../../layout/ListMenuHome/ListMenuHome.jsx"
import { AutoFlex } from "../../shared/AutoFlex/AutoFlex.jsx"
import { ProductTile } from "../../shared/ProductTile/ProductTile.jsx"
import { useEffect, useState } from "react"
import { apiBaseLink } from "../../../utility/apiBaseLink.js"
import { fetchProductList } from "../../../functions/ProductFetch.js"

export const Home = () => {
  const [productList, setProductList] = useState([])
  const [fetchDone, setFetchDone] = useState(false)

  useEffect(() => {
    fetchProductList(apiBaseLink, setProductList, setFetchDone)
  }, [])

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headline}>Find your favourite Product</h1>
      </header>
      <Searchbar />
      <CategoryMenu />
      <main>
        <ListMenuHome currentSearch={"Popular"} />
        {fetchDone && (
          <AutoFlex>
            {productList.map((product) => (
              <ProductTile
                product={product}
                key={product.id}
              />
            ))}
          </AutoFlex>
        )}
      </main>
    </>
  )
}
