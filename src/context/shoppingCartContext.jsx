import { createContext, useState, useContext } from "react"

const ShoppingCartContext = createContext(null)

export const ShoppingCartProvider = ({ displayedProducts, children }) => {
  const getDefaultCart = (displayedProducts) => {
    let cart = {}
    for (let i = 1; i < displayedProducts.length; i++) {
      cart[i] = 0
    }
    return cart
  }

  const [cartItems, setCartItems] = useState(getDefaultCart(displayedProducts))
  const [shoppingCart, setShoppingCart] = useState(false)
  const [isBlue, setIsBlue] = useState(false)

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }))
  }

  const addToCartDetails = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + quantity,
    }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        addToCartDetails,
        removeFromCart,
        shoppingCart,
        setShoppingCart,
        isBlue,
        setIsBlue,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(ShoppingCartContext)
}
