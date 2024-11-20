import Header from "./../components/header/Header"

const Home = () => {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Frontend</h2>
                                <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Backend</h2>
                                <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                            </li>
                        </ul>

                </div>
            </main>
        </>
// <></> - фрагменты header и прочее должны лежать в одном контейнере. 
// без них ошибка. так правильно. стили не переносим, если что есть пример в компонентс. остались в main.css
    );
}
 
export default Home;