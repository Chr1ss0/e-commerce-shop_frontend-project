export const fetchList = async (apiLink, setData, setFetch) => {
  try {
    const response = await fetch(apiLink)
    if (!response.ok) {
      throw new Error(`fetchProductList failed: ${response.status}`)
    }
    const data = await response.json()
    //Changed from data.products
    setData(data)
    setFetch(true)
  } catch (error) {
    console.error("Error:", error)
  }
}
