import React, { useState } from 'react';
import './navbar.css'
import logo from "../../assets/img/logo.png"
import { useScroll, motion } from 'framer-motion';
import Menuslider from './Menuslider';

const Navbar = () => {
    const [bgHeader, setBgHeader] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    const setState = () => {
        if (window.scrollY >= 100) {
            setBgHeader(true)
        } else {
            setBgHeader(false)
        }
    }

    window.addEventListener("scroll", setState)

    return (
        <header className={bgHeader ? "header_bg" : ""}>
            <img src={logo} alt="logo empresa" />
            <nav>
                <h1 className="txtkalan">D´Lirios Insumos</h1>
                <menu>
                    <a href="#ancla_menu_home">
                        <p id="change1" className="change">
                            Home
                        </p>
                    </a>
                    <a href="#ancla_menu_productos">
                        <p id="change2" className="">
                            Productos
                        </p>
                    </a>
                </menu>
                <div className="icons_contain">
                    <i className='bx bx-sm' id="theme_btn"></i>
                    <div className="icon_bag" id="cart-btn">
                        <i className='bx bx-shopping-bag bx-sm'></i>
                        <span className="bag_count" id="bag_count"></span>
                    </div>
                    <i onClick={() => setIsOpen(!isOpen)} className='bx bx-grid-alt bx-sm' id="btn_menu"></i>
                </div>
            </nav>
            <div className='wrapper_nav'>
                <motion.div className='progress'
                    style={{ scaleX: scrollYProgress }} />
            </div>
            <div className={isOpen ? "menu_slider" : "menu_slider hide"} id="menu">
                <div className={isOpen ? "child_menu" : "child_menu hide"}>
                    <img src={logo} alt="logo empresa" />
                    <a href="#">Home</a>
                    <a href="#">Productos</a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;