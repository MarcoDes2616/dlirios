import React from 'react';

const CardProducts = ({item}) => {
    return (
        <article className='card_article'>
            <button className="add" id="product.id">+</button>
            <img className='article_img' src={item.url} alt="articulo"/>
                <div className='article_description'>
                    <h4>$ {item.precio}</h4>
                    <p>Disponibilidad: {item.stock}</p>
                    <h5>{item.nombre}</h5>
                </div>
        </article>
    );
};

export default CardProducts;