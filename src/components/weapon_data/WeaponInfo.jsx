import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './WeaponInfo.css';
import HighlightedNumbers from '../CharacterDetail/HighlightedNumbers';
import { Link } from 'react-router-dom';

const WeaponInfo = ({ version }) => {
  const { imageName } = useParams();
  const [character, setCharacter] = useState({ attacks: [] });

  const [isAttacksOpen, setAttacksOpen] = useState(false);
  const [isDodgesOpen, setDodgesOpen] = useState(false);
  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isDischargesOpen, setDischargesOpen] = useState(false);

  useEffect(() => {
    console.log('WeaponInfo - version:', version);
    const fetchData = async () => {
      if (!imageName) {
        console.log('No hay imageName');
        return;
      }

      console.log('Intentando cargar datos para imageName:', imageName);

      try {
        // Utiliza la versión correcta según la prop
        const jsonFileName = version === 'cnversion' ? 'cnversion.json' : 'global.json';

        // Simula la carga del archivo correspondiente
        const response = await fetch(`/${jsonFileName}`);

        if (!response.ok) {
          console.error(`Error en la solicitud: ${response.status}`);
          return;
        }

        const jsonData = await response.json();

        // Encuentra el personaje que coincide con el nombre obtenido de la URL
        const characterData = jsonData.find((char) => char.title === imageName);

        if (characterData) {
          setCharacter(characterData);
        } else {
          console.error(`No se encontró el personaje con el nombre: ${imageName}`);
        }
      } catch (error) {
        console.error('Error general:', error);
      }
    };

    fetchData();
  }, [imageName, version]); // Asegúrate de incluir version en las dependencias
  console.log('Estado actual de character:', character);
  

  return (
    <>

      {/* ATTACKS */}
      <div>
      <h2 className='skillsinfo' onClick={() => setAttacksOpen(!isAttacksOpen)}>
          Attacks
        </h2>
        {isAttacksOpen && character.attacks.length > 0 ? (
        <table className='table-weaponInfo'>
          <thead>
            <tr>
              <th>Normal Attacks</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {character.attacks.map((attack) => (
              <tr key={attack.name}>
                <td className='td-weaponInfo'><strong>{attack.name}</strong></td>
                <td className='td-weaponInfo'>
              {/* Renderizando la descripción con saltos de línea y HighlightedNumbers */}
              {attack.description.split('\n').map((line, index) => (
                <div key={index}>
                  <HighlightedNumbers text={line} />
                </div>
              ))}
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      
        
      ) : null}
    </div>

    {/* END OF ATTACKS */}

    {/* DODGES */}
    <div>
    <h2 className='skillsinfo' onClick={() => setDodgesOpen(!isDodgesOpen)}>
          Dodges
        </h2>
        {isDodgesOpen && Array.isArray(character.dodges) && character.dodges.length > 0 ? (
  <table className='table-weaponInfo'>
    <thead>
      <tr>
        <th>Normal Dodges</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {character.dodges.map((dodge) => (
        <tr key={dodge.name}>
          <td className='td-weaponInfo'><strong>{dodge.name}</strong></td>
          <td className='td-weaponInfo'>
          {dodge.description.split('\n').map((line, index) => (
                <div key={index}>
                  <HighlightedNumbers text={line} />
                </div>
              ))}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
) : null}
    </div>

    {/* END OF DODGES */}


    {/* SKILL */}
    <div>
    <h2 className='skillsinfo' onClick={() => setSkillsOpen(!isSkillsOpen)}>
          Skill
        </h2>
        {isSkillsOpen && Array.isArray(character.skills) && character.skills.length > 0 ? (
      <table className='table-weaponInfo'>
        <thead>
      <tr>
        <th>Skill</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {character.skills.map((skill) => (
        <tr>
          <td className='td-weaponInfo'><strong><HighlightedNumbers text={skill.name} /></strong></td>
          <td className='td-weaponInfo'>
          {skill.description.split('\n').map((line, index) => (
                <div key={index}>
                  <HighlightedNumbers text={line} />
                </div>
              ))}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
) : null}
    </div>

    {/* END OF SKILL */}


    {/* DISCHARGE */}

    <div>
    <h2 className='skillsinfo' onClick={() => setDischargesOpen(!isDischargesOpen)}>
          Discharge
        </h2>
        {isDischargesOpen && Array.isArray(character.discharges) && character.discharges.length > 0 ? (
      <table className='table-weaponInfo'>
        <thead>
      <tr>
        <th>Discharge</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {character.discharges.map((discharge) => (
        <tr>
          <td className='td-weaponInfo'><strong>{discharge.name}</strong></td>
          <td className='td-weaponInfo'>
          {discharge.description.split('\n').map((line, index) => (
                <div key={index}>
                  <HighlightedNumbers text={line} />
                </div>
              ))}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
) : null}

    
  <div className="recommendedteam">
  <h2>RECOMMENDED PAIRINGS</h2>
  {character.recommended_pairing && (
    <div className="recommended-pairing">
      {character.recommended_pairing.map((pairing, index) => (
        <Link to={`/simulacra/${pairing.title}`} key={index} className="pairing-item">
          <div className="image-box">
            <img src={pairing.src} alt={pairing.title} className="main-image" />
            
            
            <div className="image-caption">
              <div className="title-and-mini">
                <h2 className='titlepairing'>{pairing.title}</h2>
                <div className="mini-images">
                  <img src={pairing.miniImage1} className="mini-image" />
                  <img src={pairing.miniImage2} className="mini-image" />
                </div>
              </div>
              <p>{/* Puedes agregar aquí alguna información específica de Recommended Pairing si la tienes */}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )}
  </div>

  <div className="recommendedteam">
  <h2>RECOMMENDED MATRICES</h2>
  {character.recommended_matrice && (
    <div className="recommended-pairing">
      {character.recommended_matrice.map((matrice, index) => (
        <Link to={`/matrices/${matrice.title}`} key={index} className="pairing-item">
          <div className="image-box">
            <img src={matrice.src} alt={matrice.title} className="main-image" />


            <div className="mini-tag" style={{ backgroundColor: 'hsl(220deg,15%,10%)', color: '#fff', fontSize: '20px',width: '40px', height: '40px', position: 'absolute', top: '0', left: '0' }}>
                  {matrice.quantity}
                </div>
            <div className="image-caption">
              <div className="title-and-mini">
                <h2 className='titlepairing'>{matrice.title}</h2>
              </div>
              <p>{/* Puedes agregar aquí alguna información específica de Recommended Matrice si la tienes */}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )}
</div>


  
    </div>

      

    </>
  );
};

export default WeaponInfo;
