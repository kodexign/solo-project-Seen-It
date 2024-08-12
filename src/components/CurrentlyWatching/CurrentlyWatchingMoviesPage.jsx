import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CurrentlyWatchingPage.css';
import { useHistory } from 'react-router-dom';

function CurrentlyWatchingMoviesPage() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_CURRENT_MOVIES' }); // type is from movies.saga.js
  }, []);
  // const handleClick = (id) => {
  //   history.push(`/details/${id}`);
  // };

  return (
    <main>
    <div className="container">
      <div>
        <h2>Currently Watching Movies List</h2>
      </div>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <p>{movie.title}</p>
            </div>
          );
        })}
      </section>

    </div>
    </main>
  );
}

export default CurrentlyWatchingMoviesPage;