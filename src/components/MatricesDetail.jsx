import React, { useState, useEffect } from 'react';
import './../styles/ImagesGrid.css';
import { Link } from 'react-router-dom'; // Importa el componente Link

function shouldShowThirdMiniImage(title) {
  // Lista de títulos que deberían mostrar la tercera mini imagen
  const titlesWithThirdMiniImage = ["Yan Miao", "Nan Yin", "Marc", "Bayuekui"];

  // Comprueba si el título está en la lista
  return titlesWithThirdMiniImage.includes(title);
}

// ...

function MatricesDetail() {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud HTTP para cargar el JSON
    fetch('matrice.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImagesData(data)
      })
      .catch((error) => console.error('Error al cargar el JSON', error));
  }, []);

  return (
    <div className="image-grid">
      {imagesData.map((image) => (
        <Link to={`/simulacra/${image.title}`} key={image.id}>
          <div className="image-item">
            <div className="image-box">
              <img src={image.src} alt={image.alt} className="main-image" style={{paddingBottom: '20px'}} />
              {shouldShowThirdMiniImage(image.title) && (
                <div className="mini-tag" style={{ backgroundColor: 'red', color: 'white', fontSize: '20px',width: '40px', height: '40px', position: 'absolute', top: '0', left: '0' }}>
                  CN
                </div>
              )}
              <div className="image-caption">
                <div className="title-and-mini">
                  <h2>{image.title}</h2>
                </div>
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MatricesDetail;
