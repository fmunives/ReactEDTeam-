import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllCourses } from '../../redux/actionCreators';
import Card from '../Organisms/Card';

const Courses = ({ courses }) => {
  useEffect(() => {
    store.dispatch(getAllCourses());
  }, []);

  return (
    <>
      <Banner
        color='dark-color'
        title='Cursos'
        subtitle='Domina los mejores cursos de ingeniería'
        image={{
          src:
            'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          alt: 'cursos de ingeniería'
        }}
      />
      {courses && (
        <main className='ed-grid m-grid-4'>
          {courses.map(c => (
            <Card
              path='cursos'
              key={c.id}
              id={c.id}
              image={c.image}
              title={c.title}
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
});

export default connect(
  mapStateToProps,
  {}
)(Courses);
