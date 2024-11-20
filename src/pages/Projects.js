import Project from "../components/project/Project";
import {projects} from "./../helpers/projectsList"

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project) => {
                        // return <Project key={index} title={project.title} img={project.img} />; несмотря на то, 
                        // что при добавлении key = index ошибка ушла, фактически она осталась. Удалишь один элемент -
                        // придется всем обнавлять индексы (не на этом сайте, но все равно. попытаюсь присвоить действительные 
                        // индексы и записать их)
                        return <Project key={project.id} title={project.title} img={project.img} />;
                    })}
                </ul>
            </div>
        </main>
    );
}
 
export default Projects