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
                <h2>Viniles, cuerinas, cintas, apliques y mas+</h2>
                <p>La relación perfecta <br /> entre Calidad y  <br /> Economía!</p>
                <div className='contact_us'>
                    <a target={'_blank'}
                        href="https://www.instagram.com/vinilesycuerinasdlirios/">
                        <img src={insta} alt="logo instagram" />
                    </a>
                    <a target={'_blank'}
                        href="https://chat.whatsapp.com/DrTDWypZc0u0pGp89QleGr">
                        <img src={ws} alt="logo whatsapp" />
                    </a>
                    <span className="ws_span">1</span>
                </div>
            </div>
        </header>
    );
};

export default Header;