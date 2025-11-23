import linkedin from '../assets/png/linkedin-ico.png';
import github from '../assets/png/github-ico.png';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
                
            <div className="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/alexander-tarazona-ba7757187/"
              >
                <img className="main-footer__icon" src={linkedin} alt="LinkedIn" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AlexTarazonal"
              >
                <img className="main-footer__icon" src={github} alt="GitHub" />
              </a>
            </div>
          </div>

          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Alexander Tarazona</h4>
            <p className="main-footer__short-desc">
              Desarrollador Full Stack con experiencia en React, Node.js y MySQL.
              Apasionado por la tecnología y la innovación, siempre en busca de nuevos retos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
