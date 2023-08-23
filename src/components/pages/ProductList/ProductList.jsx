import styles from "./ProductList.module.scss"
import { apiBaseLink } from "../../../utility/apiBaseLink.js"
import { useEffect, useState, useRef, useContext } from "react"
import ProductItem from "../../shared/ProductItem/ProductItem"
import Navbar from "../../layout/Navbar/Navbar"
import { AutoFlex } from "../../shared/AutoFlex/AutoFlex.jsx"
import { Searchbar } from "../../shared/Searchbar/Searchbar"
import { FilterMenu } from "../../shared/FilterMenu/FilterMenu"
import { searchInputContext } from "../../../context/searchInputContext"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

export const ProductList = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filterMenu, setFilterMenu] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const inputRefProductList = useRef(null)
  const { inputFocus, setInputFocus } = useContext(searchInputContext)

  const handleSearchClick = () => {
    setInputFocus(true)
    inputRefProductList.current.focus()
  }

  const handleSortLowestPrice = () => {
    setProducts((prevProducts) =>
      [...prevProducts].sort((a, b) => a.price - b.price),
    )
  }

  const handleSortHighestPrice = () => {
    setProducts((prevProducts) =>
      [...prevProducts].sort((a, b) => b.price - a.price),
    )
  }

  const handleSortHighestDiscount = () => {
    setProducts((prevProducts) =>
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

  return (
    <>
      {isLoading ? (
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
      ) : (
        <section className={styles.wrapper}>
          {filterMenu ? (
            <FilterMenu onClickP={() => setFilterMenu(false)} />
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
                  {products.map((product) => (
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
