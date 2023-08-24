import React from "react"
import styles from "./ProductItem.module.scss"
import ratingIcon from "../../../assets/images/rating.svg"
import addItemIcon from "../../../assets/images/addItem.svg"
import { Link } from "react-router-dom"

const ProductItem = ({ product }) => {
  const imageLink = product.images[2] ? product.images[2] : product.images[0]
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2)

  const imageStyle = {
    backgroundImage: `url(${imageLink})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    mixBlendMode: "multiply",
  }

  return (
    <Link to={`/products/${product.id}`}>
      <article className={styles.product}>
        <div
          className={styles.image}
          style={imageStyle}></div>
        <div className={styles.rating}>
          <img
            src={ratingIcon}
            alt="Star-icon"
          />
          <p>{product.rating.toFixed(1)}</p>
        </div>
        <div className={styles.title}>
          <h3>{product.title}</h3>
        </div>
        <p className={styles.discount}>${discountedPrice}</p>
        <div className={styles.add}>
          <p>${product.price.toFixed(2)}</p>
          <img
            src={addItemIcon}
            alt="Plus Icon"
          />
        </div>
      </article>
    </Link>
  )
}

export default ProductItem
