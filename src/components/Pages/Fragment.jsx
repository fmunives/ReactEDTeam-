import React, { useEffect } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getCourse, getFragment } from '../../redux/actionCreators';
import { Link } from 'react-router-dom';

const Fragment = ({ fragment, course }) => {
  useEffect(() => {
    store.dispatch(getCourse(1));
    store.dispatch(getFragment(123));
  }, []);
  return (
    <div className='class-page-container background dark-color s-pxy-4'>
      {fragment && course && (
        <div className='ed-grid lg-grid-12'>
          <div className='lg-cols-8'>
            <div className=''>
              <div className=''>
                {' '}
                <Vimeo video={fragment.video} width={780} />
              </div>
              <div className=''>
                <h1 className='t3 color accent-color s-mb-0'>
                  {fragment.name}
                </h1>
                <span className='color light-color'>{course.title}</span>
              </div>
            </div>
          </div>
          <div className='lg-cols-4'>
            <div className=''>
              <h2 className='t3 '>Temario del curso</h2>
              <ul className='data-list'>
                {course.temario.map(t => (
                  <div className='course-class l-section' key={t.id}>
                    <h3 className='color light-color'>{t.title}</h3>
                    <ul className='data-list'>
                      {t.content.map(c => (
                        <li>
                          <Link
                            to={`/clases/${c.id}`}
                            className='color light-color'
                          >
                            {c.valor}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  fragment: state.fragmentReducer.fragment,
  course: state.courseReducer.course
});

export default connect(
  mapStateToProps,
  {}
)(Fragment);
