import React from "react"
import { useCart } from "../../../context/shoppingCartContext"
import styles from "./ShoppingCartItem.module.scss"

const ShoppingCartItem = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart()

  const productQuantity = cartItems[product.id]

  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2)

  const updatedDiscountedPrice = (discountedPrice * productQuantity).toFixed(2)
  const updatedPrice = (product.price * productQuantity).toFixed(2)

  return (
    <div>
      <h1>Titel:{product.title}</h1>
      <button onClick={() => removeFromCart(product.id)}>-</button>
      <h1>Anzahl:{cartItems[product.id]}</h1>
      <button onClick={() => addToCart(product.id)}>+</button>
      <h1> Discounted Price: {updatedDiscountedPrice} </h1>
      <h1>Price: {updatedPrice} </h1>
    </div>
  )
}

export default ShoppingCartItem
