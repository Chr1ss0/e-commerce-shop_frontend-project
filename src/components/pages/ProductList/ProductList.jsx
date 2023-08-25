import styles from "./ProductList.module.scss"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import FormControl from "@mui/material/FormControl"
import { useState, useRef, useContext } from "react"
import { searchInputContext } from "../../../context/searchInputContext"
import { ProductsContext } from "../../../context/productsContext.js"
import ProductItem from "../../shared/ProductItem/ProductItem"
import Navbar from "../../layout/Navbar/Navbar"
import { AutoFlex } from "../../shared/AutoFlex/AutoFlex.jsx"
import { Searchbar } from "../../shared/Searchbar/Searchbar"
import { FilterMenu } from "../../shared/FilterMenu/FilterMenu"
import { useCart } from "../../../context/shoppingCartContext"
import ShoppingCart from "../../shared/ShoppingCart/ShoppingCart"

export const ProductList = () => {
  const [filterMenu, setFilterMenu] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const { setInputFocus } = useContext(searchInputContext)
  const { displayedProducts, setProductList, setDisplayedProducts } =
    useContext(ProductsContext)
  const inputRefProductList = useRef(null)

  const { shoppingCart } = useCart()

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

  return (
    <>
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
                {displayedProducts.length !== 0 ? (
                  <AutoFlex>
                    {displayedProducts.map((product) => (
                      <ProductItem
                        key={product.id}
                        product={product}
                      />
                    ))}
                  </AutoFlex>
                ) : (
                  <p className={styles.notFound}>No products found... </p>
                )}
              </section>
              <Navbar handleSearchClick={handleSearchClick} />
            </>
          )}
        </section>
      )}
    </>
  )
}
