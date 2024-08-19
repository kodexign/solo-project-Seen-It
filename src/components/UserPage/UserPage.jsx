import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const recentlyAdded = useSelector(store => store.mediaReducer);
  
   
    const history = useHistory();
    console.log (recentlyAdded);
   
  
    useEffect(() => {
      dispatch({ type: 'FETCH_RECENTLY_ADDED' })
    }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />

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

// this allows us to use <App /> in index.js
export default UserPage;
