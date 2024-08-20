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
  console.log ('handleDelete Successful, deleted :', mediaId, show.title);
}
dispatch({ type: 'FETCH_CURRENT_SHOWS', payload: shows});

return (
  <main>
  <div className="container">
    <div>
      <h2>Currently Watching Shows List</h2>
    </div>
    <section className="shows">
      {shows.map(show => {
        return (
          <div data-testid='movieItem' key={show.id}>
            <p value={show.id}>{show.title}</p>
            <div className='statusChangeButtons'>
              <button className="deleteButton" onClick={() => handleDelete(show)}> Delete </button>
              <button className="toWatchButton" onClick={() => handleToWatch(show)}> To Watch</button>
              <button className="completedButton" onClick={() => handleComplete(show)}> Completed </button>
              <button className="dnfButton" onClick={() => handleDNF(show)}> DNF </button>
              </div>
          </div>
        );
      })}
    </section>

    </div>
    </main>
  );
}

export default CurrentlyWatchingShowsPage;