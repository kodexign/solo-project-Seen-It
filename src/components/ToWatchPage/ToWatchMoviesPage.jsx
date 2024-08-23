import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ToWatchPage.css';
import { useHistory } from 'react-router-dom';

function ToWatchMoviesPage() {

  const currentStatusId = 3;
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

  // //update status to complete
  // const handleComplete = (movie) => {
  //   const mediaId = movie.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'UPDATE_STATUS_TO_COMPLETED', payload: { id: mediaId } });
  //   dispatch({ type: 'FETCH_TO_WATCH_MOVIES' });
  //   console.log('handleComplete successful');

  // };

  // //update status to did not finish
  // const handleDNF = (movie) => {
  //   const mediaId = movie.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'UPDATE_STATUS_TO_DNF', payload: { id: mediaId } });
  //   dispatch({ type: 'FETCH_TO_WATCH_MOVIES' });
  //   console.log('handleComplete successful');

  // };
  // //update status to currently watching
  // const handleCurrentlyWatching = (movie) => {
  //   const mediaId = movie.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'UPDATE_STATUS_TO_CURRENTLY_WATCHING', payload: { id: mediaId } });
  //   dispatch({ type: 'FETCH_TO_WATCH_MOVIES' });
  //   console.log('handleComplete successful');

  // };

  // //delete media from database
  // const handleDelete = (movie) => {
  //   const mediaId = movie.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'DELETE_MEDIA', payload: { id: mediaId } });
  //   dispatch({ type: 'FETCH_TO_WATCH_MOVIES' });
  //   alert(`${movie.title} has been Deleted permanently! If you want to see it on a list again, please re-add!`);
  //   console.log('handleDelete Successful, deleted :', mediaId, movie.title);
  // }

  return (
    <main>
      <div className="container">
        <div>
          <h2 className='page-title'>To Watch Movies List</h2>
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
                  <button className="completedButton" onClick={() => handleUpdate(movie.id, 1)}> Completed </button>
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

export default ToWatchMoviesPage;