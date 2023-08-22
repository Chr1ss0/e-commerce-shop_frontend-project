import "./App.scss"
import { Route, Routes } from "react-router-dom"
import { OnboardingScreen } from "./components/pages/OnboardingScreen/OnboardingScreen.jsx"
import { Home } from "./components/pages/Home/Home.jsx"
import { ProductList } from "./components/pages/ProductList/ProductList.jsx"
import { ProductDetails } from "./components/pages/ProductDetails/ProductDetails.jsx"
import { useState } from "react"
import { FilterContext } from "./context/filterContext.js"
import { ProductsContext } from "./context/productsContext.js"

function App() {
  const [gadgetFilter, setGadgetFilter] = useState(false)
  const [electronicsFilter, setElectronicsFilter] = useState(false)
  const [mobileFilter, setMobileFilter] = useState(false)
  const [clothFilter, setClothFilter] = useState(false)
  const [computerFilter, setComputerFilter] = useState(false)
  const [foodFilter, setFoodFilter] = useState(false)
  const [dragFilter, setDragFilter] = useState(false)
  const [furnitureFilter, setFurnitureFilter] = useState(false)
  const [babyFilter, setBabyFilter] = useState(false)
  const [cosmeticsFilter, setCosmeticsFilter] = useState(false)
  const [gymFilter, setGymFilter] = useState(false)
  const [price0_20Filter, setPrice0_20Filter] = useState(false)
  const [price20_50Filter, setPrice20_50Filter] = useState(false)
  const [price50_100Filter, setPrice50_100Filter] = useState(false)
  const [price100Filter, setprice100Filter] = useState(false)
  const [appleFilter, setAppleFilter] = useState(false)
  const [nikeFilter, setNikeFilter] = useState(false)
  const [adidasFilter, setAdidasFilter] = useState(false)
  const [lenovoFilter, setLenovoFilter] = useState(false)
  const [sonyFilter, setSonyFilter] = useState(false)
  const [nescafeFilter, setNescafeFilter] = useState(false)
  const [diorFilter, setDiorFilter] = useState(false)
  const [legoFilter, setLegoFilter] = useState(false)
  const [braunFilter, setBraunFilter] = useState(false)
  const [lorealFilter, setLorealFilter] = useState(false)
  const [zaraFilter, setZaraFilter] = useState(false)

  const [productList, setProductList] = useState([])
  const [displayedProducts, setDisplayedProducts] = useState([])

  return (
    <>
      <FilterContext.Provider
        value={{
          gadgetFilter,
          setGadgetFilter,
          electronicsFilter,
          setElectronicsFilter,
          mobileFilter,
          setMobileFilter,
          clothFilter,
          setClothFilter,
          computerFilter,
          setComputerFilter,
          foodFilter,
          setFoodFilter,
          dragFilter,
          setDragFilter,
          furnitureFilter,
          setFurnitureFilter,
          babyFilter,
          setBabyFilter,
          cosmeticsFilter,
          setCosmeticsFilter,
          gymFilter,
          setGymFilter,
          price0_20Filter,
          setPrice0_20Filter,
          price20_50Filter,
          setPrice20_50Filter,
          price50_100Filter,
          setPrice50_100Filter,
          price100Filter,
          setprice100Filter,
          appleFilter,
          setAppleFilter,
          nikeFilter,
          setNikeFilter,
          adidasFilter,
          setAdidasFilter,
          lenovoFilter,
          setLenovoFilter,
          sonyFilter,
          setSonyFilter,
          nescafeFilter,
          setNescafeFilter,
          diorFilter,
          setDiorFilter,
          legoFilter,
          setLegoFilter,
          braunFilter,
          setBraunFilter,
          lorealFilter,
          setLorealFilter,
          zaraFilter,
          setZaraFilter,
        }}>
        <ProductsContext.Provider
          value={{
            productList,
            setProductList,
            displayedProducts,
            setDisplayedProducts,
          }}>
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
              path={"/products"}
              element={<ProductList />}
            />
            <Route
              path={"/products/:id"}
              element={<ProductDetails />}
            />
          </Routes>
        </ProductsContext.Provider>
      </FilterContext.Provider>
    </>
  )
}

export default App
