import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DidNotFinishPage.css';
import { useHistory } from 'react-router-dom';

function DidNotFinishShowsPage() {

  const currentStatusId = 4;
  const mediaType = 'show';

  const dispatch = useDispatch();
  const shows = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_SHOWS', payload: {currentStatusId} });
  }, []);

 //update status to complete
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

  // //update status to complete
  // const handleComplete = (show) => {
  //   const mediaId = show.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'UPDATE_STATUS_TO_COMPLETED', payload: { id: mediaId } });
  //   console.log('handleComplete successful');

  // };

  // //update status to  to watch
  // const handleToWatch = (show) => {
  //   const mediaId = show.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'UPDATE_STATUS_TO_WATCH', payload: { id: mediaId } });
  //   console.log('handleComplete successful');
  // };

  // //update status to currently watching
  // const handleCurrentlyWatching = (show) => {
  //   const mediaId = show.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'UPDATE_STATUS_TO_CURRENTLY_WATCHING', payload: { id: mediaId } });
  //   console.log('handleComplete successful');

  // };

  // //delete media from database
  // const handleDelete = (show) => {
  //   const mediaId = show.id;
  //   console.log('logging mediaId:', mediaId);
  //   dispatch({ type: 'DELETE_MEDIA', payload: { id: mediaId } });
  //   alert(`${show.title} has been Deleted Forever!`);
  //   dispatch({ type: 'FETCH_DNF_SHOWS' });
  //   console.log('handleDelete Successful, deleted :', mediaId, show.title);
  // }

  return (
    <main>
      <div className="container">
        <div>
        <h2 className='page-title'>Did Not Finish Shows <br />(DNF)</h2>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Season</th>
              <th># of Eps</th>
              <th>Platform</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {shows.map(show => (
              <tr key={show.id}>
                <td>{show.title}</td>
                <td>{show.season_number}</td>
                <td>{show.number_of_episodes}</td>
                <td>{show.platform}</td>
                <td>
                  <button className="toWatchButton" onClick={() => handleUpdate(show.id, 3)}> To Watch</button>
                  <button className="completedButton" onClick={() => handleUpdate(show.id, 1)}> Completed </button>
                  <button className="currentlyButton" onClick={() => handleUpdate(show.id, 2)}> Watching</button>
                  <button className="deleteButton" onClick={() => handleDelete(show)}> Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </main>
  );
}

export default DidNotFinishShowsPage;