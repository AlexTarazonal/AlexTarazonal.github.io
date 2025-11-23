const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MySQL',
  'SQL Server',
  'Python',
  'C++',
  'Git',
  'SAP HANA',
];

export default function About() {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Acerca de Mí</span>
        </h2>

        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Conóceme!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Desarrollador Full Stack con experiencia en React, Node.js y MySQL.
                He trabajado en la creación de sistemas web eficientes para la gestión
                de compras y ventas, optimizando el control de inventarios y la administración
                de productos. Con conocimientos sólidos en desarrollo frontend y backend,
                he implementado soluciones escalables y seguras, integrando autenticación con JWT
                y manejando bases de datos con MySQL.
              </p>
              <p className="about__content-details-para">
                Apasionado por la tecnología y la innovación, siempre busco mejorar mis habilidades
                y aprender nuevas tecnologías. Tengo experiencia en proyectos personales y profesionales,
                trabajando en equipo para resolver problemas y entregar soluciones de calidad.
              </p>
            </div>
          </div>

          <div className="about__content-skills">
            <h3 className="about__content-title">Mis Habilidades</h3>
            <div className="skills">
              {skills.map((skill) => (
                <div key={skill} className="skills__skill">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
