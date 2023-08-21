import { useEffect, useState } from "react"
import styles from "../ProductDetails/ProductDetails.module.scss"
import { apiBaseLink } from "../../../utility/apiBaseLink"
import { Rating } from "../../../assets/svg/Rating"
import { LeftArrow } from "../../../assets/svg/LeftArrow"
import { Minus } from "../../../assets/svg/Minus"
import { Plus } from "../../../assets/svg/Plus"


export const ProductDetails = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch(`${apiBaseLink}/54`)
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

  let [productCounter, setProductCounter] = useState(1);

  if (productCounter < 1) {
    setProductCounter((prevProductCounter) => prevProductCounter +1);
  }
  else if(productCounter > product.stock ) {
    setProductCounter((prevProductCounter) => prevProductCounter -1);
  }

  return (
    <>
      <section className={styles.fullpage}>
        <div className={styles.header}>
          <button type="button"><LeftArrow/></button>
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
            </div>
            <div className={styles.counter}>
              <div className={styles.counter_button}>
                <button className={styles.test}
                  onClick={
                    () =>
                      setProductCounter(
                        (prevProductCounter) => prevProductCounter - 1,
                        )
                      }
                  type="button">
                  <Minus/>
                </button>
              </div>
              <p>{productCounter}</p>
              <div className={styles.counter_button}>
                <button
                  onClick={() =>
                    setProductCounter(
                      (prevProductCounter) => prevProductCounter + 1,
                    )
                  }
                  type="button">
                  <Plus/>
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className={styles.rating}> <Rating/> {product.rating}</p>
            <div className={styles.stock} >
              <p>{product.stock} pieces in Stock</p>
              <h4>${product.price}</h4>
            </div>
          </div>
        </article>
        <article className={styles.description}>
          <div>
            <h4>Desciption</h4>
            <p>{product.description}.</p>
          </div>
          <button type="submit">Add to Cart</button>
        </article>
      </section>
    </>
  )
}
