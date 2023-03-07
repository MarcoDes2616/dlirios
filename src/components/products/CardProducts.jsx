import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json, useNavigate } from 'react-router-dom';
import { setCart } from '../../store/slices/cart.slice';

const CardProducts = ({ item }) => {
    const cart = useSelector(state => state.cart)
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        cargarProductos()
    }, [])

    const cargarProductos = () => {
        if(token){
            const productsLocal = JSON.parse(localStorage.getItem("cart"))
            dispatch(setCart(productsLocal))
        }
    }

    const addProduct = (item) => {
        const productsLocal = JSON.parse(localStorage.getItem("cart"))
        const index = productsLocal.findIndex((product) => product.url === item.url)
        if(index >= 0){
            productsLocal[index].quanty += 1
            dispatch(setCart(productsLocal))
            localStorage.setItem("cart", JSON.stringify(productsLocal))
        } else {
            item.quanty = 1
            const productsTotal = [...productsLocal, item]
            dispatch(setCart(productsTotal))
            localStorage.setItem("cart", JSON.stringify(productsTotal))
        }
    }

    const addToCart = (item) => {
        if(token){
            addProduct(item)
        } else {
            navigate("/login")
        }
    }

    console.log(cart);

    return (
        <article className='card_article'>
            <button onClick={() => addToCart(item)} className="add" id="product.id">+</button>
            <img className='article_img' src={item.url} alt="articulo" />
            <div className='article_description'>
                <h4>$ {item.precio}</h4>
                <p>Disponibilidad: {item.stock}</p>
                <h5>{item.nombre}</h5>
            </div>
        </article>
    );
};

export default CardProducts;