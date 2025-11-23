import crudImg from "../assets/proyectos/CRUD-NDOE.png";
import gestorImg from "../assets/proyectos/GESTOR1.png";
import astarImg from "../assets/proyectos/ALGORITMO.png";
import conteoImg from "../assets/proyectos/algoritmo-referencia.png";
import pokemonImg from "../assets/proyectos/pokemon-versionweb.jpg";
import vetImg from "../assets/proyectos/happy pet care.png";

export const projects = [
  {
    title: "Aplicación CRUD con Node.js, Express y MySQL",
    desc:
      "Aplicación web CRUD conectada a MySQL para gestión de registros. Optimiza procesos de negocios pequeños automatizando tareas repetitivas.",
    img: crudImg,
    repo: "https://github.com/AlexTarazonal/CRUD-NODE.JS.git",
    demo: null,
    tags: ["Node.js", "Express", "MySQL"],
  },
  {
    title: "Aplicación de Gestión de Tareas",
    desc:
      "SPA para organizar tareas diarias: agregar, editar, completar y eliminar. Enfocada en productividad personal y UI simple.",
    img: gestorImg,
    repo: "https://github.com/AlexTarazonal/Gestion-de-Tareas-.git",
    demo: null,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Simulación del Algoritmo A* con Pygame",
    desc:
      "Simulador interactivo del algoritmo A* para visualizar rutas óptimas sobre una cuadrícula con obstáculos.",
    img: astarImg,
    repo: "https://github.com/AlexTarazonal/AlexanderTL-Algoritmo.git",
    demo: null,
    tags: ["Python", "Pygame", "Algoritmos"],
  },
  {
    title: "Sistema de Conteo de Personas (OpenCV)",
    desc:
      "Sistema de visión computacional con alta precisión para conteo en tiempo real, útil para seguridad y análisis de flujo.",
    img: conteoImg,
    repo: "https://github.com/AlexTarazonal/AlexanderTL-Algoritmo.git",
    demo: null,
    tags: ["Python", "OpenCV"],
  },
  {
    title: "Servidor Pokémon Multijugador",
    desc:
      "Servidor en Node.js con lógica multijugador en tiempo real, movimiento, ataques y sincronización por sockets.",
    img: pokemonImg,
    repo: "https://github.com/AlexTarazonal/AlexanderTL-Algoritmo.git",
    demo: null,
    tags: ["Node.js", "Express", "WebSockets"],
  },
  {
    title: "Plataforma Web Veterinaria",
    desc:
      "Plataforma modular con panel público/admin, gestión de usuarios y servicios, diseño responsivo.",
    img: vetImg,
    repo: "https://github.com/AlexTarazonal/web",
    demo: null,
    tags: ["HTML", "CSS", "Firebase"],
  },
];
