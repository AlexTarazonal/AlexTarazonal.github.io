import crudImg from '../assets/proyectos/CRUD-NDOE.png';
import gestorImg from '../assets/proyectos/GESTOR1.png';
import astarImg from '../assets/proyectos/ALGORITMO.png';
import conteoImg from '../assets/proyectos/algoritmo-referencia.png';
import pokemonImg from '../assets/proyectos/pokemon-versionweb.jpg';
import vetImg from '../assets/proyectos/happy pet care.png';

const projects = [
  {
    title: 'Aplicación CRUD con Node.js, Express y MySQL',
    desc:
      'Creé una aplicación web que permite Crear, Leer, Actualizar y Eliminar (CRUD) registros en una base de datos MySQL. Automatizó la gestión de información para pequeños negocios, aumentando la eficiencia en un 40% al reemplazar tareas manuales por procesos automatizados.',
    img: crudImg,
    repo: 'https://github.com/AlexTarazonal/CRUD-NODE.JS.git',
  },
  {
    title: 'Aplicación de Gestión de Tareas',
    desc:
      'Diseñé una aplicación web intuitiva que facilita la gestión de tareas diarias (agregar, editar, completar y eliminar). La interfaz amigable permitió a los usuarios incrementar su productividad personal, simplificando la organización de actividades.',
    img: gestorImg,
    repo: 'https://github.com/AlexTarazonal/Gestion-de-Tareas-.git',
  },
  {
    title: 'Simulación del Algoritmo A* con Pygame',
    desc:
      'Implementé una simulación interactiva del algoritmo A* para encontrar el camino más corto en una cuadrícula con obstáculos. La herramienta mejora la comprensión visual del funcionamiento de algoritmos de búsqueda aplicables en planificación de rutas y desarrollo de videojuegos.',
    img: astarImg,
    repo: 'https://github.com/AlexTarazonal/AlexanderTL-Algoritmo.git',
  },
  {
    title: 'Sistema de Conteo de Personas',
    desc:
      'Desarrollé un sistema integral de visión computacional para el conteo automatizado de personas, logrando una precisión del 95% en entornos comerciales y de seguridad. El sistema optimiza el análisis de flujo de personas en tiempo real, facilitando la toma de decisiones.',
    img: conteoImg,
    repo: 'https://github.com/AlexTarazonal/AlexanderTL-Algoritmo.git',
  },
  {
    title: 'Servidor para Juego de Pokémon Multijugador (Node.js & Express)',
    desc:
      'Este proyecto es un servidor web creado con Node.js y Express, que permite a los jugadores unirse a un juego multijugador de Pokémon, asignar Pokémon a sus personajes, actualizar su posición en el mapa y definir ataques. Node.js maneja múltiples conexiones simultáneas para actualizaciones en tiempo real, mientras que Express facilita la gestión de rutas y la comunicación eficiente entre el servidor y los jugadores.',
    img: pokemonImg,
    repo: 'https://github.com/AlexTarazonal/AlexanderTL-Algoritmo.git',
  },
  {
    title: 'Plataforma Web Veterinaria',
    desc:
      'Desarrollé una plataforma web modular que incluye una interfaz pública y un panel administrativo para la gestión eficiente de usuarios y contenido. El proyecto optimiza la experiencia del usuario mediante un diseño responsivo y accesible, mejorando tanto la usabilidad como la administración del sitio.',
    img: vetImg,
    repo: 'https://github.com/AlexTarazonal/web',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">PROYECTOS</span>
        </h2>

        <div className="projects__content">
          {projects.map((p) => (
            <div key={p.title} className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={p.img}
                  alt={p.title}
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{p.title}</h3>
                <p className="projects__row-content-desc">{p.desc}</p>
                <a
                  href={p.repo}
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
