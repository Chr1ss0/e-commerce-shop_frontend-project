import styles from "../OnboardingScreen/OnboardingScreen.module.scss"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import splashScreenIllustration from "../../../assets/images/splashScreenIllustration.svg"
import SplashScreen from "../OnboardingScreen/SplashScreen"

export const OnboardingScreen = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

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
