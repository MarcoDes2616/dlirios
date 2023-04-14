import { useState, useRef, useEffect } from "react";
import { motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import fm from "../../assets/img/lirio_vector.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Perfiles = ({ show, setShow }) => {
    const ref = useRef(null);
    const [isPresent, safeToRemove] = usePresence();
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    console.log(user);
    useEffect(() => {
        if (!isPresent) {
            gsap.to(ref.current, {
                opacity: 0,
                onComplete: () => safeToRemove?.()
            });
        }
    }, [isPresent, safeToRemove]);


    return (
        <div className="box" ref={ref} onBlur={() => setShow(!show)}>
            <div className="box_in">
                {
                    token ?
                    <div className="perfil"></div> : 
                    <div className="sign_in">
                        <img src={fm} alt="lirio" />
                        <p>Aun no haz iniciado sesión...</p>
                        <hr />
                        <button className='btn_sign' onClick={() => navigate("/login")} >Quiero iniciar sesión!</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Perfiles;