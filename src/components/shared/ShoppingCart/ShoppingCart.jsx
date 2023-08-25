import React, { useContext } from "react"
import styles from "./ShoppingCart.module.scss"
import Navbar from "../../layout/Navbar/Navbar"
import { useCart } from "../../../context/shoppingCartContext"
import { ProductsContext } from "../../../context/productsContext"
import ShoppingCartItem from "./../ShoppingCartItem/ShoppingCartitem"
import { Link } from "react-router-dom"

const ShoppingCart = () => {
  const { cartItems, setCartItems, setShoppingCart } = useCart()
  const { displayedProducts, productList } = useContext(ProductsContext)

  const clearShoppingCart = () => {
    setShoppingCart(false)
    setCartItems({})
  }

  return (
    <>
      <section className={styles.cart}>
        <h1 className={styles.header}>Shopping Cart</h1>

        {productList.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <ShoppingCartItem
                key={product.id}
                product={product}
              />
            )
          }
        })}

        <Link to={"/checkout"}>
          <button
            className={styles.checkout}
            onClick={clearShoppingCart}>
            Checkout
          </button>
        </Link>
      </section>
      <Navbar />
    </>
  )
}

export default ShoppingCart
