import axios from "./axios"

export const getData = (setProducts) => {
    axios.get("/products")
      .then(res => setProducts(res.data))
      .catch(error => console.log(error.response))
  }

export const getProductsByCategory = (categoriId, setProducts) => {
  axios.get(`/products?categoryId=${categoriId}`)
    .then(res => setProducts(res.data))
    .catch(error => console.log(error.response))
}
