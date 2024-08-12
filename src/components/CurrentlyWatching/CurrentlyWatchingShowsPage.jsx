import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CurrentlyWatchingPage.css';
import { useHistory } from 'react-router-dom';

function CurrentlyWatchingShowsPage() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_CURRENT_SHOWS' }); // type is from movies.saga.js
  }, []);
  // const handleClick = (id) => {
  //   history.push(`/details/${id}`);
  // };

  return (
    <main>
    <div className="container">
      <div>
        <h2>Currently Watching Shows List</h2>
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

export default CurrentlyWatchingShowsPage;