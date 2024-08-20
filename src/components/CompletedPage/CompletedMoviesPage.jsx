import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CompletedPage.css';
import { useHistory } from 'react-router-dom';

function CompletedMoviesPage() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_COMPLETED_MOVIES' });
  }, []);

//update status to  to watch
const handleToWatch = (movie) => {
  const mediaId = movie.id;
  console.log ('logging mediaId:', mediaId);
  dispatch({ type: 'UPDATE_STATUS_TO_WATCH', payload: {id: mediaId}});
  alert(`${movie.title} has been moved to the To Watch Movies List!`);
  console.log ('handleComplete successful');
  
};
//update status to did not finish
const handleDNF = (movie) => {
  const mediaId = movie.id;
  console.log ('logging mediaId:', mediaId);
  dispatch({ type: 'UPDATE_STATUS_TO_DNF', payload: {id: mediaId}});
  alert(`${movie.title} has been moved to the Did Not Finish Movies List!`);
  console.log ('handleComplete successful');

};
//update status to currently watching
const handleCurrentlyWatching = (movie) => {
  const mediaId = movie.id;
  console.log ('logging mediaId:', mediaId);
  dispatch({ type: 'UPDATE_STATUS_TO_CURRENTLY_WATCHING', payload: {id: mediaId}});
  alert(`${movie.title} has been moved to the Currently Watching Movies List!`);
  console.log ('handleComplete successful');

};

//delete media from database
const handleDelete = (movie) =>{
  const mediaId = movie.id;
  console.log ('logging mediaId:', mediaId);
  dispatch({ type:'DELETE_MEDIA',  payload: {id: mediaId}});
  alert(`${movie.title} has been moved Deleted Forever!`);
  console.log ('handleDelete Successful, deleted :', mediaId, movie.title);
  
}

dispatch({ type: 'FETCH_COMPLETED_MOVIES', payload: movies });

return (
  <main>
  <div className="container">
    <div>
      <h2>Completed Movies List</h2>
    </div>
    <section className="movies">
      {movies.map(movie => {
        return (
          <div data-testid='movieItem' key={movie.id}>
            <p value={movie.id}>{movie.title}</p>
            <div className='statusChangeButtons'>
              <button className="deleteButton" onClick={() => handleDelete(movie)}> Delete </button>
              <button className="toWatchButton" onClick={() => handleToWatch(movie)}> To Watch</button>
              <button className="currentlyButton" onClick={() => handleCurrentlyWatching(movie)}> Currently Watching</button>
              <button className="dnfButton" onClick={() => handleDNF(movie)}> DNF </button>
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
