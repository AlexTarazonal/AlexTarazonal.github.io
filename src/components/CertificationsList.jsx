import { certifications } from "../data/cv";

export default function CertificationsList() {
  return (
    <section className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Certificaciones</span>
        </h2>

        <ul style={{ paddingLeft: "1.2rem" }}>
          {certifications.map((c) => (
            <li key={c} style={{ marginBottom: ".8rem" }}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
