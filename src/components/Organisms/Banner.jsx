import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({
  color,
  title,
  subtitle,
  image,
  home,
  poster,
  courseBanner,
  especialidad,
  content
}) => (
  <div className={`main-banner img-container l-block ${color}`}>
    <div className='ed-grid'>
      <div className=''>
        <img src={image.src} alt={image.alt} className='main-banner__img' />
        {home ? (
          <div className='ed-grid m-grid-2'>
            <div className='main-banner__data s-center'>
              <h1 className='main-banner__title'>{title}</h1>
              <p>{subtitle}</p>
              <Link to='/cursos' className='button second-color'>
                Ver cursos
              </Link>
            </div>
            <div className='img-container s-ratio-16-9 s-radius-tr s-radius-tl s-radius-bl s-radius-br'>
              <img src={poster} alt='Diseño Estructural' />
            </div>
          </div>
        ) : courseBanner ? (
          <div className='ed-grid m-grid-3'>
            <div className='main-banner__data m-cols-2'>
              <h1 className='main-banner__title s-mb-0'>{title}</h1>
              <p className='s-opacity-6'>{subtitle}</p>
              <p>{content}</p>
              {especialidad && (
                <p>
                  Este curso forma parte del{' '}
                  <Link to='/especialidades'>{especialidad}</Link>
                </p>
              )}
            </div>
            <div className='img-container s-ratio-16-9 m-cols-1 s-radius-tr s-radius-tl s-radius-bl s-radius-br'>
              <img src={poster} alt='Diseño Estructural' />
            </div>
          </div>
        ) : (
          <div className='main-banner__data s-center'>
            <h1 className='main-banner__title'>{title}</h1>
            <p>{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Banner;
