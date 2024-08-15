import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css';
import HighlightedNumbers from './HighlightedNumbers';
import WeaponInfo from '../weapon_data/WeaponInfo';
import { StyledButton } from './ButtonStyled';
import { ThemeContext } from '../../App'; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas

function CharacterDetail() {
  const { imageName } = useParams();
  const [version, setVersion] = useState('global'); // 'china' o 'global'
  const [characterDetails, setCharacterDetails] = useState(null);
  

  const { setTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    // Determina el nombre del archivo JSON según la versión actual
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
  }, [imageName, version]); // Ahora depende de imageName y version

  const cambiarVersion = () => {
    setVersion((prevVersion) => (prevVersion === 'cnversion' ? 'global' : 'cnversion'));
  };


  return (
    <div className='character-detail-container' themeUse={theme}>
      {characterDetails ? (
        <div className='contenedor'>
          <div className="titulo-principal-personaje">
             <h2 className="titulo-del-personaje">{characterDetails.title}</h2>
             <h3 className='fecha-de-salida'>{characterDetails.release_date}</h3>
             <h2 className='subtitulo'>Shatter: {characterDetails.shatter} Charge: {characterDetails.charge}</h2>
          </div>
          <img src={characterDetails.src} className="imageCaracter" />
          <div className="cita-textual">
            <h3 className='awaken'><HighlightedNumbers text={characterDetails.awaken_title}/> </h3>
          <blockquote>
            <p className='p-awaken'>
              <i><HighlightedNumbers text={characterDetails.awaken}/> </i>
            </p>
          </blockquote>
          
          <StyledButton
        className={`slider round ${version === 'cnversion' ? 'cnversion' : 'global'}`}
        onClick={cambiarVersion}
        version={version}
        theme={theme} 
      >
       
            <div className="slider-content">
              <span className="label-ch" style={{color: "#FF0000"}}>CN</span>
              <span className="label-gl" style={{color: "#0685CF"}}>🌎</span>
            </div>
          </StyledButton>
          </div>
          {/* Puedes mostrar otros detalles aquí*/}
          <div className='contenedor-personaje'>
            
            <p className='parrafo-weapon'>Weapon Effects</p>
            <p className='weapon-effects'><HighlightedNumbers text={characterDetails.weapon_effects} /></p>
            <p className='parrafo-weapon'>Elemental Resonance</p>
            <p className='element-resonance'><HighlightedNumbers text={characterDetails.element_resonance} /></p>
            <p className='element-resonance'><HighlightedNumbers text={characterDetails.secondary_elemental_resonance} /></p>
            
            <p className='parrafo-weapon'>Weapon's Passive</p>
            <p className='weapon-passive'><HighlightedNumbers text={characterDetails.weapon_passive} /></p>
            <p className='aditional_effect'><HighlightedNumbers text={characterDetails.aditional_effect}/></p>
            

            
          
            
            {characterDetails.advancements && (
              // <div>
              //   <h2 className='parrafo-advancements'>Advancements</h2>
              //   <ul className='advancements'>
              //     {Object.keys(characterDetails.advancements).map((key) => (
              //       <p key={key} className='stars'>
              //          <HighlightedNumbers text={characterDetails.advancements[key]} />
                     
              //       </p>
              //     ))}
              //   </ul>
              // </div>
              <div>
                <h2 className='parrafo-advancements'>Advancements</h2>
                <table className='table-advancements'>
                  <thead>
                    <tr>
                      <th>Advancement</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(characterDetails.advancements).map((key) => (
                      <tr key={key}>
                        <td className='td-advancement'><strong>{key}</strong></td>
                        <td className='td-advancement'>
                          <HighlightedNumbers text={characterDetails.advancements[key]} />
                        </td>
                    </tr>
      ))}
                  </tbody>
                </table>
</div>

            )}

<iframe
  width="100%"
  height="400"
  src={characterDetails.src_video}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

          </div>

          <WeaponInfo style={{ maxWidth: '600px' }} version={version} />
          
          
        </div>
        
      ) : (
        <p>Cargando detalles del personaje...</p>
      )}
    </div>
  

);
}


export default CharacterDetail;
