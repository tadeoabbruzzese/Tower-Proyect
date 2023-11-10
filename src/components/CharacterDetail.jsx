import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './../styles/ImageDetail.css';
import HighlightedNumbers from '../components/HighlightedNumbers';

function ImageDetail() {
  const { imageName } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);

  useEffect(() => {
    // Fetch del JSON
    fetch('../global.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('El JSON no es un array o está vacío');
        }

        // Encuentra el personaje que coincida con el nombre obtenido de la URL
        const character = data.find((char) => char.title === imageName);

        setCharacterDetails(character);
      })
      .catch((error) => {
        console.error('Error al cargar detalles del personaje', error);
      });
  }, [imageName]); // Ahora depende de imageName para actualizar según la URL

  return (
    <div>
      {characterDetails ? (
        <div className='contenedor'>
          <h2 className="titulo">{characterDetails.title}</h2>
          <img src={characterDetails.src} className="imageCaracter" />
          <p>{characterDetails.description}</p>
          {/* Puedes mostrar otros detalles aquí*/}
          <div>
            <h2 className='subtitulo'>Shatter: {characterDetails.shatter} Charge: {characterDetails.charge}</h2>
            <p className='parrafo-weapon'>Weapon Effects</p>
            <p className='weapon-effects'><HighlightedNumbers text={characterDetails.weapon_effects} /></p>
            <p className='element-resonance'><HighlightedNumbers text={characterDetails.element_resonance} /></p>
            
            {characterDetails.advancements && (
              <div>
                <h2 className='parrafo-weapon'>Advancements</h2>
                <ul className='advancements'>
                  {Object.keys(characterDetails.advancements).map((key) => (
                    <p key={key} className='stars'>
                      {key} <HighlightedNumbers text={characterDetails.advancements[key]} />
                     
                    </p>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
        </div>
        
      ) : (
        <p>Cargando detalles del personaje...</p>
      )}
    </div>
  );
}

export default ImageDetail;
