import "./footer.css";
import ws from "../../assets/img/ws.png";
import insta from "../../assets/img/insta.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <h4>Ubicanos en:</h4>
           <hr />
        </div>
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
        <div>
          <h4>Tienda:</h4>
          <hr />
          <ul>
            <li>Productos</li>
            <p>Viniles</p>
            <p>Cintas</p>
            <p>Apliques</p>
            <p>Decorables</p>
            <p>Herramientas</p>
            <p>Creaciones</p>
            <li>Politicas de privacidad</li>
          </ul>
        </div>
      </div>
      <p>© 2023 Insumos Dlirios. All rights reserved.</p>
      <p>Created by: Marco Cardenas (Full-stack Developer)</p>
    </footer>
  );
};

export default Footer;
