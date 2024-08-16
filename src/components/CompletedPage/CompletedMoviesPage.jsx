import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CompletedPage.css';
import { useHistory } from 'react-router-dom';

function CompletedMoviesPage() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);

  const [completed, setComplete] = useState();
  const [dnf, setDnf] = useState();

  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_COMPLETED_MOVIES' });
  }, []);
  // const handleCurrentlyWatching = (id) => {
  //   dispatch({type: ""})
  // };

  return (
    <main>
    <div className="container">
      <div>
        <h2>CompletedMoviesPage</h2>
      </div>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <p>{movie.title}</p>
              <div className='statusChangeButtons'>
                <button> Delete </button>
                <button> Currently Watching</button>
                <button> Completed </button>
                <button> Did Not Finish </button>
                </div>
            </div>
          );
        })}
      </section>

    </div>
    </main>
  );
}

export default CompletedMoviesPage;
