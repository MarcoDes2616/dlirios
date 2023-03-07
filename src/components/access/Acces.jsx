import React, { useState } from 'react';
import "./access.css"
import ws from "../../assets/img/rrss/ws.png"
import insta from "../../assets/img/rrss/insta.png"

const Acces = () => {
    const token = window.localStorage.getItem("token")
    const [rrss, setRrss] = useState(false)
    const [login, setLogin] = useState(false)

    return (
        <div className='access'>
            <div className={ login ? 'user_wrapper hide' : 'user_wrapper'}>
                <i onClick={() => setLogin(!login)} className={token ? 'bx bx-user-check bx-sm' : 'bx bx-user bx-sm'}></i>
                <div className='users'>
                    <p>Iniciar Sesión</p>
                </div>
            </div>
            <div className={ rrss ? 'rrss_wrapper hide' : 'rrss_wrapper'}>
                <i onClick={() => setRrss(!rrss)} className='bx bx-like bx-sm'></i>
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