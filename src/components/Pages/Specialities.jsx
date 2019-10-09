import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import store from '../../redux/store';
import { getAllSpecialities } from '../../redux/actionCreators';
import Card from '../Organisms/Card';
import { connect } from 'react-redux';

const Specialities = ({ especialities }) => {
  useEffect(() => {
    store.dispatch(getAllSpecialities());
  }, []);

  return (
    <>
      <Banner
        color='first-color'
        title='Especialidades'
        subtitle='Domina una especialidad de Ingeniería'
        image={{
          src:
            'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          alt: 'especialidades de ingeniería'
        }}
      />
      {especialities && (
        <main className='ed-grid m-grid-3'>
          {especialities.map(e => (
            <Card
              path='especialidades'
              key={e.id}
              id={e.id}
              title={e.title}
              image={e.image}
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  especialities: state.specialityReducer.specialities
});

export default connect(mapStateToProps)(Specialities);
