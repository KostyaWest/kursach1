import "./style.css";

const header = () => {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Какой то <em>текст</em></strong><br />
                    и дополнительный текст
                </h1>
                    <div className="header__text">
                        <p>так же доп текст.</p>
                    </div>
                <a href="#!" className="btn">Кнопка-заглушка</a>
            </div>
        </header>  
    );
}
 
export default header;