import React from 'react';
import { useParams } from 'react-router-dom';
import './../styles/ImageDetail.css'
import CharacterDetail from '../components/CharacterDetail/CharacterDetail';

function ImageDetail() {
  
  const { imageName } = useParams();

  // Utiliza el nombre de la imagen para mostrar los detalles correspondientes

  return (
    <div style={{ minHeight: "100vh" }}>
      
      <CharacterDetail imageName={imageName} />
      {/* Resto de los detalles de la imagen */}
    </div>
  );
}

export default ImageDetail; // Exporta el componente con el nombre correcto
