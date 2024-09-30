import React from 'react';
import NavBar from '../components/NavBar';

const Portfolio = () => {
  return (
    <div>
      <NavBar />
      <main>
        <ul>
          <li>
            <a
              className="proyectos"
              href="https://github.com/JuDaCa-UAO/PaginaResponsive.git"
              target="_blank" rel="noopener noreferrer"
            >
              Tarea 1 - página responsive
            </a>
          </li>
          <li>
            <a
              className="proyectos"
              href="https://docs.google.com/document/d/1M3F57yR01dGqiD9gQietFA0RJd0zGrt7nIvNVREwd98/edit?usp=sharing"
              target="_blank" rel="noopener noreferrer"
            >
              Tarea 2 - ¿cómo evitar subir archivos binarios?
            </a>
          </li>
          <li>
            <a
              className="proyectos"
              href="https://github.com/edwinmgallego/clase-practica-css/tree/judaca"
              target="_blank" rel="noopener noreferrer"
            >
              Tarea 3 - página institucional
            </a>
          </li>
          <li>
            <a
              className="proyectos"
              href="https://github.com/JuDaCa-UAO/JavaScripts-Clase2.git"
              target="_blank" rel="noopener noreferrer"
            >
              Tarea 4 - Comparación de números
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Portfolio;
