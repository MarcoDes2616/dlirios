import React, { useEffect, useState } from 'react';
import "./access.css"
import ws from "../../assets/img/rrss/ws.png"
import insta from "../../assets/img/rrss/insta.png"
import { Link, useNavigate } from 'react-router-dom';

const Acces = () => {
    const token = window.localStorage.getItem("token")
    const [rrss, setRrss] = useState(false)
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setLogin(false)
            setRrss(false)
        }, 15000)
        return () => clearInterval(interval)
    }, [rrss, login])

    const logout = () => {
        localStorage.setItem("token", "")
        alert("Te esperamos pronto con mas productos increibles!")
    }

    return (
        <div className='access'>
            <div className={ !login ? 'user_wrapper hide' : 'user_wrapper'} onClick={() => setLogin(!login)}>
                <i className={token ? 'bx bx-user-check bx-sm' : login ? 'bx bx-user bx-sm' : 'bx bx-user bx-sm animate'}></i>
                <div className='users'>
                    { token ?
                        <Link to={'/login'} onClick={() => logout()}>LogOut</Link> :
                        <Link to={'/login'}>Iniciar Sesión</Link>
                    }
                </div>
            </div>
            <div className={ !rrss ? 'rrss_wrapper hide' : 'rrss_wrapper'} onClick={() => setRrss(!rrss)}>
                <i className={ rrss ? 'bx bx-like bx-sm' : 'bx bx-like bx-sm animate_rrss'}></i>
                <div className='contact_us'>
                    <p>Conecta:</p>
                    <a target={'_blank'} href="https://www.instagram.com/vinilesycuerinasdlirios/"><img src={insta} alt="logo instagram" /></a>
                    <a target={'_blank'} href="https://chat.whatsapp.com/DrTDWypZc0u0pGp89QleGr"><img src={ws} alt="logo whatsapp" /></a>
                </div>
            </div>
        </div>
    );
};

export default Acces;