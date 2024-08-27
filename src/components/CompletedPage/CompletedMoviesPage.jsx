import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CompletedPage.css';
import { useHistory } from 'react-router-dom';
import './CompletedPage.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StopIcon from '@mui/icons-material/Stop';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FastForwardIcon from '@mui/icons-material/FastForward';

function CompletedMoviesPage() {
  const currentStatusId = 1;
  const mediaType = 'movie';
  
  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES', payload: {currentStatusId} });
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

  return (
    <main>
      <div className="container">
        <div>
          <h2 className='page-title-complete'><StopIcon fontSize='large'></StopIcon>Completed Movies<StopIcon fontSize='large'></StopIcon></h2>
        </div>
        <div className='complete-list'>
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
                <td className='tdTitle'>{movie.title}</td>
                <td>{movie.platform}</td>
                <td className='tdButton'>
                <button className="toWatchButton" title='To Watch' onClick={() => handleUpdate(movie.id, 3)}> <FastForwardIcon></FastForwardIcon>
                    </button>
                    <button className="currentlyButton" title='Currently Watching' onClick={() => handleUpdate(movie.id, 2)}><PlayArrowIcon></PlayArrowIcon></button>
                    <button className="dnfButton" title='DidNotFinish' onClick={() => handleUpdate(movie.id, 4)}> <PauseIcon></PauseIcon> </button>
                    <button className="deleteButton" title='Delete' onClick={() => handleDelete(movie)}> <DeleteOutlineIcon></DeleteOutlineIcon> </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
      </div>
    </main>
  );
}

export default CompletedMoviesPage;
