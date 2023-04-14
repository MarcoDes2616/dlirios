import bg_in from "../../assets/img/bg_in.jpg"
import ws from "../../assets/img/ws.png"
import insta from "../../assets/img/insta.png"

const Header = () => {
    return (
        <header>
            <div className='header_in'>
                <img src={bg_in} alt="background" />
            </div>
            <div className="presentacion">
                <h2>La relación perfecta entre Calidad y Economía</h2>
                <p>Viniles, cuerinas, <br /> cintas, apliques <br /> y mas+</p>
                <div className='contact_us'>
                    <a target={'_blank'}
                        href="https://www.instagram.com/vinilesycuerinasdlirios/">
                        <img src={insta} alt="logo instagram" />
                    </a>
                    <a target={'_blank'}
                        href="https://chat.whatsapp.com/DrTDWypZc0u0pGp89QleGr">
                        <img src={ws} alt="logo whatsapp" /></a>
                </div>
            </div>
        </header>
    );
};

export default Header;