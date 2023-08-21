import React from "react"
import styles from "./SplashScreen.module.scss"
import splashScreenIcon from "../../../assets/images/splash-screen-icon.svg"
import eShopIcon from "../../../assets/images/e-shop-icon.svg"

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
          src={eShopIcon}
          alt="E-Shop Logo"
        />
      </div>
      <p>Your Shopping Solution</p>
    </section>
  )
}

export default SplashScreen
