import React from "react"
import { useCart } from "../../../context/shoppingCartContext"
import styles from "./ShoppingCartItem.module.scss"
import { Minus } from "../../../assets/svg/Minus"
import { Plus } from "../../../assets/svg/Plus"
import { Rating } from "../../../assets/svg/Rating"

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
    <article className={styles.wrapper}>
      <div>
        <img
          className={styles.image}
          src={product.images[0]}
          alt="Product image"
        />
      </div>
      <div className={styles.select}>
        <div className={styles.header}>
          <h3>{product.title}</h3>
        </div>
        <div className={styles.counter}>
          <div className={styles.counter_button_minus}>
            <button
              onClick={() => removeFromCart(product.id)}
              type="button">
              <Minus />
            </button>
          </div>
          <p>{productQuantity}</p>
          <div className={styles.counter_button_plus}>
            <button
              onClick={() => addToCart(product.id)}
              type="button">
              <Plus />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.discount}>
          <p className={styles.rating}>
            <Rating /> {product.rating.toFixed(1)}
          </p>
          <h4>${updatedDiscountedPrice}</h4>
        </div>
        <div className={styles.stock}>
          <p>{product.stock} pieces in Stock</p>
          <h4>${updatedPrice}</h4>
        </div>
      </div>
    </article>
    // <div>
    //   <h1>Titel:{product.title}</h1>
    //   <button onClick={() => removeFromCart(product.id)}>-</button>
    //   <h1>Anzahl:{cartItems[product.id]}</h1>
    //   <button onClick={() => addToCart(product.id)}>+</button>
    //   <h1> Discounted Price: {updatedDiscountedPrice} </h1>
    //   <h1>Price: {updatedPrice} </h1>
    // </div>
  )
}

export default ShoppingCartItem
