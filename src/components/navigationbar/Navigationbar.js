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
                          className = "nav-list__link"> 
                          Home 
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to = "/projects"
                          className = "nav-list__link">
                          Projects
                        </NavLink>      
                    </li>
                    <li className="nav-list__item">
                        <NavLink to = "/contacts"
                          className = "nav-list__link">
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