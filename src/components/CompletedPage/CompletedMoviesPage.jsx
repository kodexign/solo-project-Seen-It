import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CompletedPage.css';
import { useHistory } from 'react-router-dom';
import './CompletedPage.css';

function CompletedMoviesPage() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_COMPLETED_MOVIES' });
  }, []);

   //update status
   const handleUpdate = (mediaId, updateStatusId) => {
    console.log('logging mediaId:', mediaId);
    dispatch({ type: 'UPDATE_STATUS', payload: { mediaId: mediaId, updateStatusId, mediaType: 'movie', currentStatusId}});
    console.log(`handleUpdate successful: mediaId: ${mediaId}, updateStatusId: ${updateStatusId}, mediaType: ${mediaType}, currentStatusId: ${currentStatusId}`);
  };

  //DELETE MEDIA FROM DATABASE
  const handleDelete = (movie) =>{
    console.log ('logging mediaId:', movie.id);
    dispatch({ type:'DELETE_MEDIA',  payload: { mediaId: movie.id, mediaType: mediaType, currentStatusId }});
    alert(`${movie.title} has been Deleted permanently! If you want to see it on a list again, please re-add!`);
    console.log(`handleDelete Successful: mediaId: ${movie.id}, mediaType: ${mediaType}, currentStatusId: ${currentStatusId}`);
  }


  // //update status to  to watch
  // const handleToWatch = (movie) => {
  //   const mediaId = movie.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'UPDATE_STATUS_TO_WATCH', payload: { id: mediaId } });
  //   console.log('handleComplete successful');

  // };
  // //update status to did not finish
  // const handleDNF = (movie) => {
  //   const mediaId = movie.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'UPDATE_STATUS_TO_DNF', payload: { id: mediaId } });
  //   console.log('handleComplete successful');

  // };
  // //update status to currently watching
  // const handleCurrentlyWatching = (movie) => {
  //   const mediaId = movie.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'UPDATE_STATUS_TO_CURRENTLY_WATCHING', payload: { id: mediaId } });
  //   console.log('handleComplete successful');

  // };

  // //delete media from database
  // const handleDelete = (movie) => {
  //   const mediaId = movie.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'DELETE_MEDIA', payload: { id: mediaId } });
  //   alert(`${movie.title} has been Deleted Forever!`);
  //   console.log('handleDelete Successful, deleted :', mediaId, movie.title);

  // }

  return (
    <main>
      <div className="container">
        <div>
          <h2 className='page-title'>Completed Movies</h2>
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
                  <button className="toWatchButton" onClick={() => handleUpdate(movie.id, 3)}> To Watch</button>
                  <button className="currentlyButton" onClick={() => handleUpdate(movie.id, 2)}>Watching</button>
                  <button className="dnfButton" onClick={() => handleUpdate(movie.id, 4)}> DNF </button>
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

export default CompletedMoviesPage;
