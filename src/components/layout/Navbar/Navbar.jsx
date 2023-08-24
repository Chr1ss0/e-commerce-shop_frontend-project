import React, { useState } from "react"
import styles from "./Navbar.module.scss"
import homeIcon from "../../../assets/images/home.svg"
import searchIcon from "../../../assets/images/search.svg"
import bagIcon from "../../../assets/images/bag.svg"
import { Link } from "react-router-dom"

const Navbar = ({ handleSearchClick }) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to={"/home"}>
            <img
              src={homeIcon}
              alt="Home Icon"
            />
          </Link>
        </li>
        <li>
          <img
            src={bagIcon}
            alt="Bag Icon"
          />
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
