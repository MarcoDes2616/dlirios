import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loadder";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../store/slices/isLoading.slice";
import "./products.css";
import { NavLink, useParams } from "react-router-dom";
import { getProductsByCategory } from "../../Utils/service";
import Card from "../../components/Card/Card";
import Categories from "../../components/Categories";

const ProductsCategory = () => {
  const { categoriId } = useParams();
  const [products, setProducts] = useState([]);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoriId) {
      getProductsByCategory(categoriId, setProducts);
    }
  }, [categoriId]);

  return (
    <div className="product_category_container">
      {isLoading && <Loader />}
      <div className="product_category_header">
        <h2>{products[0]?.category.name}</h2>
      </div>
      <Categories />
      <div className="destacados">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;
