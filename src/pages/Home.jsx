import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Parallax from '../components/Parallax';
import { setIsLoading } from '../store/slices/isLoading.slice';

const Home = () => {
  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);


  return (
    <main id="home">
      <div className='producto_destacado'>
        <div className='img_destacado'></div>
        <div className="fp_description">
          <h4 className="txtkalan">Producto en D%scuento<br/><span>Vinil Glitter</span></h4>
          {/* <p>Vinil Glitter importado. Medida standart (25 x 70cm). Con 10% de descuento hasta agotar stock</p> */}
          <h5 className="txtkalan">$3.00</h5>
          <div className="fp_btn">
            <a href="#discover"><div className="discover">Discover</div></a>
            <div className="add_cart" id="add_cart">AL CARRITO</div>
          </div>
        </div>
      </div>
      <Parallax />
      <div className="filter_contain" id="filter_contain">
            <div className="all">
                <h4 id="ancla_menu_productos">Mostrar Todos</h4>
                <p>Todos los productos</p>
            </div>
            <div className="materiales">
                <div className="viniles">
                    <h4>Viniles</h4>
                    <p>Disponibles <span id="count_viniles"></span></p>
                </div>
                <div className="cintas">
                    <h4>Cintas</h4>
                    <p>Disponibles <span id="count_cintas"></span></p>
                </div>
                <div className="apliques">
                    <h4>Apliques</h4>
                    <p>Disponibles <span id="count_apliques"></span></p>
                </div>
                <div className="decorables">
                    <h4>Decorables</h4>
                    <p>Disponibles <span id="count_decorables"></span></p>
                </div>
            </div>
        </div>
    
    </main>
  );
};

export default Home;