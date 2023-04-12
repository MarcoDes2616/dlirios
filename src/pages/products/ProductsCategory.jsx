import React, { useEffect, useState } from 'react';
import Loader from "../../components/loader/Loadder"
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../store/slices/isLoading.slice';
import './products.css'

const ProductsCategory = () => {
    const [vinilesList, setVinilesList] = useState([])
    const isLoading = useSelector(state => state.isLoading)
    const dispatch = useDispatch()

    
    return (
        <div className='section'>
            {isLoading && <Loader />}
            <div className='products_container'>
               
            </div>
        </div>
    );
};

export default ProductsCategory;