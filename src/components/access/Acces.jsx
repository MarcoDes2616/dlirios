import React, { useEffect, useState } from 'react';
import "./access.css"
import ws from "../../assets/img/rrss/ws.png"
import insta from "../../assets/img/rrss/insta.png"
import { Link } from 'react-router-dom';

const Acces = () => {
    const token = window.localStorage.getItem("token")
    const [rrss, setRrss] = useState(false)
    const [login, setLogin] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setLogin(false)
            setRrss(false)
        }, 15000)
        return () => clearInterval(interval)
    }, [rrss, login])


    return (
        <div className='access'>
            <div className={ !login ? 'user_wrapper hide' : 'user_wrapper'}>
                <i onClick={() => setLogin(!login)} className={token ? 'bx bx-user-check bx-sm' : login ? 'bx bx-user bx-sm' : 'bx bx-user bx-sm animate'}></i>
                <div className='users'>
                    <Link to={'/login'} onClick={() => setLogin(!login)}><p>Iniciar Sesión</p></Link>
                </div>
            </div>
            <div className={ !rrss ? 'rrss_wrapper hide' : 'rrss_wrapper'}>
                <i onClick={() => setRrss(!rrss)} className={ rrss ? 'bx bx-like bx-sm' : 'bx bx-like bx-sm animate_rrss'}></i>
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