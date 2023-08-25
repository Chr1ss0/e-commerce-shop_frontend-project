import React from "react"
import styles from "./Checkout.module.scss"
import Navbar from "../../layout/Navbar/Navbar"
import checkedIcon from "../../../assets/images/icons8-checked-100.png"

const Checkout = () => {
  return (
    <>
      <div className={styles.checkout}>
        <h1>
          Payment Successful! Thank you for your order. Payment Security Code -
          1337
        </h1>
        <div className={styles.image_container}>
          <img
            src={checkedIcon}
            alt="Checked icon"
          />
        </div>
      </div>
      <Navbar />
    </>
  )
}

export default Checkout
