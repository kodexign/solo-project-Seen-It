import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ToWatchPage.css';
import { useHistory } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StopIcon from '@mui/icons-material/Stop';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FastForwardIcon from '@mui/icons-material/FastForward';

function ToWatchShowsPage() {

  const currentStatusId = 3;
  const mediaType = 'show';

  const dispatch = useDispatch();
  const shows = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_SHOWS', payload: {currentStatusId} });
  }, []);

  //update status
  const handleUpdate = (mediaId, updateStatusId) => {
    console.log('logging mediaId:', mediaId);
    dispatch({ type: 'UPDATE_STATUS', payload: { mediaId: mediaId, updateStatusId, mediaType: mediaType, currentStatusId } });
    console.log(`handleUpdate successful: mediaId: ${mediaId}, updateStatusId: ${updateStatusId}, mediaType: ${mediaType}, currentStatusId: ${currentStatusId}`);
  };

  //delete media from database
  const handleDelete = (show) => {
    console.log('logging mediaId:', show.id);
    dispatch({ type: 'DELETE_MEDIA', payload: { mediaId: show.id, mediaType: mediaType, currentStatusId } });
    alert(`${show.title} has been Deleted permanently! If you want to see it on a list again, please re-add!`);
    console.log(`handleDelete Successful: mediaId: ${show.id}, mediaType: ${mediaType}, currentStatusId: ${currentStatusId}`);
  }

  
  return (
    <main>
      <div className="container">
        <div>
        <h2 className='page-title-to-watch'>
          <button className="toWatchButton"> <FastForwardIcon></FastForwardIcon></button> To Watch Shows <button className="toWatchButton"> <FastForwardIcon></FastForwardIcon></button></h2>
        </div>

        <div className='complete-list'>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Season</th>
              <th>#of Eps</th>
              <th>Platform</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {shows.map(show => (
              <tr key={show.id}>
                <td className='tdTitle'>{show.title}</td>
                <td>{show.season_number}</td>
                <td>{show.number_of_episodes}</td>
                <td>{show.platform}</td>
                <td className='tdButton'>
                  <button className="completedButton" title = 'Completed' onClick={() => handleUpdate(show.id, 1)}> <StopIcon></StopIcon> </button>
                  <button className="currentlyButton" title = 'Currently Watching' onClick={() => handleUpdate(show.id, 2)}> <PlayArrowIcon></PlayArrowIcon></button>
                  <button className="dnfButton" title = 'Did Not Finish' onClick={() => handleUpdate(show.id, 4)}><PauseIcon></PauseIcon></button>
                  <button className="deleteButton" title = 'Delete' onClick={() => handleDelete(show)}> <DeleteOutlineIcon></DeleteOutlineIcon> </button>
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

export default ToWatchShowsPage;