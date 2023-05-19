import "./footer.css";
import ws from "../../assets/img/ws.png";
import insta from "../../assets/img/insta.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer>
      <div className="footer">
        <div className="contact_footer">
          <h4>Contacto:</h4>
          <hr />
          <div className="contact_icons">
            <a href="mailto:insumos.dlirios2023@gmail.com">
              <i className="bx bxl-gmail bx-lg"></i>
            </a>
            <a href="https://www.instagram.com/vinilesycuerinasdlirios/">
              <i className="bx bxl-instagram-alt bx-lg"></i>
            </a>
            <a href="https://chat.whatsapp.com/DrTDWypZc0u0pGp89QleGr">
              <i className="bx bxl-whatsapp bx-lg"></i>
            </a>
          </div>
        </div>
        <div className="footer_store">
          <h4>Mapa del sitio</h4>
          <hr />
          <ul>
            <li onClick={() => navigate('/')}><i className='bx bx-chevron-right'></i>Inicio</li>
            <li>Productos</li>
            <p onClick={() => navigate("/products/category/2")}><i className='bx bx-chevron-right'></i>Viniles</p>
            <p onClick={() => navigate("/products/category/3")}><i className='bx bx-chevron-right'></i>Cintas</p>
            <p onClick={() => navigate("/products/category/4")}><i className='bx bx-chevron-right'></i>Apliques</p>
            <p onClick={() => navigate("/products/category/5")}><i className='bx bx-chevron-right'></i>Decorables</p>
            <p onClick={() => navigate("/products/category/6")}><i className='bx bx-chevron-right'></i>Herramientas</p>
            <p onClick={() => navigate("/products/category/7")}><i className='bx bx-chevron-right'></i>Creaciones</p>
            <li onClick={() => navigate('/politicas-privacidad')}><i className='bx bx-chevron-right'></i>Politicas de privacidad</li>
          </ul>
        </div>
        <div className="ubicanos">
          <h4>Ubicanos en:</h4>
           <hr />
        </div>
      </div>
      <br />
      <p>© 2023 Insumos Dlirios. All rights reserved.</p>
      <p>Created by: Marco Cardenas (Full-stack Developer)</p>
    </footer>
  );
};

export default Footer;
