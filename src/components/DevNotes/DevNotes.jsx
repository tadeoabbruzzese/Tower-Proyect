// DevNotes.jsx
import React from 'react';
import './DevNotes.css';
import { Link } from 'react-router-dom';
import DevNotesPage from '../../pages/DevNotesPage/DevNotesPage';

const DevNotes = ({ title, description, update }) => {
  const formattedTitle = title ? title.replace(/\s+/g, '-').toLowerCase() : '';

  return (
    <>
      <Link to={`/devnotes/${formattedTitle}`} className="card-link">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='last-updated'>{update}</p>
        </div>
      </div>
    </Link>

    

    </>
  );
};

export default DevNotes;
