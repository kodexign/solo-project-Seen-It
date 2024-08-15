import React from 'react';
import { Link } from 'react-router-dom';
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';




// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Dashboard() {
  const dispatch = useDispatch();
  const recentlyAdded = useSelector(store => store.mediaReducer);

 
  const history = useHistory();
  console.log (recentlyAdded);
 

  useEffect(() => {
    dispatch({ type: 'FETCH_RECENTLY_ADDED' })
  }, []);
  return (
    <div className="container">
      <div>
        <h1>Dashboard</h1>
        
        <div>
          <h3>Currently Watching</h3>
 

        </div>

        <div>
        <h3>Recently Updated</h3>

        </div>
        <div>
        <h3>Recently Added</h3>
        <section className="recently-added">
        {recentlyAdded.map(media => {
          return (
            <div data-testid='mediaItem' key={media.id}>
              <p>{media.title}</p>
            </div>
          );
        })}
      </section>
        </div>
        <div>
        <Link className="navLink" to="/addnewmediaform">
              Add New
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;