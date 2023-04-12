import "./card.css"
import viniles from "../../assets/img/viniles.jpg"
import cintas from "../../assets/img/cintas.jpg"
import apliques from "../../assets/img/apliques.jpg"
import decorables from "../../assets/img/decorables.jpg"
import herramientas from "../../assets/img/herramientas.jpg"
import creaciones from "../../assets/img/creaciones.jpg"

const Card = () => {
    return (
        <div className='card'>
            <div className="card_img">
                <img src={viniles} alt="producto viniles" />
            </div>
        </div>
    );
};

export default Card;