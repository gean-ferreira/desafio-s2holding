import './style.css';
import logoImg from '../../assets/imgs/logos/logo.jpeg'

export const Navbar = () => {
    return (
        <header id="header">
            <div className="header__area container">
                <a className="header__logo-img" href="/" target="_self" rel="noopener noreferrer">
                    <img src={logoImg} width="100%" height="auto" alt="Logo da página" />
                </a>
                <nav className="header__navigation">
                    <ul className="header__menu-list">
                        <li><a href="/">home</a> </li>
                        <li><a href="#middle">meio</a></li>
                        <li><a href="#products">produtos</a></li>
                        <li><a href="#title">titulo</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
