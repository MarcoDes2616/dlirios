import React, { useEffect, useState } from 'react';
import Loader from "../../components/loader/Loadder"
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../store/slices/isLoading.slice';
import './products.css'
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../Utils/service';
import Card from '../../components/Card/Card';

const ProductsCategory = () => {
    const {categoriId} = useParams()
    const [products, setProducts] = useState([])
    const isLoading = useSelector(state => state.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        if (categoriId) {
            getProductsByCategory(categoriId, setProducts)
        }
    }, [categoriId])

    
    
    return (
        <div className='section'>
            {isLoading && <Loader />}
            <div className="destacados">
            {products?.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
    );
};

export default ProductsCategory;