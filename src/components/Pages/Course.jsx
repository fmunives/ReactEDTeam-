import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getCourse } from '../../redux/actionCreators';
import Banner from '../Organisms/Banner';
import Teacher from '../Organisms/Teacher';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  useEffect(() => {
    store.dispatch(getCourse(1));
  }, []);
  return (
    <>
      {course && (
        <>
          <Banner
            color='dark-color'
            title={course.title}
            subtitle={course.subtitle}
            content={course.content}
            image={{
              src:
                'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              alt: ''
            }}
            courseBanner
            poster={course.image}
            especialidad={course.especialidad}
          />
          <main className='ed-grid lg-grid-10'>
            <div className='l-cols-7'>
              <div className='course-feature ed-grid lg-grid-3 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom'>
                <div>
                  <h3 className='t4'>¿Qué aprenderás?</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.you_learn }} />
                </div>
                <div>
                  <h3 className='t4'>Conocimientos previos</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.previos }} />
                </div>
                <div>
                  <h3 className='t4'>Nivel</h3>
                  <p>{course.level}</p>
                </div>
              </div>
              <h2>Temario del curso {course.title}</h2>
              <div className='s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom'>
                {course.temario.map(t => (
                  <div className='course-class l-section' key={t.id}>
                    <h3>{t.title}</h3>
                    <p>{t.subtitle}</p>
                    <ul className='data-list'>
                      {t.content.map(c => (
                        <li>
                          <Link
                            to={`/clases/${c.id}`}
                            className='color dark-color'
                          >
                            {c.valor}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className='l-cols-3'>
              <Teacher
                key='1'
                image='https://images.pexels.com/users/avatars/571159/fox-254.jpeg?w=256&h=256&fit=crop&crop=faces'
                nombre='Miguel Guillen'
                especialidad='Ing. de mentira'
                pais='Pampas'
              />
            </div>
          </main>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  course: state.courseReducer.course
});

export default connect(
  mapStateToProps,
  {}
)(Course);
