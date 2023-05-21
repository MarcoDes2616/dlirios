import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "../../Utils/axios";
import { getCategories, getData } from "../../Utils/service";

const MyForm = () => {
  const [categories, setCategories] = useState();
  const [state, setState] = useState(0);
  const [wasCreated, setWasCreate] = useState();
  const [products, setProducts] = useState()

  useEffect(() => {
    getCategories(setCategories)
    getData(setProducts)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(1);
    const data = new FormData(e.currentTarget);
    axios
      .post("/products", data)
      .then((res) => {
        setWasCreate(true)
        getData(setProducts)
      })
      .catch((error) => {
        setWasCreate(false);
        alert(error.name);
      });
  };

  return (
    <div className="form_container">
      {state == 0 ? (
        <form onSubmit={handleSubmit}>
          <div className="input_box">
            <label>Name:</label>
            <input required className="input_form" type="text" name="name" />
          </div>
          <div className="input_box">
            <label>Description:</label>
            <textarea required name="description"></textarea>
          </div>
          <div className="input_box">
            <label>Price:</label>
            <input required className="input_form" type="number" step="0.01" name="price" />
          </div>
          <div className="input_box">
            <label>Stock:</label>
            <input required className="input_form" type="number" name="stock" />
          </div>
          <div className="input_box">
            <label>Image:</label>
            <input required className="file" type="file" name="image" />
          </div>
          <div className="input_box">
            <label>Categoria:</label>
            <select required className="input_form" name="categoryId" id="">
              <option defaultChecked value="">
                Elige una categoría
              </option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="check">
          {wasCreated ? (
            <>
              <i className="bx bxs-check-circle bx-burst bx-lg"></i>
              <p>Producto creado Satisfactoriamente!</p>
            </>
          ) : (
            <>
              <i class="bx bx-x-circle bx-spin bx-lg"></i>
              <p>Creación de producto fallida!</p>
            </>
          )}
          <button onClick={() => setState(0)}>Crear nuevo producto</button>
        </div>
      )}
      <div className="my_products">
        <h3>Mis Productos...</h3>
            {products?.map((product) => (
              <div key={product?.id} className="card_my_products">
              <img src={product?.image} alt="" />
              <p>Nombre: <br />{product?.name}</p>
              <p>Descripcion: <br />{product?.description}</p>
              <p>Precio: <br />{product?.price}</p>
              <p>Stock: <br />{product?.stock}</p>
              <p> Categoria: <br />{product?.category?.name}</p>
            </div>

            ))}
      </div>
    </div>
  );
};

export default MyForm;
