import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './WeaponInfo.css';

const WeaponInfo = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState({ attacks: [] });

  useEffect(() => {
    // Simula un fetch a un JSON
    const fetchData = async () => {
      try {
        const response = await fetch('../global.json');
        const jsonData = await response.json();
        console.log('Datos del JSON:', jsonData); // Agrega este console.log
        setCharacter(jsonData);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, [characterId]);

  return (
    <div>
      <h2>{character.title}</h2>
      {/* Otras propiedades del personaje */}
  
      <h3>Ataques:</h3>
      {character.attacks && character.attacks.length > 0 ? (
        <ul>
          {character.attacks.map((attack, index) => (
            <li key={index}>
              <strong>Nombre: {attack.name}</strong>
              <p>Descripción: {attack.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay ataques disponibles para este personaje.</p>
      )}
  
      {/* Resto del componente */}
    </div>
  );
};

export default WeaponInfo;
