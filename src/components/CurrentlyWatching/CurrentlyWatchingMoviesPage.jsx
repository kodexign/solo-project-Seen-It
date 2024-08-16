import React, { useEffect, useState } from 'react';
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

//button works but w/error: 
//Error setting media to completed: 
//TypeError: Cannot destructure property 'id' of 'action.payload' 
//as it is undefined.
  const handleComplete = (media) => {
    const mediaId = media.id;
    dispatch({ type: 'UPDATE_STATUS_TO_COMPLETED', payload: mediaId});
    console.log ('handleComplete successful');

  };
  //button works but not dispatching
  const handleDelete = (media) =>{
    dispatch({ type:'SET_DELETE_MEDIA', payload: media})
    console.log ('handleDelete Successful');
  }

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
              <div className='statusChangeButtons'>
                <button onClick={handleDelete(movie.id)}> Delete </button>
                <button> To Watch</button>
                <button onClick={handleComplete}> Completed </button>
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

export default CurrentlyWatchingMoviesPage;