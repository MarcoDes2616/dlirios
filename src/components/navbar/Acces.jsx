import React, { useEffect, useState } from 'react';
import ws from "../../assets/img/ws.png"
import insta from "../../assets/img/insta.png"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../store/slices/cart.slice';
import { setUser } from '../../store/slices/users.slice';

const Acces = () => {
    const token = window.localStorage.getItem("token")
    const [rrss, setRrss] = useState(false)
    const [login, setLogin] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        const interval = setInterval(() => {
            setLogin(false)
            setRrss(false)
        }, 15000)
        return () => clearInterval(interval)
    }, [rrss, login])

    const logout = () => {
        localStorage.setItem("token", "")
        dispatch(setCart([]))
        dispatch(setUser())
        alert("Te esperamos pronto con mas productos increibles!")
    }

    return (
        <div className='access'>
            <div className={!login ? 'user_wrapper hide' : 'user_wrapper'} onClick={() => setLogin(!login)}>
                <i className={token ? 'bx bx-user-check bx-sm' : login ? 'bx bx-user bx-sm' : 'bx bx-user bx-sm animate'}></i>
                <div className='users'>
                    {token ?
                        <>
                        <img className='user_image' src={user.image} alt="" />
                        <Link to={'/login'} onClick={() => logout()}>LogOut</Link></> :
                        <Link to={'/login'}>Iniciar Sesión</Link>
                    }
                </div>
            </div>
            <div className={!rrss ? 'rrss_wrapper hide' : 'rrss_wrapper'} onClick={() => setRrss(!rrss)}>
                <i className={rrss ? 'bx bx-like bx-sm' : 'bx bx-like bx-sm animate_rrss'}></i>
                <div className='contact_us'>
                    <p>Conecta:</p>
                    <a target={'_blank'}
                        href="https://www.instagram.com/vinilesycuerinasdlirios/">
                        <img src={insta} alt="logo instagram" />
                        </a>
                    <a target={'_blank'}
                        href="https://chat.whatsapp.com/DrTDWypZc0u0pGp89QleGr">
                        <img src={ws} alt="logo whatsapp" /></a>
                </div>
            </div>
        </div>
    );
};

export default Acces;