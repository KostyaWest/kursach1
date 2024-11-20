import "./style.css";
import GitHubIcon from "./gitHub-black.svg"

const BtnGitHub = ({link}) => {
    return ( 
        // В href вместо заглушки #! вставили линк, target="_blank" - сайт будет открываться в новом окне без закрытия текущего
    <a href={link} target="_blank" className="btn-outline">
        <img src={GitHubIcon} alt="" />
        GitHub repo
    </a>
    );
}
 
export default BtnGitHub;