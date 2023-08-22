import React from "react"
import styles from "./ProductItem.module.scss"
import ratingIcon from "../../../assets/images/rating.svg"
import addItemIcon from "../../../assets/images/addItem.svg"

const ProductItem = ({ product }) => {
  console.log(product)

  const imageLink = product.images[2] ? product.images[2] : product.images[0]

  const imageStyle = {
    backgroundImage: `url(${imageLink})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    mixBlendMode: "multiply",
  }

  return (
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
      <div className={styles.add}>
        <p>${product.price}</p>
        <img
          src={addItemIcon}
          alt="Plus Icon"
        />
      </div>
    </article>
  )
}

export default ProductItem
