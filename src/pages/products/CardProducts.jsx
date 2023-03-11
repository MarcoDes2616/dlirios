import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json, useNavigate } from 'react-router-dom';
import { cargarProductosThunk, setCart } from '../../store/slices/cart.slice';

const CardProducts = ({ item }) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)


    const addToCart = (item) => {
        if (token) {
            addProduct(item)
        } else {
            navigate("/login")
        }
    }
    const addProduct = (item) => {
        const productsLocal = JSON.parse(localStorage.getItem("cart"))
        let index
        if (productsLocal != null) {
            index = productsLocal.findIndex(product => product.url === item.url)
            if (index >= 0) {
                productsLocal[index].quanty += 1
                localStorage.setItem("cart", JSON.stringify(productsLocal))
            } else {
                item.quanty = 1
                item.uid = token
                const productsTotal = [...productsLocal, item]
                localStorage.setItem("cart", JSON.stringify(productsTotal))
            }
        } else {
            item.quanty = 1
            item.uid = token
            localStorage.setItem("cart", JSON.stringify([item]))
        }
        dispatch(cargarProductosThunk(token))
    }

    
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