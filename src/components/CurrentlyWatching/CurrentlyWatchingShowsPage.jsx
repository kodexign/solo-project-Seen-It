import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CurrentlyWatchingPage.css';
import { useHistory } from 'react-router-dom';

function CurrentlyWatchingShowsPage() {

  const dispatch = useDispatch();
  const shows = useSelector(store => store.mediaReducer);
  const history = useHistory();
  
  useEffect(() => {
    dispatch({ type: 'FETCH_CURRENT_SHOWS' }); // type is from movies.saga.js
  }, []);

 //update status to complete
 const handleComplete = (show) => {
  const mediaId = show.id;
  console.log ('logging mediaId:', mediaId);
  dispatch({ type: 'UPDATE_STATUS_TO_COMPLETED', payload: {id: mediaId}});
  console.log ('handleComplete successful');

};

//update status to  to watch
const handleToWatch = (show) => {
  const mediaId = show.id;
  console.log ('logging mediaId:', mediaId);
  dispatch({ type: 'UPDATE_STATUS_TO_WATCH', payload: {id: mediaId}});
  console.log ('handleComplete successful');

};
//update status to did not finish
const handleDNF = (show) => {
  const mediaId = show.id;
  console.log ('logging mediaId:', mediaId);
  dispatch({ type: 'UPDATE_STATUS_TO_DNF', payload: {id: mediaId}});
  console.log ('handleComplete successful');

};

//delete media from database
const handleDelete = (show) =>{
  const mediaId = show.id;
  console.log ('logging mediaId:', mediaId);
  dispatch({ type:'DELETE_MEDIA',  payload: {id: mediaId}});
  alert(`${show.title} has been Deleted Forever!`);
  dispatch({ type: 'FETCH_CURRENT_SHOWS' });
  console.log ('handleDelete Successful, deleted :', mediaId, show.title);
}



return (
  <main>
  <div className="container">
    <div>
    <h2 className='page-title'>Currently Watching Shows </h2>
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
          <button className="toWatchButton" onClick={() => handleToWatch(show)}>To Watch</button>
          <button className="completedButton" onClick={() => handleComplete(show)}>Completed</button>
          <button className="dnfButton" onClick={() => handleDNF(show)}>DNF</button>
          <button className="deleteButton" onClick={() => handleDelete(show)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
    </main>
  );
}

export default CurrentlyWatchingShowsPage;