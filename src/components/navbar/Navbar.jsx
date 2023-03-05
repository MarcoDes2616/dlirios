import React from 'react';
import './navbar.css'
import logo from "../../assets/img/logo.png"

const Navbar = () => {

    return (
        <header>
            <img src={logo} alt="logo empresa" />
            <nav>
            <h1 className="txtkalan">Dlirios Insumos</h1>
                <menu>
                    <a href="#ancla_menu_home">
                        <p id="change1" class="change">
                            HOME
                        </p>
                    </a>
                    <a href="#ancla_menu_productos">
                        <p id="change2" class="">
                            PRODUCTOS
                        </p>
                    </a>
                </menu>
                <div className="icons_contain">
                    <i className='bx bx-sm' id="theme_btn"></i>
                    <div className="icon_bag" id="cart-btn">
                        <i className='bx bxs-shopping-bag bx-sm'></i>
                        <span className="bag_count" id="bag_count"></span>
                    </div>
                    <i class='bx bx-grid-alt bx-sm' id="btn_menu"></i>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;