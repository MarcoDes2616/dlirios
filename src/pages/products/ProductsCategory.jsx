import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loadder";
import { useDispatch, useSelector } from "react-redux";
import "./products.css";
import { useParams } from "react-router-dom";
import { getCategories, getProductsByCategory } from "../../Utils/service";
import Card from "../../components/Card/Card";
import Categories from "../../components/Categories";

const ProductsCategory = () => {
  const [categories, setCategories] = useState();
  const { categoriId } = useParams();
  const [products, setProducts] = useState([]);
  const isLoading = useSelector((state) => state.isLoading);
  const [styles, setStyles] = useState(false)

  useEffect(() => {
    getCategories(setCategories)
    if (categoriId) {
      getProductsByCategory(categoriId, setProducts);
    }
  }, [categoriId]);
  
  const changeStyle = () => {
    if (window.scrollY > 1) {
      setStyles(true)
    } else {
      setStyles(false)
    }
  }

  window.addEventListener("scroll", changeStyle)

  return (
    <div className="product_category_container">
      {isLoading && <Loader />}
      <div className="product_category_header">
        <h2 className={styles ? "align" : "center"}>{categories?.[categoriId - 1].name}...</h2>
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
