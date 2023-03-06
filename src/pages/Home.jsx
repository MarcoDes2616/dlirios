import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setIsLoading } from '../store/slices/isLoading.slice';
// import destacado from "../assets/img/viniles.png"

const Home = () => {
  const pathname = useLocation()

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [pathname]);


  return (
    <main id="home">
      <div className='producto_destacado'>
        <div className='img_destacado'></div>

      </div>
    </main>
  );
};

export default Home;