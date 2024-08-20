import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UserPage.css';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const recentlyAdded = useSelector(store => store.threeRecentReducer);
  const threeCurrent = useSelector(store => store.threeCurrentReducer);
  const history = useHistory();
  console.log(recentlyAdded);


  useEffect(() => {
    dispatch({ type: 'FETCH_RECENTLY_ADDED' });
    dispatch({ type: 'FETCH_THREE_CURRENT' });
  }, []);

  return (
    <div className="container">
      
      <div className='welcome'>
        <h1>Dashboard</h1>
      <h2>Welcome, {user.first_name}!</h2>
       
      </div>
      <div className="dashboard">
        <div>
        <div className='add-new-link'>
            <Link className="navLink" to="/addnewmediaform">
              Add New
            </Link>
          </div>
          <div className='currently-watching'>
            <h3>Currently Watching</h3>
            <section className="three-current">
              {threeCurrent.map(media => {
                return (
                  <div data-testid='mediaItem' key={media.id}>
                    <p>{media.title}</p>
                  </div>
                );
              })}
            </section>
          </div>

          <div className='recently-added'>
            <h3>Recently Added</h3>
            <section className="three-recent">
              {recentlyAdded.map(media => {
                return (
                  <div data-testid='mediaItem' key={media.id}>
                    <p>{media.title}</p>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
        </div>
      </div>

  );
}

// this allows us to use <App /> in index.js
export default UserPage;
