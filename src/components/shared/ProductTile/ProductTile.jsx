import styles from "./ProductTile.module.scss"
import ratingStarSvg from "../../../assets/images/rating.svg"
import addButtonSvg from "../../../assets/images/addItem.svg"

export const ProductTile = ({ product }) => {
  const { thumbnail, title, rating, price } = product
  return (
    <article className={styles.container}>
      <div className={styles.image_background}>
        <img
          className={styles.image}
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className={styles.rating_wrapper}>
        <img
          src={ratingStarSvg}
          alt="star"
        />
        <p className={styles.rating}>{rating}</p>
      </div>
      <div className={styles.flex}>
        <div className={styles.title_price_wrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>${price}</p>
        </div>
        <img
          src={addButtonSvg}
          alt="add button"
        />
      </div>
    </article>
  )
}
