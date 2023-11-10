import React from 'react';
import { useParams } from 'react-router-dom';
import './../styles/ImageDetail.css'

function ImageDetail() {
  const { imageName } = useParams();

  // Utiliza el nombre de la imagen para mostrar los detalles correspondientes

  return (
    <div style={{ height: '100vh' }}>
      <h1>Detalles de {imageName}</h1>
      {/* Resto de los detalles de la imagen */}
    </div>
  );
}

export default ImageDetail; // Exporta el componente con el nombre correcto
