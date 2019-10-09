import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import store from '../../redux/store';
import { getAllTeachers } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import Teacher from '../Organisms/Teacher';

const Teachers = ({ match, teachers }) => {
  useEffect(() => {
    store.dispatch(getAllTeachers());
  }, [match]);

  return (
    <>
      <Banner
        color='third-color-alt'
        title='Nuestros profesores'
        image={{
          src:
            'https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          alt: 'Banner de profesores'
        }}
        subtitle='Este plantel docente está altamente calificado para guiarte en tu
      crecimiento profesional'
      />
      {teachers && (
        <main className='ed-grid m-grid-3 lg-grid-4 row-gap'>
          {teachers.map(t => (
            <Teacher
              key={t.id}
              image={t.image}
              nombre={t.nombre}
              especialidad={t.especialidad}
              pais={t.pais}
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
});

export default connect(
  mapStateToProps,
  {}
)(Teachers);
