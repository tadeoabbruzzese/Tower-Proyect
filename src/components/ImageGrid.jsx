import React, { useState, useEffect } from 'react';
import './../styles/ImagesGrid.css';
import { Link } from 'react-router-dom'; // Importa el componente Link
import DevNotes from '../components/DevNotes/DevNotes'
import DevNotesPage from '../pages/DevNotesPage/DevNotesPage';

function shouldShowThirdMiniImage(title) {
  // Lista de títulos que deberían mostrar la tercera mini imagen
  const titlesWithThirdMiniImage = ["Marc", "Bayuekui"];

  // Comprueba si el título está en la lista
  return titlesWithThirdMiniImage.includes(title);
}

// ...

function ImageGrid() {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud HTTP para cargar el JSON
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImagesData(data)
      })
      .catch((error) => console.error('Error al cargar el JSON', error));
  }, []);

  const reversedImagesData = imagesData.slice().reverse();

  return (
    <div className="contenedorSimulacrum">
      <div className="image-grid">
       {reversedImagesData.map((image) => (
        <Link to={`/simulacra/${image.title}`} key={image.id}>
          <div className="image-item">
            <div className="image-box">
              <img src={image.src} alt={image.alt} className="main-image" />
              {shouldShowThirdMiniImage(image.title) && (
                <div className="mini-tag" style={{ backgroundColor: 'red', color: 'white', fontSize: '20px',width: '40px', height: '40px', position: 'absolute', top: '0', left: '0' }}>
                  CN
                </div>
              )}
              <div className="image-caption">
                <div className="title-and-mini">
                  <h2>{image.title}</h2>
                  <div className="mini-images">
                    <img src={image.miniImage1} alt={image.alt} className="mini-image" />
                    <img src={image.miniImage2} alt={image.alt} className="mini-image" />
                  </div>
                </div>
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
      </div>

      <div className="sectionDevs">
        
        <h2 className='site-news'>Site News</h2>
        <br />
        <div className="containerCards">
                 <DevNotes title="DevNotes patch 1.0" description="New Features: -Add the button to change the..." update="Dec 17, 2023, 09:27 PM" />
                 
                 
        </div>
      </div>

    </div>
  );
}

export default ImageGrid;
