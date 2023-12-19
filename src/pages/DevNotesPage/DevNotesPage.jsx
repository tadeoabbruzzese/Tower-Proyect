// DevNotesPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DevNotesPage.css'

const DevNotesPage = () => {
  const { title } = useParams();
  const [devNoteData, setDevNoteData] = useState(null);

  useEffect(() => {
    const jsonPath = '/devnotes.json'; // Cambia a la ruta completa
    console.log('Fetching JSON from path:', jsonPath);
  
    fetch(jsonPath)
      .then(response => response.json())
      .then(data => setDevNoteData(data[title]))
      .catch(error => console.error('Error al cargar la información', error));
  }, [title]);
  

  if (!devNoteData) {
    return <p>Cargando...</p>;
  }

  return (
    <div className='devinfo-container'>
      <div className="titleinfo-container">
        <h1>{devNoteData.title}</h1>
        <p><i>{devNoteData.update}</i></p>
        <hr />
        <p>{devNoteData.description}</p>

        <div className="featuresinfo">
            <h2>New Features</h2>
            {devNoteData.new_features && devNoteData.new_features.split('\n').map((line, index) => (
            <div key={index}>
                 {line}
            </div>
        ))}

        </div>
        <hr />
        
       
        {console.log('Contenido de new_feature:', devNoteData.new_feature)}
      </div>
    </div>
  );
};


export default DevNotesPage;
