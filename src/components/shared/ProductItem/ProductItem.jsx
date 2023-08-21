import React from "react"
import styles from "./ProductItem.module.scss"

const ProductItem = ({ product }) => {
  return (
    <article className={styles.product}>
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>
      <div>
        <p>{product.rating}</p>
      </div>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <div>
        <button>+</button>
      </div>
    </article>
  )
}

export default ProductItem
