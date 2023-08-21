import "./App.scss"
import { Route, Routes } from "react-router-dom"
import { OnboardingScreen } from "./components/pages/OnboardingScreen/OnboardingScreen.jsx"
import { Home } from "./components/pages/Home/Home.jsx"
import { ProductList } from "./components/pages/ProductList/ProductList.jsx"
import { ProductDetails } from "./components/pages/ProductDetails/ProductDetails.jsx"

function App() {
  return (
    <>
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
    </>
  )
}

export default App
