import styles from "../OnboardingScreen/OnboardingScreen.module.scss"
import SplashScreen from "../OnboardingScreen/SplashScreen"
import splashScreenIllustration from "../../../assets/images/splashScreenIllustration.svg"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchList } from "../../../functions/fetchList.js"
import { ProductsContext } from "../../../context/productsContext.js"
import { apiBaseLink } from "../../../utility/apiBaseLink.js"

export const OnboardingScreen = () => {
  const [loading, setLoading] = useState(true)
  // const [fetchDone, setFetchDone] = useState(false)
  // const {
  //   productList,
  //   setProductList,
  //   displayedProducts,
  //   setDisplayedProducts,
  // } = useContext(ProductsContext)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  // useEffect(() => {
  //   fetchList(`${apiBaseLink}?limit=100`, setProductList, setFetchDone)
  // }, [])
  //
  // console.log(productList)

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <section className={styles.onboarding}>
          <div className={styles.illustration}>
            <img
              src={splashScreenIllustration}
              alt="Picture from a Person using e-shop"
            />
          </div>
          <h1>Biggest Sell at Your Fingerprint</h1>
          <p>Find your best products from popular shop without any delay</p>
          <Link to={"/home"}>
            <div className={styles.buttonwrapper}>
              <button>Get Started</button>
            </div>
          </Link>
        </section>
      )}
    </>
  )
}
