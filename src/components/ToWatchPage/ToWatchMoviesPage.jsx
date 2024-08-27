import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ToWatchPage.css';
import { useHistory } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StopIcon from '@mui/icons-material/Stop';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FastForwardIcon from '@mui/icons-material/FastForward';

function ToWatchMoviesPage() {

  const currentStatusId = 3;
  const mediaType = 'movie';

  const dispatch = useDispatch();
  const movies = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES', payload: { currentStatusId } });
  }, []);

  //update status
  const handleUpdate = (mediaId, updateStatusId) => {
    console.log('logging mediaId:', mediaId);
    dispatch({ type: 'UPDATE_STATUS', payload: { mediaId: mediaId, updateStatusId, mediaType: 'movie', currentStatusId } });
    console.log(`handleUpdate successful: mediaId: ${mediaId}, updateStatusId: ${updateStatusId}, mediaType: ${mediaType}, currentStatusId: ${currentStatusId}`);
  };

  //delete media from database
  const handleDelete = (movie) => {
    console.log('logging mediaId:', movie.id);
    dispatch({ type: 'DELETE_MEDIA', payload: { mediaId: movie.id, mediaType: mediaType, currentStatusId } });
    alert(`${movie.title} has been Deleted permanently! If you want to see it on a list again, please re-add!`);
    console.log(`handleDelete Successful: mediaId: ${movie.id}, mediaType: ${mediaType}, currentStatusId: ${currentStatusId}`);
  }


  return (
    <main>
      <div className="container">
        <div>
          <h2 className='page-title-to-watch'>
            <button className="toWatchButton"> <FastForwardIcon></FastForwardIcon></button> To Watch Movies <button className="toWatchButton"> <FastForwardIcon></FastForwardIcon></button></h2>
        </div>

        <div className='to-watch-list'>
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
                  <td className='td-movie-title'>{movie.title}</td>
                  <td>{movie.platform}</td>
                  <td className='tdButton'>
                    <button className="completedButton" title='Completed' onClick={() => handleUpdate(movie.id, 1)}> <StopIcon></StopIcon></button>
                    <button className="currentlyButton" title='Currently Watching' onClick={() => handleUpdate(movie.id, 2)}> <PlayArrowIcon></PlayArrowIcon></button>
                    <button className="dnfButton" title='Did Not Finish' onClick={() => handleUpdate(movie.id, 4)}><PauseIcon></PauseIcon></button>
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

export default ToWatchMoviesPage;