import React from 'react';

function HighlightedNumbers({ text }) {
  const renderTextWithStyledNumbers = () => {
    // Verifica si el texto es una cadena antes de dividirlo
    const textArray = typeof text === 'string' ? text.split(/(\d+)/) : [text];

    return textArray.map((part, index) => {
      // Si es un número, aplicar el estilo
      if (!isNaN(part)) {
        return <span className="numero" key={index}>{part}</span>;
      } else {
        return part;
      }
    });
  };

  return <div>{renderTextWithStyledNumbers()}</div>;
}

export default HighlightedNumbers;
