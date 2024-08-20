import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ToWatchPage.css';
import { useHistory } from 'react-router-dom';

function ToWatchShowsPage() {

  const dispatch = useDispatch();
  const shows = useSelector(store => store.mediaReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_TO_WATCH_SHOWS' }); // type is from movies.saga.js
  }, []);

  //update status to complete
  const handleComplete = (show) => {
    const mediaId = show.id;
    console.log('logging mediaId:', mediaId);
    dispatch({ type: 'UPDATE_STATUS_TO_COMPLETED', payload: { id: mediaId } });
    console.log('handleComplete successful');

  };

  //update status to did not finish
  const handleDNF = (show) => {
    const mediaId = show.id;
    console.log('logging mediaId:', mediaId);
    dispatch({ type: 'UPDATE_STATUS_TO_DNF', payload: { id: mediaId } });
    console.log('handleComplete successful');

  };
  //update status to currently watching
  const handleCurrentlyWatching = (show) => {
    const mediaId = show.id;
    console.log('logging mediaId:', mediaId);
    dispatch({ type: 'UPDATE_STATUS_TO_CURRENTLY_WATCHING', payload: { id: mediaId } });
    console.log('handleComplete successful');

  };

  //delete media from database
  const handleDelete = (show) => {
    const mediaId = show.id;
    console.log('logging mediaId:', mediaId);
    dispatch({ type: 'DELETE_MEDIA', payload: { id: mediaId } });
    alert(`${show.title} has been Deleted Forever!`);
    console.log('handleDelete Successful, deleted :', mediaId, show.title);
  }

  
  return (
    <main>
      <div className="container">
        <div>
          <h2>To Watch Shows List</h2>
        </div>
        <section className="movies">
          {shows.map(show => {
            return (
              <div data-testid='movieItem' key={show.id}>
                <p value={show.id}>{show.title}</p>
                <div className='statusChangeButtons'>
                  <button className="deleteButton" onClick={() => handleDelete(show)}> Delete </button>
                  <button className="completedButton" onClick={() => handleComplete(show)}> Completed </button>
                  <button className="currentlyButton" onClick={() => handleCurrentlyWatching(show)}> Currently Watching</button>
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

export default ToWatchShowsPage;