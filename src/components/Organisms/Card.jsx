import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, title, path }) => {
  return (
    <article className='card s-border' key={id}>
      <div className='img-container s-ratio-16-9 s-radius-tr s-radius-tl'>
        <Link to={`/${path}/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className='card__data s-radius-br s-radius-bl s-pxy-2'>
        <h3 className='t5 s-mb-2 s-center'>{title}</h3>
      </div>
    </article>
  );
};

export default Card;
