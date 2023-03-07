import React from 'react';
import "./access.css"
import ws from "../../assets/img/rrss/ws.png"
import insta from "../../assets/img/rrss/insta.png"

const Acces = () => {
    const token = window.localStorage.getItem("token")

    console.log(token);
    return (
        <div className='access'>
            <div className='user_wrapper'>
                <i className={token ? 'bx bx-user-check bx-sm' : 'bx bx-user bx-sm'}></i>
                <div className='users'>
                    <p>Iniciar Sesión</p>
                </div>
            </div>
            <div className='rrss_wrapper'>
                <i className='bx bx-like bx-sm'></i>
                <div className='contact_us'>
                    <p>Conecta:</p>
                    <img src={insta} alt="logo instagram" />
                    <img src={ws} alt="logo whatsapp" />
                </div>
            </div>
        </div>
    );
};

export default Acces;