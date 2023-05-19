import viniles from "../assets/img/viniles.jpg";
import cintas from "../assets/img/cintas.jpg";
import apliques from "../assets/img/apliques.jpg";
import decorables from "../assets/img/decorables.jpg";
import herramientas from "../assets/img/herramientas.jpg";
import creaciones from "../assets/img/creaciones.jpg";
import { NavLink } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
        <NavLink style={({isActive}) => {return {display: isActive && "none"}}} to={"/products/category/2"}>
          <div className="category">
            <img src={viniles} alt="" />
            <h3>Viniles</h3>
          </div>
        </NavLink>
        <NavLink style={({isActive}) => {return {display: isActive && "none"}}} to={"/products/category/3"}>
          <div className="category">
            <img src={cintas} alt="" />
            <h3>Cintas</h3>
          </div>
        </NavLink>
        <NavLink style={({isActive}) => {return {display: isActive && "none"}}} to={"/products/category/4"}>
          <div className="category">
            <img src={apliques} alt="" />
            <h3>Apliques</h3>
          </div>
        </NavLink>
        <NavLink style={({isActive}) => {return {display: isActive && "none"}}} to={"/products/category/5"}>
          <div className="category">
            <img src={decorables} alt="" />
            <h3>Decorables</h3>
          </div>
        </NavLink>
        <NavLink style={({isActive}) => {return {display: isActive && "none"}}} to={"/products/category/6"}>
          <div className="category">
            <img src={herramientas} alt="" />
            <h3>Herramientas</h3>
          </div> 
        </NavLink>
        <NavLink style={({isActive}) => {return {display: isActive && "none"}}} to={"/products/category/7"}>
          <div className="category">
            <img src={creaciones} alt="" />
            <h3>Creaciones Dlirios</h3>
          </div>
        </NavLink>
      </div>
    );
};

export default Categories;