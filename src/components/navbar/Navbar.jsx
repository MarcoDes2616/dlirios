import { useEffect, useRef, useState } from 'react';
import './navbar.css'
import logo from "../../assets/img/logo.png"
import logov from "../../assets/img/logo_v.png"
import { useScroll, motion, AnimatePresence } from 'framer-motion';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../store/slices/cart.slice';
import Perfiles from './Perfiles';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const user = useSelector(state => state.user)
    const pathname = useLocation()
    const [show, setShow] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            setShow(false);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <>
            <AnimatePresence>{show && <Perfiles user={user}/>}</AnimatePresence>
            <nav>
                <div className="nav__in">
                    <img className='logo' onClick={() => navigate("/")} src={logo} alt="logo empresa" />
                    <menu>
                        <NavLink end className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/"}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/products/category/2"}>Productos</NavLink>
                        <NavLink end className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/products/category/1"}>Destacados</NavLink>
                        <NavLink end className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/contacto"}>Contacto</NavLink>
                    </menu>
                    <div className="icons_contain">
                        <i onClick={() => { setShow(!show) }} className={token ? "bx bx-user-check bx-sm" : 'bx bx-user-plus bx-sm'} ></i>
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
            <div onClick={() => setIsOpen(false)} className={isOpen ? "menu_slider" : "menu_slider hide"} id="menu">
                <div className={isOpen ? "child_menu" : "child_menu hide"}>
                    <img src={logov} alt="logo empresa" />
                    <NavLink className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/"}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/productos"}>Productos</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/destacados"}>Destacados</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "a_menu_active" : "a_menu"} to={"/contacto"}>Contacto</NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;