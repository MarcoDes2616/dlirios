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

export const requestReset = (data) => {
  axios.post("/system/reset_password", data)
    .then(res => console.log(res.data))
    .catch(error => alert(error.name))
}

export const resetPassword = (data, token, navigate) => {
  axios.post(`/system/reset_password/${token}`, data)
    .then(res => {navigate("/login")})
    .catch(error => alert(error.name))
}
