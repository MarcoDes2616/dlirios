import axios from "./axios"

export const getData = (setProducts) => {
    axios("/products")
      .then(res => setProducts(res.data))
      .catch(error => console.log(error.name))
  }