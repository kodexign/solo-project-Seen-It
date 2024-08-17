import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ToWatchPage.css';
import { useHistory } from 'react-router-dom';

function ToWatchMoviesPage() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_TO_WATCH_MOVIES' }); // type is from movies.saga.js
  }, []);
  // const handleClick = (id) => {
  //   history.push(`/details/${id}`);
  // };

  const handleDelete = (movie) =>{
    
    const mediaId = movie.id;
    console.log ('logging mediaId:', mediaId);
    dispatch({ type:'DELETE_MEDIA',  payload: {id: mediaId}});
    console.log ('handleDelete Successful', mediaId);
  }

  return (
    <main>
    <div className="container">
      <div>
        <h2>To Watch Movies List</h2>
      </div>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <p>{movie.title}</p>
              <div className='statusChangeButtons'>
              <button  onClick={() => handleDelete(movie)}> Delete </button>
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

export default ToWatchMoviesPage;