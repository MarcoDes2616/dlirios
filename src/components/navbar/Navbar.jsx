import React, { useEffect, useState } from 'react';
import './navbar.css'
import logo from "../../assets/img/logo.png"
import logov from "../../assets/img/logo_v.png"
import { useScroll, motion } from 'framer-motion';
import { Link, useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../store/slices/cart.slice';
import Acces from './Acces';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")


    return (
        <>
            <nav>
                {/* <Acces /> */}
                <div className="nav__in">
                    <img className='logo' onClick={() => navigate("/")} src={logo} alt="logo empresa" />
                    <menu>
                        <NavLink className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/"}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/productos"}>Productos</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/destacados"}>Destacados</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/contacto"}>Contacto</NavLink>
                    </menu>
                    <div className="icons_contain">
                        <i className='bx bxs-user-pin bx-sm' ></i>
                        <div className="icon_bag" id="cart-btn">
                            <i className='bx bx-cart-alt bx-sm'></i>
                            <span className="bag_count" id="bag_count">{cart[0] ? cart.length : "0"}</span>
                        </div>
                        <i onClick={() => setIsOpen(!isOpen)} className='bx bx-grid-alt bx-sm' id="btn_menu"></i>
                    </div>
                </div>
                <div className='wrapper_nav'>
                    <motion.div className='progress'
                        style={{ scaleX: scrollYProgress }} />
                </div>
            </nav>
            <div className={isOpen ? "menu_slider" : "menu_slider hide"} id="menu">
                <div className={isOpen ? "child_menu" : "child_menu hide"}>
                    <img src={logov} alt="logo empresa" />
                    <a href="#">Home</a>
                    <a href="#">Productos</a>
                </div>
            </div>
            <header>

            </header>
        </>
    );
};

export default Navbar;