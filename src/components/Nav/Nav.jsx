import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">SeenIt!</h2>
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
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <Link className="navLink" to="/addnewmediaform">
              Add New
            </Link>
            <Link className="navLink" to="/dashboard">
              Dashboard
            </Link>
            <Link className="navLink" to="/moviespage">
              Movies
            </Link>

    

            <div className="dropdown">
            <Link className="navLink" to="tvshowspage">
              <button className="dropbtn">TV Shows</button>
              </Link>
              <div className="dropdown-content">
                <Link className="navLink" to="/completed-movies">
              Movies
            </Link>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
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
