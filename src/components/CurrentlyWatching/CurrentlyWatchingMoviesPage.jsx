import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CurrentlyWatchingPage.css';
import { useHistory } from 'react-router-dom';

function CurrentlyWatchingMoviesPage() {

  const currentStatusId = 2;
  const mediaType = 'movie';

  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);
  const history = useHistory();


  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES', payload: {currentStatusId} }); // type is from movies.saga.js
  }, []);

    //update status
    const handleUpdate = (mediaId, updateStatusId) => {
      console.log('logging mediaId:', mediaId);
      dispatch({ type: 'UPDATE_STATUS', payload: { mediaId: mediaId, updateStatusId, mediaType: 'movie', currentStatusId } });
      console.log(`handleUpdate successful: mediaId: ${mediaId}, updateStatusId: ${updateStatusId}, mediaType: ${mediaType}, currentStatusId: ${currentStatusId}`);
    };
  
  //delete media from database
  const handleDelete = (movie) =>{
    console.log ('logging mediaId:', movie.id);
    dispatch({ type:'DELETE_MEDIA',  payload: { mediaId: movie.id, mediaType: mediaType, currentStatusId }});
    alert(`${movie.title} has been Deleted permanently! If you want to see it on a list again, please re-add!`);
    console.log(`handleDelete Successful: mediaId: ${movie.id}, mediaType: ${mediaType}, currentStatusId: ${currentStatusId}`);
  }

  return (
    <main>
      <div className="container">
        <div>
          <h2 className='page-title'>Currently Watching Movies List</h2>
        </div>

        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Platform</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.platform}</td>
                <td>
                  <button className="toWatchButton" onClick={() => handleUpdate(movie.id, 3)}>To Watch</button>
                  <button className="completedButton" onClick={() => handleUpdate(movie.id, 1)}>Completed</button>
                  <button className="dnfButton" onClick={() => handleUpdate(movie.id, 4)}>DNF</button>
                  <button className="deleteButton" onClick={() => handleDelete(movie)}> Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </main>
  );
}

export default CurrentlyWatchingMoviesPage;