import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllPost } from '../../redux/actionCreators';
import Publication from '../Organisms/Publication';

const Home = ({ posts }) => {
  useEffect(() => {
    store.dispatch(getAllPost());
  }, []);

  return (
    <>
      <Banner
        color='dark-color'
        image={{
          src:
            'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          image: ''
        }}
        title='Especializados en Ingeniería, Arquitectura y Construcción'
        subtitle='Nuestro equipo brinda servicios y ha desarrollado cursos especializados. Sabemos que estás buscando contenido de calidad. Aquí lo encontrarás.'
        home
        poster='https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      />
      <main className='ed-grid m-grid-3'>
        <div className='l-section m-cols-2'>
          <h2>Últimas publicaciones</h2>
          {posts ? (
            <div>
              {posts.map(p => (
                <Publication
                  author={p.author}
                  title={p.title}
                  content={p.content}
                  date={p.date}
                  key={p.id}
                />
              ))}
            </div>
          ) : (
            <p>No existen publicaciones</p>
          )}
        </div>
        <div>
          <h3>Lista de categorías</h3>
          <ul className='feature-list'>
            <li>
              <span>React desde cero</span>
            </li>
            <li>
              <span>Angular desde cero</span>
            </li>
            <li>
              <span>Vue desde cero</span>
            </li>
            <li>
              <span>C# desde cero</span>
            </li>
            <li>
              <span>Android desde cero</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.postReducer.posts
});

export default connect(
  mapStateToProps,
  {}
)(Home);
