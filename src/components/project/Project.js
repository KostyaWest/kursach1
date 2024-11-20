import "./style.css"
import img1 from "./../../img/projects/01.jpg";
//props - св-ва компонента
const Project = ({title, img}) => {
    return (
        <li className="project">
            <a href="./project-page.html">
                <img src={img} alt={title} className="project__img" />
                <h3 className="project__title">{title}</h3>
            </a>
        </li>
    );
}
 
export default Project;
