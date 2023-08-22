import React from "react"
import styles from "./Navbar.module.scss"
import homeIcon from "../../../assets/images/home.svg"
import searchIcon from "../../../assets/images/search.svg"
import { Link } from "react-router-dom"

const Navbar = ({ handleSearchClick }) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to={"/home"}>
            <img
              src={homeIcon}
              alt=""
            />
          </Link>
        </li>
        <li>
          <img
            src={searchIcon}
            alt="Search Icon"
            onClick={handleSearchClick}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
