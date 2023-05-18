import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "../../Utils/axios";

const MyForm = () => {
  const [data, setData] = useState();
  const [categories, setCategories] = useState()

  useEffect(() => {
    axios.get("/categories")
      .then(res => setCategories(res.data))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };

  const handleImageChange = (e) => {
    console.log(e);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData()
    const file = e.target.file;
    console.log(file)
    data.append("file", file);
    axios.post("/products", data)
      .then(res => console.log(res.data))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="input_box">
          <label>Description:</label>
          <textarea name="description" onChange={handleChange}></textarea>
        </div>
        <div className="input_box">
          <label>Price:</label>
          <input type="number" name="price" onChange={handleChange} />
        </div>
        <div className="input_box">
          <label>Stock:</label>
          <input type="number" name="stock" onChange={handleChange} />
        </div>
        <div className="input_box">
          <label>Image:</label>
          <input type="file" name="file" onChange={handleImageChange} />
        </div>
        <div className="input_box">
          <label>Categoria:</label>
          <select name="categoryId" id="" onChange={handleChange}>
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
