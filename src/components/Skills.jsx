import { skills } from "../data/cv";

function SkillGroup({ title, items }) {
  return (
    <div className="skills-group">
      <h3 className="about__content-title">{title}</h3>
      <div className="skills">
        {items.map((s) => (
          <div key={s} className="skills__skill">{s}</div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Habilidades</span>
        </h2>

        <SkillGroup title="Frontend" items={skills.frontend} />
        <SkillGroup title="Backend" items={skills.backend} />
        <SkillGroup title="Bases de datos" items={skills.databases} />
        <SkillGroup title="DevOps / Infra" items={skills.devops} />
        <SkillGroup title="Otros" items={skills.other} />
        <SkillGroup title="Soft Skills" items={skills.soft} />
      </div>
    </section>
  );
}
