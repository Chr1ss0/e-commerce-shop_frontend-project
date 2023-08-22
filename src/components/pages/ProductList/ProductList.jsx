import styles from "./ProductList.module.scss"
import { apiBaseLink } from "../../../utility/apiBaseLink.js"
import { useEffect, useState } from "react"
import ProductItem from "../../shared/ProductItem/ProductItem"
import Navbar from "../../layout/Navbar/Navbar"
import { AutoFlex } from "../../shared/AutoFlex/AutoFlex.jsx"
import { Searchbar } from "../../shared/Searchbar/Searchbar"
import { FilterMenu } from "../../shared/FilterMenu/FilterMenu"

export const ProductList = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filterMenu, setFilterMenu] = useState(false)

  useEffect(() => {
    fetch(`${apiBaseLink}?limit=100`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch failed")
        }
        return response.json()
      })
      .then((products) => {
        setProducts(products.products)
        setIsLoading(false)
      })
      .catch((error) => console.log(error.message))
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <section className={styles.wrapper}>
      {filterMenu ? (
        <FilterMenu onClickP={() => setFilterMenu(false)} />
      ) : (
        <>
          <Searchbar onClickP={() => setFilterMenu((prevState) => true)} />
          <p className={styles.sort}>
            Sort by: <span>Lowest Price</span>
          </p>
          <section>
            <AutoFlex>
              {products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                />
              ))}
            </AutoFlex>
          </section>
          <Navbar />
        </>
      )}
    </section>
  )
}
