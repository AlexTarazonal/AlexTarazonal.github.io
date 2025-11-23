import { education, languages } from "../data/cv";

export default function Education() {
  return (
    <section id="education" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Educación e Idiomas</span>
        </h2>

        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Formación Académica</h3>
            {education.map((e) => (
              <p key={e.place} className="about__content-details-para">
                <strong>{e.place}</strong><br />
                {e.degree}<br />
                {e.status}
              </p>
            ))}
          </div>

          <div className="about__content-skills">
            <h3 className="about__content-title">Idiomas</h3>
            <div className="skills">
              {languages.map((l) => (
                <div key={l.name} className="skills__skill">
                  {l.name} — {l.level}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
