import React from 'react';

function HighlightedNumbers({ text }) {
  const renderTextWithStyledNumbers = () => {
    const textArray = text.split(/(\d+)/);

    return textArray.map((part, index) => {
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
