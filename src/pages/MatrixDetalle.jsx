import React from 'react';
import { useParams } from 'react-router-dom';
import './../styles/ImageDetail.css'
import MatrixDetail from '../components/MatrixDetail';

function MatrixDetalle() {
  
  const { matrizName } = useParams();

  // Utiliza el nombre de la imagen para mostrar los detalles correspondientes

  return (
    <div style={{ minHeight: "100vh" }}>
      
      <MatrixDetail/>
      {/* Resto de los detalles de la imagen */}
    </div>
  );
}

export default MatrixDetalle; // Exporta el componente con el nombre correcto
