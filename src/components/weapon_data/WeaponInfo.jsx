import React, { useState } from 'react';
import './WeaponInfo.css';

const WeaponInfo = () => {
  const [attacks, setAttacks] = useState([
    { name: 'Electro fireflies', description: 'Hola Hola Hola Hola Hola soy tadeo y me llamo' },
    { name: '', description: '' },
    { name: 'Electro fireflies', description: '' },
    { name: '', description: '' },
  ]);

  return (
    <table className="weapon-info-table">
      <thead>
        <tr>
          <th>attacks</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {attacks.map((attack, index) => (
          <tr key={index}>
            <td>{attack.name}</td>
            <td>{attack.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeaponInfo;
