import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './../styles/ImageDetail.css';
import './../styles/MatriceDetail.css';
import HighlightedNumbers from '../components/CharacterDetail/HighlightedNumbers';
import { StyledButton } from '../components/CharacterDetail/ButtonStyled';
import { ThemeContext } from '../App'; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas

function MatrixDetail() {
  const { matrizName } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);
  const [version, setVersion] = useState('global'); // 'china' o 'global'
  const { setTheme, theme } = useContext(ThemeContext);

  console.log('Before useEffect - matrizName:', matrizName);
  console.log('Before useEffect - version:', version);

  useEffect(() => {
    console.log('Inside useEffect - matrizName:', matrizName);
    console.log('Inside useEffect - version:', version);
    // Fetch del JSON
    const jsonFileName = version === 'cnversion' ? 'cnversion.json' : 'global.json';

    // Fetch del JSON
    fetch(`../${jsonFileName}`)
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
  }, [matrizName, version]); // Ahora depende de matrizName para actualizar según la URL

  const cambiarVersion = () => {
    setVersion((prevVersion) => (prevVersion === 'cnversion' ? 'global' : 'cnversion'));
    console.log('After cambiarVersion - version:', version);
  };

  return (
    <div>
      {characterDetails ? (
        <div className='contenedor'>
          <h2 className="titulo">{characterDetails.title}</h2>
          <img src={characterDetails.matrice_src} className="matrice-src" />
          <div className="contenedordeversiones">
          <StyledButton
        className={`slider round ${version === 'cnversion' ? 'cnversion' : 'global'}`}
        onClick={cambiarVersion}
        version={version}
        theme={theme} 
      >
            <div className="slider-content">
              <span className="label-ch">CN</span>
              <span className="label-gl">GLOBAL</span>
            </div>
          </StyledButton>
          </div>
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
