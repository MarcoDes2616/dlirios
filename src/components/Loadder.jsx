import React from 'react';
import logo from "../assets/img/logo.png"

const Loadder = () => {
    return (
        <div>
            <article id="loader" className="loader">
                <img src={logo} alt="logo empresa" />
                <h4 className="txtkalan">Bienvenidos...</h4>
                {/* <p className="txtkalan">Nos sentimos felices de contar con tu confianza, la cual agradecemos felizmente y esperamos estar a la altura de tus exigencias y la exigencias de tus clientes...
                </p> */}
                <p>Estamos cargando productos increibles para ti...</p>
            </article>
        </div>
    );
};

export default Loadder;