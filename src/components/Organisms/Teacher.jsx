import React from 'react';

const Teacher = ({ id, image, nombre, especialidad }) => {
  return (
    <article key={id}>
      <div className='s-px-4'>
        <div className='img-container circle s-mb-2'>
          <img src={image} alt={nombre} />
        </div>
      </div>
      <div className='s-center'>
        <p className='t3 s-mb-1'>{nombre}</p>
        <p>{especialidad}</p>
      </div>
    </article>
  );
};

export default Teacher;
