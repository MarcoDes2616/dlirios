import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setIsLoading } from '../store/slices/isLoading.slice';

const Home = () => {
  const pathname = useLocation()

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [pathname]);


  return (
    <main>
      
    </main>
  );
};

export default Home;