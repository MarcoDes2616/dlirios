import { useState, useRef, useEffect } from "react";
import { motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import fm from "../../assets/img/lirio_vector.png"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../assets/img/avatar.png"
import { setUser } from "../../store/slices/users.slice";
import { setCart } from "../../store/slices/cart.slice";

const Perfiles = ({user }) => {
    const ref = useRef(null);
    const [isPresent, safeToRemove] = usePresence();
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!isPresent) {
            gsap.to(ref.current, {
                opacity: 0,
                onComplete: () => safeToRemove?.()
            });
        }
    }, [isPresent, safeToRemove]);

    const logout = () => {
        localStorage.setItem("token", "")
        dispatch(setCart([]))
        dispatch(setUser())
        alert("Te esperamos pronto con mas productos increibles!")
    }
    return (
        <div className="box" ref={ref} >
            <div className="box_in">
                {token ?
                    <div className="perfil">
                        <div className="perfil_img">
                            <img src={user.image ? user.image : avatar} alt="" />
                        </div>
                        <div className="user_data">
                            <p className="sesion">Has iniciado sesión como:</p>
                            <p className="email">{user.email}</p>
                        </div>
                        <hr />
                        {!user.data_completed ?
                            <div className="call_data">
                                <button className="btn_sign">Completar mis datos de perfil</button>
                                <span>1</span>
                            </div> :
                            <div className="call_data">
                                <button className="btn_sign" onClick={logout}>Cerrar sesión</button>
                            </div>
                        }
                    </div> :
                    <div className="sign_in">
                        <img src={fm} alt="lirio" />
                        <p>Aun no has iniciado sesión...</p>
                        <hr />
                        <button className='btn_sign' onClick={() => navigate("/login")} >Iniciar sesión</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Perfiles;