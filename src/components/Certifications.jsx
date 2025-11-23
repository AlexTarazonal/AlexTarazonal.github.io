import cssCert from '../assets/image/css certificate.png';
import jsCert from '../assets/image/javascript_basic certificate.png';
import csharpCert from '../assets/image/CSharp_CERTIFIED.png';
import nodeCert from '../assets/image/nodejs_basic certificate.png';
import sqlCert from '../assets/image/SQL CERTIFIED.png';
import compCert from '../assets/image/Computacion-certificado.png';
import dataCert from '../assets/image/datavisualizacion-certificado.png';
import frontCert from '../assets/image/frontend-certificado.png';
import progCert from '../assets/image/Programacion-certificado.png';
import scrumCert from '../assets/image/SFC_Alexander Efrain  Tarazona Llashag.jpg';
import softCert from '../assets/image/Software-certificado.png';

const certifications = [
  { src: cssCert, alt: 'Certificado en CSS' },
  { src: jsCert, alt: 'Certificado en JavaScript Básico' },
  { src: csharpCert, alt: 'Certificado en C#' },
  { src: nodeCert, alt: 'Certificado en Node.js Básico' },
  { src: sqlCert, alt: 'Certificado en SQL' },
  { src: compCert, alt: 'Certificado en Computación' },
  { src: dataCert, alt: 'Certificado en Visualización de Datos' },
  { src: frontCert, alt: 'Certificado en Frontend' },
  { src: progCert, alt: 'Certificado en Programación' },
  { src: scrumCert, alt: 'Certificado en Scrum Fundamentals' },
  { src: softCert, alt: 'Certificado en Desarrollo de Software' },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <h2 className="heading heading-sec heading-sec__mb-bg">
        <span className="heading-sec__main">Certificaciones</span>
      </h2>

      <div className="certifications">
        {certifications.map((c) => (
          <img
            key={c.alt}
            src={c.src}
            alt={c.alt}
            className="certification-image"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
