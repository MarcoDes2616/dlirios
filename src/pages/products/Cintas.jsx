import React, { useEffect, useState } from 'react';
import { getAllCintas } from '../../Utils/fireBase.config';
import Loader from "../../components/Loadder"
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../store/slices/isLoading.slice';
import CardProducts from './CardProducts';
import './products.css'

const Cintas = () => {
    const [cintasList, setCintasList] = useState([])
    const isLoading = useSelector(state => state.isLoading)
    const dispatch = useDispatch()

    useEffect( () => {
       getproducts()
    }, [])


    const getproducts = async () => {
        dispatch(setIsLoading(true))
        const tmp = await getAllCintas()
        console.log(tmp);
        setCintasList(tmp)
        dispatch(setIsLoading(false))
    } 

    return (
        <div className='section'>
        {isLoading && <Loader />}
        <div className='products_container'>
            { cintasList.map((item) => (
                <CardProducts item={item} key={item.url}/>
            ))}
        </div>
    </div>
    );
};

export default Cintas;