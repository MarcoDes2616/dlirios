import "./card.css"
import { useState } from "react";

const Card = ({product}) => {
    const [imgSelected, setImgSelected] = useState(false)


    return (
        <div className='card'>
            {imgSelected && 
            <div className={ imgSelected ? "zoom" : "zoom hide"}>
                <img className="img_zoom" src={product.image} alt="" />
                <i onClick={() => setImgSelected(false)} className='bx bx-exit-fullscreen bx-md'></i> 
            </div>
            } 
            <div className="card_img">
                <img onClick={() => setImgSelected(true)} src={product.image} alt="producto viniles" />
                <i className='bx bx-expand bx-md'></i>
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product_details">
                <p>$ {product.price.toFixed(2)}</p>
                <p>{product.stock}</p>
            </div>
        </div>
    );
};

export default Card;