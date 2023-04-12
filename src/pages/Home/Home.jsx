import "./home.css"
import viniles from "../../assets/img/viniles.jpg"
import cintas from "../../assets/img/cintas.jpg"
import apliques from "../../assets/img/apliques.jpg"
import decorables from "../../assets/img/decorables.jpg"
import herramientas from "../../assets/img/herramientas.jpg"
import creaciones from "../../assets/img/creaciones.jpg"

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Card from "../../components/Card/Card"

const Home = () => {
  const pathname = useLocation()
  const isLoading = useSelector(state => state.isLoading)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);


  return (
    <main>
      <div className='home_products'>
        <div className="categories">
          <div className="category">
            <img src={viniles} alt="" />
            <h3>Viniles</h3>
          </div>
          <div className="category">
            <img src={cintas} alt="" />
            <h3>Cintas</h3>
          </div>
          <div className="category">
            <img src={apliques} alt="" />
            <h3>Apliques</h3>
          </div>
          <div className="category">
            <img src={decorables} alt="" />
            <h3>Decorables</h3>
          </div>
          <div className="category">
            <img src={herramientas} alt="" />
            <h3>Herramientas</h3>
          </div>
          <div className="category">
            <img src={creaciones} alt="" />
            <h3>Creaciones Dlirios</h3>
          </div>
        </div>
        <div className="destacados">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
};

export default Home;