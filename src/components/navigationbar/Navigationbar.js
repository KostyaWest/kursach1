// function Navigationbar () {
//     return()
// }

// export default Navigationbar 
// стартовая заготовка, вместо нее -> плагин simple react snippets

//внизу - sfc
import sun from "./../../img/icons/sun.svg"
import moon from "./../../img/icons/moon.svg" 
import "./style.css";
//для импортов добавили выход два раза вверх по сравнению с app.js

//делаем ссылки из реакт роутердом
import { NavLink } from "react-router-dom";

const Navigationbar = () => {


    const activeLink = "nav-list__link nav-list_link-active"; //должно быть подчеркивание (выделение для ссылки, но оно не работает)
    const normalLink = "nav-list__link";

    return ( 
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/"
                  className="logo">

                    <strong>Freelancer</strong> portfolio

                </NavLink> 
                {/* первая ссылка. Когда наводим на фрилансер портфолио - выкидывает на локалхост 3000 */}

                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to = "/"
                          className = {({isActive}) =>  isActive ? activeLink : normalLink}> 
                          Home 
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to = "/projects"
                          className = {({isActive}) =>  isActive ? activeLink : normalLink}>
                          Projects
                        </NavLink>      
                    </li>
                    <li className="nav-list__item">
                        <NavLink to = "/contacts"
                          className = {({isActive}) =>  isActive ? activeLink : normalLink}>
                          Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
    );
}
 
export default Navigationbar;