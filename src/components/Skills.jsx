import React from 'react';

const Skills = () => {
  const softSkills = [
    'Comunicación asertiva',
    'Excelente atención al cliente',
    'Paciencia y tolerancia',
    'Manejo de inglés a nivel B2',
    // Agrega más habilidades blandas aquí
  ];

  const hardSkills = [
    'Manejo de Photoshop',
    'Manejo de Illustrator',
    'Conocimientos básicos de Java',
    'Manejo de consultas SQL',
    'Conocimientos básicos en C#',
    // Agrega más habilidades duras aquí
  ];

  return (
    <div className="container">
      <div className="izquierda">
        <div className="fondoColumna">
          <h1 className="subtitle">Blandas</h1>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="derecha">
        <div className="fondoColumna">
          <h1 className="subtitle">Duras</h1>
          <ul>
            {hardSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
