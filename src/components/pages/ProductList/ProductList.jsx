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
import { ProductsContext } from "../../../context/productsContext.js"
import { fetchList } from "../../../functions/fetchList.js"
import { superCode, superCodeObject } from "../../../utility/superCodeArray.js"

export const ProductList = () => {
  // const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [fetchDone, setFetchDone] = useState(false)
  const [filterMenu, setFilterMenu] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const inputRefProductList = useRef(null)
  const { inputFocus, setInputFocus } = useContext(searchInputContext)

  const {
    displayedProducts,
    setProductList,
    setDisplayedProducts,
    productList,
  } = useContext(ProductsContext)

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

  console.log(productList)

  // useEffect(() => {
  //   fetchList(
  //     `${apiBaseLink}?limit=100`,
  //     setProductList([...productList.products, ...superCodeObject.products]),
  //     setFetchDone,
  //   )
  // }, [])

  // useEffect(() => {
  //   fetchList(`${apiBaseLink}?limit=100`, (data) => {
  //     // Update productList with the fetched data
  //     setProductList({
  //       ...productList,
  //       products: [...productList, ...superCode],
  //     })
  //     setFetchDone(true)
  //   })
  // }, [])

  // refactor LoadingState

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
