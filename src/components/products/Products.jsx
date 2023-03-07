import React, { useEffect, useState } from 'react';
import app from '../../Utils/fireBase.config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Loader from "../Loadder"
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../store/slices/isLoading.slice';
import CardProducts from './CardProducts';
import './products.css'

const Products = () => {
    const db = getFirestore(app);
    const [vinilesList, setVinilesList] = useState([])
    const isLoading = useSelector(state => state.isLoading)
    const dispatch = useDispatch()

    const getproducts = async () => {
        dispatch(setIsLoading(true))
        const vinilesCol = collection(db, 'viniles');
        const vinilesSnapshot = await getDocs(vinilesCol);
        setVinilesList(vinilesSnapshot.docs?.map(doc => doc.data()))
        dispatch(setIsLoading(false))
    }

    useEffect(() => {
        getproducts()
    }, [])
    
    return (
        <div className='section'>
            <div className='products_container'>
                { vinilesList.map((item) => (
                    <CardProducts item={item} key={item.url}/>
                ))}
            </div>
        </div>
    );
};

export default Products;