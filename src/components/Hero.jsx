import linkedin from '../assets/png/linkedin-ico.png';
import github from '../assets/png/github-ico.png';

export default function Hero() {
  return (
    <section id="home" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hola, MI NOMBRE ES ALEXANDER TARAZONA</h1>

        <div className="home-hero__info">
          <p className="text-primary">
            Desarrollador Full Stack con más de 1 año de experiencia en desarrollo web,
            especializado en React para frontend, Node.js para backend y MySQL para bases de datos.
            Apasionado por la construcción de aplicaciones escalables y eficientes.
          </p>
        </div>

        <div className="home-hero__cta">
          <a href="#projects" className="btn btn--bg">Proyectos</a>
        </div>
      </div>

      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a
            href="https://www.linkedin.com/in/alexander-tarazona-ba7757187/"
            className="home-hero__social-icon-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="home-hero__social-icon" />
          </a>
        </div>

        <div className="home-hero__social">
          <a
            href="https://github.com/AlexTarazonal"
            className="home-hero__social-icon-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="GitHub" className="home-hero__social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
