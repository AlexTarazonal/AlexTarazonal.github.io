import { experience } from "../data/cv";

export default function Experience() {
  return (
    <section id="experience" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Experiencia Laboral</span>
        </h2>

        <div className="projects__content">
          {experience.map((job) => (
            <div key={job.company} className="projects__row">
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">
                  {job.role} — {job.company}
                </h3>
                <p className="projects__row-content-desc">
                  <strong>{job.date}</strong>
                </p>

                <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
                  {job.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: ".6rem" }}>{b}</li>
                  ))}
                </ul>

                {job.stack && (
                  <p className="projects__row-content-desc" style={{ marginTop: "1rem" }}>
                    <strong>Stack:</strong> {job.stack}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
