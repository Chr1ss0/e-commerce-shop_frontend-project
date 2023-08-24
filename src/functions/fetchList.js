export const fetchList = async (apiLink, setData, setFetch) => {
  try {
    const response = await fetch(apiLink)
    if (!response.ok) {
      throw new Error(`fetchProductList failed: ${response.status}`)
    }
    const data = await response.json()
    setData(data.products)
    setFetch(true)
  } catch (error) {
    console.error("Error:", error)
  }
}
