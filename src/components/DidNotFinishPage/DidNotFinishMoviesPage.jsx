import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DidNotFinishPage.css';
import { useHistory } from 'react-router-dom';

function DidNotFinishMoviesPage() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_DNF_MOVIES' }); // type is from movies.saga.js
  }, []);
  // const handleClick = (id) => {
  //   history.push(`/details/${id}`);
  // };

  return (
    <main>
    <div className="container">
      <div>
        <h2>Did Not Finish Movies List</h2>
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
                <button> DNF </button>
                </div>
            </div>
          );
        })}
      </section>

    </div>
    </main>
  );
}

export default DidNotFinishMoviesPage;