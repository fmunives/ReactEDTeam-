import React, { useEffect } from 'react';
import store from '../../redux/store';
import { getEspeciality } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import Banner from '../Organisms/Banner';

const Speciality = ({ speciality }) => {
  useEffect(() => {
    store.dispatch(getEspeciality(1));
  }, []);
  return (
    <>
      {speciality && (
        <>
          <Banner
            color='dark-color'
            title={speciality.title}
            subtitle={speciality.subtitle}
            content={speciality.content}
            image={{
              src:
                'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              alt: ''
            }}
            courseBanner
            poster={speciality.image}
          />
          <main className='ed-grid lg-grid-10'>
            <div className='lg-cols-7'>
              <div className='course-feature ed-grid lg-grid-3 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom'>
                <div>
                  <h3 className='t4'>¿Qué aprenderás?</h3>
                  <ul
                    dangerouslySetInnerHTML={{ __html: speciality.you_learn }}
                  />
                </div>
                <div>
                  <h3 className='t4'>Conocimientos previos</h3>
                  <ul
                    dangerouslySetInnerHTML={{ __html: speciality.previos }}
                  />
                </div>
                <div>
                  <h3 className='t4'>Nivel</h3>
                  <p>{speciality.level}</p>
                </div>
              </div>

              <h2>Temario de la especialidad</h2>
              <div className='s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom'>
                {speciality.cursos.map(c => (
                  <div className='course-class l-section' key={c.id}>
                    <div className='ed-grid m-grid-3'>
                      <img src={c.image} alt={c.title} />
                      <div className='m-cols-2'>
                        <h3>{c.title}</h3>
                        <p>{c.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  speciality: state.specialityReducer.speciality
});

export default connect(
  mapStateToProps,
  {}
)(Speciality);
