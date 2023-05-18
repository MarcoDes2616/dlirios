import "./card.css"
import viniles from "../../assets/img/viniles.jpg"

const Card = ({product}) => {
    return (
        <div className='card'>
            <div className="card_img">
                <img src={product.image} alt="producto viniles" />
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