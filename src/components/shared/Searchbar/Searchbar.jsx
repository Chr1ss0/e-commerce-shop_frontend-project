import styles from "./Searchbar.module.scss"
import { Link } from "react-router-dom"
import searchSvg from "../../../assets/images/search.svg"
import filterSvg from "../../../assets/images/filter.svg"
import { useContext } from "react"
import { searchInputContext } from "../../../context/searchInputContext"

export const Searchbar = ({ onClickP, inputRefHome, inputRefProductList }) => {
  const { inputFocus, setInputFocus } = useContext(searchInputContext)

  const inputRefLinks = inputRefHome ? inputRefHome : inputRefProductList

  //In Css packen
  const inputStyle = {
    paddingLeft: "40px", // Adjust this value to control the space for the SVG
    backgroundImage: `url(${searchSvg})`, // Use the imported SVG as the background image
    backgroundSize: "20px 20px", // Adjust the size of the SVG
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center", // Adjust the position of the SVG
  }

  return (
    <div className={styles.flex_wrapper}>
      <input
        className={styles.input}
        type="text"
        id="searchbar"
        style={inputStyle}
        placeholder={"Search"}
        ref={inputRefLinks}
        onFocus={() => setInputFocus(true)}
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
