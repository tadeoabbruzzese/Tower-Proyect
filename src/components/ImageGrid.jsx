import React from 'react';
import './../styles/ImagesGrid.css'; // Ruta relativa para importar el archivo CSS

const imagesData = [
  { id: 1, src: 'src/assets/images/feise.jpg', alt: 'Imagen 1', title: 'feise', miniImage1: 'src/assets/mini-images/dps.jpg', miniImage2: 'src/assets/mini-images/fireelement.jpg' },
  { id: 2, src: 'src/assets/images/mimi1.jpg', alt: 'Imagen 2', title: 'mimi', miniImage1: 'src/assets/mini-images/tank.jpg', miniImage2: 'src/assets/mini-images/voltelement.jpg' },
  { id: 3, src: 'src/assets/images/yulan.jpg', alt: 'Imagen 3', title: 'yulan', miniImage1: 'src/assets/mini-images/dps.jpg', miniImage2: 'src/assets/mini-images/frostelement.jpg' },
  { id: 4, src: 'src/assets/images/zeke.jpg', alt: 'Imagen 4', title: 'zeke', miniImage1: 'src/assets/mini-images/dps.jpg', miniImage2: 'src/assets/mini-images/zekedual.jpg' },

  // Agrega más objetos de imágenes aquí
];

function ImageGrid() {
    return (
      <div className="image-grid">
        {imagesData.map((image) => (
          <div key={image.id} className="image-item">
            <div className="image-box">
              <img src={image.src} alt={image.alt} className="main-image" />
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
        ))}
      </div>
    );
  }
  
export default ImageGrid;