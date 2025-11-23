import logo from '../assets/image/mi-foto.jpg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={logo}
              alt="Alexander Tarazona"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Alexander Tarazona</span>
        </div>

        <nav className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="#home" className="header__link">Home</a>
            </li>
            <li className="header__link-wrapper">
              <a href="#about" className="header__link">Acerca de Mí</a>
            </li>
            <li className="header__link-wrapper">
              <a href="#projects" className="header__link">Proyectos</a>
            </li>
            <li className="header__link-wrapper">
              <a href="#certifications" className="header__link">Certificaciones</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
