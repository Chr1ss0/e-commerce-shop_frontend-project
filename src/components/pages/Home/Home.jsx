import styles from "../Home/Home.module.scss"
import { CategoryMenu } from "../../layout/CategoryMenu/CategoryMenu.jsx"
import { useContext, useEffect, useState, useRef } from "react"
import { useLocation, useParams } from "react-router-dom"
import { ProductsContext } from "../../../context/productsContext.js"
import { searchInputContext } from "../../../context/searchInputContext"
import { AutoFlex } from "../../shared/AutoFlex/AutoFlex.jsx"
import { ListMenuHome } from "../../layout/ListMenuHome/ListMenuHome.jsx"
import { Searchbar } from "../../shared/Searchbar/Searchbar.jsx"
import ProductItem from "../../shared/ProductItem/ProductItem.jsx"
import { FilterMenu } from "../../shared/FilterMenu/FilterMenu.jsx"
import Navbar from "../../layout/Navbar/Navbar"
import { useCart } from "../../../context/shoppingCartContext"
import ShoppingCart from "../../shared/ShoppingCart/ShoppingCart"

export const Home = () => {
  const [filterMenu, setFilterMenu] = useState(false)
  const inputRefHome = useRef(null)
  const { displayedProducts, productList, setDisplayedCategoryProducts } =
    useContext(ProductsContext)
  const { setInputFocus } = useContext(searchInputContext)

  const { shoppingCart } = useCart()

  const currentLocation = useLocation().pathname
  const category = useParams().category

  const handleSearchClick = () => {
    setInputFocus(true)
    inputRefHome.current.focus()
  }

  useEffect(() => {
    if (currentLocation === "/home") {
      const getCategoryProducts = productList.filter((product) =>
        product.category.includes("supercode"),
      )
      setDisplayedCategoryProducts(getCategoryProducts)
    } else {
      const getCategories = currentLocation.split("/")
      const getCategoryProducts = productList.filter((product) =>
        product.category.includes(getCategories[2]),
      )

      setDisplayedCategoryProducts(getCategoryProducts)
    }
  }, [currentLocation, productList])

  return (
    <>
      {shoppingCart ? (
        <ShoppingCart />
      ) : (
        <>
          {filterMenu ? (
            <FilterMenu onClickBack={() => setFilterMenu(false)} />
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
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join("-")
                  }
                />{" "}
                {displayedProducts.length !== 0 ? (
                  <AutoFlex>
                    {displayedProducts.map((entry) => (
                      <ProductItem
                        product={entry}
                        key={entry.id}
                      />
                    ))}
                  </AutoFlex>
                ) : (
                  <p className={styles.notFound}>No Products found...</p>
                )}
              </main>
              <Navbar handleSearchClick={handleSearchClick} />
            </>
          )}
        </>
      )}
    </>
  )
}
