import React, { useContext } from "react"
import styles from "./ShoppingCart.module.scss"
import Navbar from "../../layout/Navbar/Navbar"
import { useCart } from "../../../context/shoppingCartContext"
import { ProductsContext } from "../../../context/productsContext"
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartitem"
import { Link } from "react-router-dom"

const ShoppingCart = () => {
  const { cartItems, setCartItems, setShoppingCart } = useCart()
  const { displayedProducts } = useContext(ProductsContext)

  console.log(displayedProducts)

  const clearShoppingCart = () => {
    setShoppingCart(false)
    setCartItems({})
  }

  return (
    <>
      <section className={styles.cart}>
        {displayedProducts.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <ShoppingCartItem
                key={product.id}
                product={product}
              />
            )
          }
        })}
      </section>
      <Link to={"/checkout"}>
        <button onClick={clearShoppingCart}>Checkout</button>
      </Link>
      <Navbar />
    </>
  )
}

export default ShoppingCart
