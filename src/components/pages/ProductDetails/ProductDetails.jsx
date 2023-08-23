import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styles from "../ProductDetails/ProductDetails.module.scss"
import { apiBaseLink } from "../../../utility/apiBaseLink"
import { Rating } from "../../../assets/svg/Rating"
import { LeftArrow } from "../../../assets/svg/LeftArrow"
import { Minus } from "../../../assets/svg/Minus"
import { Plus } from "../../../assets/svg/Plus"
import Navbar from "../../layout/Navbar/Navbar.jsx"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
import { superCode } from "../../../utility/superCodeArray"

export const ProductDetails = () => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [productCounter, setProductCounter] = useState(1)

  const navigator = useNavigate()
  const productId = useParams().id

  const handleSearchClick = () => {
    navigator("/products")
  }

  useEffect(() => {
    if (productId <= 100) {
      fetch(`${apiBaseLink}/${productId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("ProductDetails fetch went wrong")
          }
          return response.json()
        })
        .then((product) => {
          setProduct(product)
          setIsLoading(false)
        })
        .catch((error) => console.log(error.message))
    } else {
      setProduct(...superCode)
      setIsLoading(false)
    }
  }, [])

  if (productCounter < 1) {
    setProductCounter((prevProductCounter) => prevProductCounter + 1)
  } else if (productCounter > product.stock) {
    setProductCounter((prevProductCounter) => prevProductCounter - 1)
  }

  // const navigator = useNavigate()

  return (
    <>
      {isLoading ? (
        <section>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}>
            <CircularProgress />
          </Box>
        </section>
      ) : (
        <>
          <section className={styles.fullpage}>
            <div className={styles.header}>
              <button onClick={() => navigator(-1)}>
                <LeftArrow />
              </button>
              <h2>{product.title}</h2>
            </div>
            <article className={styles.middle}>
              <div>
                <img
                  className={styles.image}
                  src={product.thumbnail}
                  alt="Product image"
                />
              </div>
              <div className={styles.select}>
                <div>
                  <h3>{product.title}</h3>
                </div>
                <div className={styles.counter}>
                  <div className={styles.counter_button_minus}>
                    <button
                      className={styles.test}
                      onClick={() =>
                        setProductCounter(
                          (prevProductCounter) => prevProductCounter - 1,
                        )
                      }
                      type="button">
                      <Minus />
                    </button>
                  </div>
                  <p>{productCounter}</p>
                  <div className={styles.counter_button_plus}>
                    <button
                      onClick={() =>
                        setProductCounter(
                          (prevProductCounter) => prevProductCounter + 1,
                        )
                      }
                      type="button">
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p className={styles.rating}>
                  <Rating /> {product.rating.toFixed(1)}
                </p>
                <div className={styles.stock}>
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
          <Navbar handleSearchClick={handleSearchClick} />
        </>
      )}
    </>
  )
}
