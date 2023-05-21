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
import Categories from "../../components/Categories"

const Home = () => {
  const pathname = useLocation()
  const isLoading = useSelector(state => state.isLoading)
  const navigate = useNavigate()
  const [products, setProducts] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  useEffect(() => {
    getProductsByCategory("1", setProducts)
  }, [])


  return (
    <>
      <Header />
      <main>
        <div className='home_products'>
          <Categories />
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