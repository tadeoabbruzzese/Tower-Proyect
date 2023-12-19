import fs from 'fs';

const fileName = 'cnversion.json';  // Reemplaza 'tu_archivo.json' con el nombre de tu archivo JSON

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const reversedData = jsonData.reverse();
    
    fs.writeFile(fileName, JSON.stringify(reversedData, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error al escribir el archivo:', err);
      } else {
        console.log('Archivo invertido con éxito.');
      }
    });
  } catch (err) {
    console.error('Error al analizar el JSON:', err);
  }
});
