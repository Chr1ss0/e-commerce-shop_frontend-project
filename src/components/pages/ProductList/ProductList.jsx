import styles from "./ProductList.module.scss"
import { apiBaseLink } from "../../../utility/apiBaseLink.js"
import { useEffect, useState } from "react"
import ProductItem from "../../shared/ProductItem/ProductItem"
import Navbar from "../../layout/Navbar/Navbar"

export const ProductList = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${apiBaseLink}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch failed")
        }
        return response.json()
      })
      .then((products) => {
        setProducts(products.products)
        setIsLoading(false)
      })
      .catch((error) => console.log(error.message))
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <section>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </section>
      <Navbar />
    </>
  )
}
