import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "../../Utils/axios";

const MyForm = () => {
  const [categories, setCategories] = useState()

  useEffect(() => {
    axios.get("/categories")
      .then(res => setCategories(res.data))
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    axios.post("/products", data)
      .then(res => console.log(res.data))
      .catch(error => error.response)
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <label>Name:</label>
          <input type="text" name="name"/>
        </div>
        <div className="input_box">
          <label>Description:</label>
          <textarea name="description"></textarea>
        </div>
        <div className="input_box">
          <label>Price:</label>
          <input type="number" name="price"/>
        </div>
        <div className="input_box">
          <label>Stock:</label>
          <input type="number" name="stock"/>
        </div>
        <div className="input_box">
          <label>Image:</label>
          <input className="file" type="file" name="image" />
        </div>
        <div className="input_box">
          <label>Categoria:</label>
          <select name="categoryId" id="">
              <option defaultChecked value="">Elige una categoría</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
