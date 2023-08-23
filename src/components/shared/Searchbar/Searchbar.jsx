import styles from "./Searchbar.module.scss"
import { Link } from "react-router-dom"
import searchSvg from "../../../assets/images/search.svg"
import filterSvg from "../../../assets/images/filter.svg"
import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../../context/productsContext.js"

export const Searchbar = ({ onClickP }) => {
  //In Css packen Label for Input
  const inputStyle = {
    paddingLeft: "40px", // Adjust this value to control the space for the SVG
    backgroundImage: `url(${searchSvg})`, // Use the imported SVG as the background image
    backgroundSize: "20px 20px", // Adjust the size of the SVG
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center", // Adjust the position of the SVG
  }
  const { productList, setDisplayedProductList } = useContext(ProductsContext)
  const [inputSearch, setInputSearch] = useState("")

  useEffect(() => {
    const getDisplayedProductList = productList.filter
  }, [])

  return (
    <div className={styles.flex_wrapper}>
      <input
        className={styles.input}
        value={inputSearch}
        onChange={(event) => setInputSearch(event.target.value)}
        type="text"
        id="searchbar"
        style={inputStyle}
        placeholder={"Search"}
      />

      <div
        className={styles.button}
        onClick={onClickP}>
        <img
          className={styles.button_image}
          src={filterSvg}
          alt="filter"
        />
      </div>
    </div>
  )
}
