import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CompletedPage.css';
import { useHistory } from 'react-router-dom';

function CompletedShowsPage() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_COMPLETED_SHOWS' });
  }, []);
  // const handleClick = (id) => {
  //   history.push(`/details/${id}`);
  // };

  return (
    <main>
    <div className="container">
      <div>
        <h2>Completed Shows Page</h2>
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

export default CompletedShowsPage;

  