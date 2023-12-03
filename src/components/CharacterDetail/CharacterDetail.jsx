import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import '../../styles/ImageDetail.css';
import './CharacterDetail.css'

import HighlightedNumbers from './HighlightedNumbers';
import WeaponInfo from '../weapon_data/WeaponInfo';

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
          <div className="titulo-principal-personaje">
             <h2 className="titulo-del-personaje">{characterDetails.title}</h2>
             <h3 className='fecha-de-salida'>{characterDetails.release_date}</h3>
          </div>
          <img src={characterDetails.src} className="imageCaracter" />
          <div className="cita-textual">
            <h3 className='awaken'>{characterDetails.awaken_title}</h3>
          <blockquote>
            <p className='p-awaken'>
              <i><HighlightedNumbers text={characterDetails.awaken}/> </i>
            </p>
          </blockquote>
          </div>
          {/* Puedes mostrar otros detalles aquí*/}
          <div className='contenedor-personaje'>
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
                       <HighlightedNumbers text={characterDetails.advancements[key]} />
                     
                    </p>
                  ))}
                </ul>
              </div>
            )}
          </div>

          
          
          <WeaponInfo style={{ maxWidth: '600px' }} />
        </div>
        
      ) : (
        <p>Cargando detalles del personaje...</p>
      )}
    </div>
  );
}

export default ImageDetail;
