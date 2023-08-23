import React from "react"
import styles from "../OnboardingScreen/SplashScreen.module.scss"
import splashScreenIcon from "../../../assets/images/splash-screen-icon.svg"
import eShopIcon from "../../../assets/images/e-shop-icon.svg"
import test from "../../../assets/images/Slice1.png"
const SplashScreen = () => {
  return (
    <section className={styles.container}>
      <div>
        <img
          className={styles.rotate}
          src={splashScreenIcon}
          alt="E-Shop Logo"
        />
      </div>
      <div>
        <img
          //chris added classname
          className={styles.png}
          src={test}
          alt="E-Shop Logo"
        />
      </div>
      <p>Your Shopping Solution</p>
    </section>
  )
}

export default SplashScreen
