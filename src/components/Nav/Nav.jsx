import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useDispatch, useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const clearMedia = () => {
    dispatch({ type: 'CLEAR_MEDIA' });
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Seen<span style={{ color: '#08b1ff' }}>It!</span> </h2>
      </Link>
      <div>
     

        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>

            <Link className="navLink" to="/user">
              Dashboard
            </Link>

            <Link className="navLink" to="/addnewmediaform">
              Add New
            </Link>

            <div className="dropdown">
              <Link className="navLink" to="tvshowspage">
                TV Shows
              </Link>

              <div className="dropdown-content">
                <Link className="navLink" to="/completed-shows" >
                  Completed
                </Link>
                <Link className="navLink" to="/currently-watching-shows" >
                  Currently Watching
                </Link>
                <Link className="navLink" to="/to-watch-shows" >
                  To Watch
                </Link>
                <Link className="navLink" to="/did-not-finish-shows" >
                  Did Not Finish
                </Link>
              </div>
            </div>

            <div className="dropdown">
              <Link className="navLink" to="/moviespage">
                Movies
              </Link>
              
              <div className="dropdown-content">
                <Link className="navLink" to="/completed-movies">
                  Completed
                </Link>
                <Link className="navLink" to="/currently-watching-movies" >
                  Currently Watching
                </Link>
                <Link className="navLink" to="/to-watch-movies" >
                  To Watch
                </Link>
                <Link className="navLink" to="/did-not-finish-movies" >
                  Did Not Finish
                </Link>
              </div>
            </div>


            <LogOutButton className="navLink" />

          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>

      </div>
    </div>
  );
}

export default Nav;
