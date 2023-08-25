import "./App.scss"
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { FilterContext } from "./context/filterContext.js"
import { ProductsContext } from "./context/productsContext.js"
import { searchInputContext } from "./context/searchInputContext"
import { OnboardingScreen } from "./components/pages/OnboardingScreen/OnboardingScreen.jsx"
import { ProductList } from "./components/pages/ProductList/ProductList.jsx"
import { ProductDetails } from "./components/pages/ProductDetails/ProductDetails.jsx"
import { Home } from "./components/pages/Home/Home.jsx"
import { apiBaseLink } from "./utility/apiBaseLink"
import { superCodeObject } from "./utility/superCodeData"
import { ShoppingCartProvider } from "./context/shoppingCartContext"
import Checkout from "./components/pages/Checkout/Checkout"

function App() {
  const [electronicsFilter, setElectronicsFilter] = useState(false)
  const [lifeStyleFilter, setLifeStyleFilter] = useState(false)
  const [homeFilter, setHomeFilter] = useState(false)
  const [clothesFilter, setClothesFilter] = useState(false)
  const [accessoriesFilter, setAccessoriesFilter] = useState(false)
  const [vehicleFilter, setVehicleFilter] = useState(false)
  const [menFilter, setMenFilter] = useState(false)
  const [womenFilter, setWomanFilter] = useState(false)

  const [price0_20Filter, setPrice0_20Filter] = useState(false)
  const [price20_50Filter, setPrice20_50Filter] = useState(false)
  const [price50_100Filter, setPrice50_100Filter] = useState(false)
  const [price100Filter, setPrice100Filter] = useState(false)

  const [appleFilter, setAppleFilter] = useState(false)
  const [samsungFilter, setSamsungFilter] = useState(false)
  const [superCodeFilter, setSuperCodeFilter] = useState(false)
  const [topSweaterFilter, setTopSweaterFilter] = useState(false)
  const [ghaziFilter, setGhaziFilter] = useState(false)
  const [vintageFilter, setVintageFilter] = useState(false)
  const [warehouseFilter, setWarehouseFilter] = useState(false)
  const [louisWillFilter, setLoisWillFilter] = useState(false)
  const [skmeiFilter, setSkmeiFilter] = useState(false)
  const [easternWatchFilter, setEasternWatchFilter] = useState(false)

  const [productList, setProductList] = useState([])
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [displayedCategoryProducts, setDisplayedCategoryProducts] = useState([])

  const [inputFocus, setInputFocus] = useState(false)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${apiBaseLink}?limit=100`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch failed")
        }
        return response.json()
      })
      .then((products) => {
        setProductList((prevProductList) => [
          ...products.products,
          ...superCodeObject.products,
        ])
        setIsLoading(false)
      })
      .catch((error) => console.log(error.message))
  }, [])

  return (
    <>
      <FilterContext.Provider
        value={{
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
        }}>
        <ProductsContext.Provider
          value={{
            productList,
            setProductList,
            displayedProducts,
            setDisplayedProducts,
            displayedCategoryProducts,
            setDisplayedCategoryProducts,
          }}>
          <searchInputContext.Provider
            value={{
              inputFocus,
              setInputFocus,
            }}>
            <ShoppingCartProvider displayedProducts={displayedProducts}>
              <Routes>
                <Route
                  path={"/"}
                  element={<OnboardingScreen />}
                />
                <Route
                  path={"/home"}
                  element={<Home />}
                />
                <Route
                  path={"/home/:category"}
                  element={<Home />}
                />
                <Route
                  path={"/products"}
                  element={<ProductList />}
                />
                <Route
                  path={"/products/:id"}
                  element={<ProductDetails />}
                />
                <Route
                  path={"/checkout"}
                  element={<Checkout />}
                />
              </Routes>
            </ShoppingCartProvider>
          </searchInputContext.Provider>
        </ProductsContext.Provider>
      </FilterContext.Provider>
    </>
  )
}

export default App
