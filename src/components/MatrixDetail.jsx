import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './../styles/ImageDetail.css';
import './../styles/MatriceDetail.css';
import HighlightedNumbers from './HighlightedNumbers';

function MatrixDetail() {
  const { matrizName } = useParams();
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
        console.log(data)
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('El JSON no es un array o está vacío');
        }

        // Encuentra el personaje que coincida con el nombre obtenido de la URL
        const character = data.find((char) => char.title === matrizName);

        setCharacterDetails(character);
      })
      .catch((error) => {
        console.error('Error al cargar detalles del personaje', error);
      });
  }, [matrizName]); // Ahora depende de matrizName para actualizar según la URL

  return (
    <div>
      {characterDetails ? (
        <div className='contenedor'>
          <h2 className="titulo">{characterDetails.title}</h2>
          <img src={characterDetails.matrice_src} className="matrice-src" />
          {/* Puedes mostrar otros detalles aquí*/}
          <div className='container-2p'>
            <p className='matriz-effect'><strong className='two-pieces'>2-piece</strong><HighlightedNumbers text={characterDetails.matrice_2p} /></p>
          </div>
          <div className='container-4p'>
            <p className='matriz-effect'><strong className='two-pieces'>4-piece</strong><HighlightedNumbers text={characterDetails.matrice_4p} /></p>
          </div>
          
        </div>
        
      ) : (
        <p>Cargando detalles del personaje...</p>
      )}
    </div>
  );
}

export default MatrixDetail;
