import React, { useState } from 'react';
import './navbar.css'
import logo from "../../assets/img/logo.png"
import { useScroll, motion } from 'framer-motion';

const Navbar = () => {
    const [bgHeader, setBgHeader] = useState(false)
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
            <h1 className="txtkalan">Dlirios Insumos</h1>
                <menu>
                    <a href="#ancla_menu_home">
                        <p id="change1" className="change">
                            HOME
                        </p>
                    </a>
                    <a href="#ancla_menu_productos">
                        <p id="change2" className="">
                            PRODUCTOS
                        </p>
                    </a>
                </menu>
                <div className="icons_contain">
                    <i className='bx bx-sm' id="theme_btn"></i>
                    <div className="icon_bag" id="cart-btn">
                        <i className='bx bx-shopping-bag bx-sm'></i>
                        <span className="bag_count" id="bag_count"></span>
                    </div>
                    <i className='bx bx-grid-alt bx-sm' id="btn_menu"></i>
                </div>
            </nav>
            <div className='wrapper_nav'>
                <motion.div className='progress'
                    style={{ scaleX: scrollYProgress }} />
            </div>
        </header>
    );
};

export default Navbar;