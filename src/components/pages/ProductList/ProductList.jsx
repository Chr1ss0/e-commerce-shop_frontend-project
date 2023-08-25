import styles from "./ProductList.module.scss"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import Select from "@mui/material/Select"
import FormControl from "@mui/material/FormControl"
import CircularProgress from "@mui/material/CircularProgress"
import { useEffect, useState, useRef, useContext } from "react"
import { searchInputContext } from "../../../context/searchInputContext"
import { ProductsContext } from "../../../context/productsContext.js"
import { superCodeObject } from "../../../utility/superCodeData.js"
import { apiBaseLink } from "../../../utility/apiBaseLink.js"
import ProductItem from "../../shared/ProductItem/ProductItem"
import Navbar from "../../layout/Navbar/Navbar"
import { AutoFlex } from "../../shared/AutoFlex/AutoFlex.jsx"
import { Searchbar } from "../../shared/Searchbar/Searchbar"
import { FilterMenu } from "../../shared/FilterMenu/FilterMenu"
import { useCart } from "../../../context/shoppingCartContext"
import ShoppingCart from "../../shared/ShoppingCart/ShoppingCart"

export const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [filterMenu, setFilterMenu] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const { setInputFocus } = useContext(searchInputContext)
  const { displayedProducts, setProductList, setDisplayedProducts } =
    useContext(ProductsContext)
  const inputRefProductList = useRef(null)

  const { cartItems, shoppingCart } = useCart()

  console.log(cartItems)

  const handleSearchClick = () => {
    setInputFocus(true)
    inputRefProductList.current.focus()
  }

  const handleSortLowestPrice = () => {
    setDisplayedProducts((prevProducts) =>
      [...prevProducts].sort((a, b) => a.price - b.price),
    )
  }

  const handleSortHighestPrice = () => {
    setDisplayedProducts((prevProducts) =>
      [...prevProducts].sort((a, b) => b.price - a.price),
    )
  }

  const handleSortHighestDiscount = () => {
    setDisplayedProducts((prevProducts) =>
      [...prevProducts].sort(
        (a, b) => b.discountPercentage - a.discountPercentage,
      ),
    )
  }

  const handleChange = (event) => {
    setSelectedOption(event.target.value)

    if (event.target.value === "lowest") {
      handleSortLowestPrice()
    } else if (event.target.value === "highest") {
      handleSortHighestPrice()
    } else if (event.target.value === "discount") {
      handleSortHighestDiscount()
    }
  }

  // useEffect(() => {
  //   fetch(`${apiBaseLink}?limit=100`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Fetch failed")
  //       }
  //       return response.json()
  //     })
  //     .then((products) => {
  //       setProductList((prevProductList) => [
  //         ...products.products,
  //         ...superCodeObject.products,
  //       ])
  //       setIsLoading(false)
  //     })
  //     .catch((error) => console.log(error.message))
  // }, [])

  return (
    <>
      {/* {isLoading ? (
        <section>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}>
            <CircularProgress />
          </Box>
        </section>
      ) : ( */}
      {shoppingCart ? (
        <ShoppingCart />
      ) : (
        <section className={styles.wrapper}>
          {filterMenu ? (
            <FilterMenu onClickBack={() => setFilterMenu(false)} />
          ) : (
            <>
              <Searchbar
                onClickP={() => setFilterMenu((prevState) => true)}
                inputRefProductList={inputRefProductList}
              />
              <div>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Sort:
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={selectedOption}
                    onChange={handleChange}
                    autoWidth
                    label="Sort:">
                    <MenuItem value={"lowest"}>Lowest Price</MenuItem>
                    <MenuItem value={"highest"}>Highest Price</MenuItem>
                    <MenuItem value={"discount"}>Biggest Discount</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <section>
                <AutoFlex>
                  {displayedProducts.map((product) => (
                    <ProductItem
                      key={product.id}
                      product={product}
                    />
                  ))}
                </AutoFlex>
              </section>
              <Navbar handleSearchClick={handleSearchClick} />
            </>
          )}
        </section>
      )}
    </>
  )
}
