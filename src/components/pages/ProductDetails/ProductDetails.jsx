import { useEffect, useState } from "react"
import styles from "../ProductDetails/ProductDetails.module.scss"
import { apiBaseLink } from "../../../utility/apiBaseLink"

export const ProductDetails = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch(`${apiBaseLink}/1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("ProductDetails fetch went wrong")
        }
        return response.json()
      })
      .then((productData) => setProduct(productData))
      .catch((error) => console.log(error.message))
  }, [])

  console.log(product)

  let [productCounter, setProductCounter] = useState(1)

  return (
    <>
      <section className={styles.fullpage}>
        <div className={styles.header}>
          <button type="button">back</button>
          <h2 key={product.id}> {product.title}</h2>
        </div>
        <article className={styles.middle}>
          <div>
            <img
              src={product.thumbnail}
              alt="product image"
            />
          </div>
          <div className={styles.select}>
            <div>
              <h3>{product.title}</h3>
              <p>{product.rating}</p>
            </div>
            <div className={styles.counter}>
              <button
                onClick={() =>
                  setProductCounter(
                    (prevProductCounter) => prevProductCounter - 1,
                  )
                }
                type="button">
                -
              </button>
              <p>{productCounter}</p>
              <button
                onClick={() =>
                  setProductCounter(
                    (prevProductCounter) => prevProductCounter + 1,
                  )
                }
                type="button">
                +
              </button>
            </div>
          </div>
          <div>
            <p>{product.stock} pieces in Stock</p>
          </div>
        </article>
        <article>
          <h4>Desciption</h4>
          <p>{product.description}.</p>
          <button type="submit">Add to Chart</button>
        </article>
      </section>
    </>
  )
}
