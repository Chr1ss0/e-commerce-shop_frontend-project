import styles from "./Navbar.module.scss"
import homeIcon from "../../../assets/images/home.svg"
import searchIcon from "../../../assets/images/search.svg"
import bagIcon from "../../../assets/images/bag.svg"
import BagIcon from "../../../assets/svg/BagIcon"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCart } from "../../../context/shoppingCartContext"

const Navbar = ({ handleSearchClick }) => {
  const { shoppingCart, cartItems, setShoppingCart, isBlue, setIsBlue } =
    useCart()

  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    // Calculate the total number of items in the cart
    const itemCount = Object.values(cartItems).reduce(
      (total, count) => total + count,
      0,
    )
    setCartItemCount(itemCount)
  }, [cartItems])

  const handleShoppingCart = () => {
    setShoppingCart(!shoppingCart)
  }

  return (
    <>
      <nav className={styles.navbar}>
        {/* {shoppingCart && <ShoppingCart />} */}
        <ul>
          <li>
            <Link to={"/home"}>
              <img
                src={homeIcon}
                alt="Home Icon"
              />
            </Link>
          </li>
          <li onClick={handleShoppingCart}>
            <BagIcon
              className={styles.bag}
              fill={shoppingCart ? "#364fd4" : "#B9C1CC"}
            />
            {cartItemCount > 0 && (
              <span className={styles.cartcount}>{cartItemCount}</span>
            )}
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
    </>
  )
}

export default Navbar
