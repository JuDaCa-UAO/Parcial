import React from 'react';
import NavBar from '../components/NavBar';
import ImageContainer from '../components/ImageContainer';
import Skills from '../components/Skills';
import Estudios from '../components/Estudios';
import Contact from '../components/Contact';

const Curriculum = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="fondo">
          <h1 className="title">Juan David Carvajal Joven</h1>
          <ImageContainer />
          <h1 className="subtitle">Perfil Profesional</h1>
        </div>
        <div className="texto">
          <h1>
            Soy una persona proactiva y creativa. Me gusta trabajar en equipo y dar
            soluciones para optimizar las tareas. Soy una persona con facilidad para
            generar confianza y amenidad con clientes y compañeros.
          </h1>
        </div>
        <h1 className="subtitle">Mis Habilidades</h1>
        <Skills />
        <Estudios />
        <Contact />
      </main>
    </div>
  );
};

export default Curriculum;
