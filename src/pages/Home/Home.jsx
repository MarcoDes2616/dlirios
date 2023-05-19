import "./home.css"
import viniles from "../../assets/img/viniles.jpg"
import cintas from "../../assets/img/cintas.jpg"
import apliques from "../../assets/img/apliques.jpg"
import decorables from "../../assets/img/decorables.jpg"
import herramientas from "../../assets/img/herramientas.jpg"
import creaciones from "../../assets/img/creaciones.jpg"

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card"
import Header from "./Header"
import axios from "../../Utils/axios"
import { getProductsByCategory } from "../../Utils/service"

const Home = () => {
  const pathname = useLocation()
  const isLoading = useSelector(state => state.isLoading)
  const navigate = useNavigate()
  const [products, setProducts] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  useEffect(() => {
    getProductsByCategory(1, setProducts)
  }, [])


  return (
    <>
      <Header />
      <main>
        <div className='home_products'>
          <div className="categories">
            <div className="category" onClick={() => navigate("/products/category/2")}>
              <img src={viniles} alt="" />
              <h3>Viniles</h3>
            </div>
            <div className="category" onClick={() => navigate("/products/category/3")}>
              <img src={cintas} alt="" />
              <h3>Cintas</h3>
            </div>
            <div className="category" onClick={() => navigate("/products/category/4")}>
              <img src={apliques} alt="" />
              <h3>Apliques</h3>
            </div>
            <div className="category" onClick={() => navigate("/products/category/5")}>
              <img src={decorables} alt="" />
              <h3>Decorables</h3>
            </div>
            <div className="category" onClick={() => navigate("/products/category/6")}>
              <img src={herramientas} alt="" />
              <h3>Herramientas</h3>
            </div>
            <div className="category" onClick={() => navigate("/products/category/7")}>
              <img src={creaciones} alt="" />
              <h3>Creaciones Dlirios</h3>
            </div>
          </div>
          <div className="destacados">
            {products?.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;