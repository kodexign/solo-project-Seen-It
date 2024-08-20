import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddNewMediaForm from '../AddNewMediaForm/AddNewMediaForm';
import MoviesPage from '../MoviesPage/MoviesPage';
import TVShowsPage from '../TVShowsPage/TVShowsPage';
import CompletedMoviesPage from '../CompletedPage/CompletedMoviesPage';
import CompletedShowsPage from '../CompletedPage/CompletedShowsPage';
import CurrentlyWatchingMoviesPage from '../CurrentlyWatching/CurrentlyWatchingMoviesPage';
import CurrentlyWatchingShowsPage from '../CurrentlyWatching/CurrentlyWatchingShowsPage';
import ToWatchMoviesPage from '../ToWatchPage/ToWatchMoviesPage';
import ToWatchShowsPage from '../ToWatchPage/ToWatchShowsPage';
import DidNotFinishMoviesPage from '../DidNotFinishPage/DidNotFinishMoviesPage';
import DidNotFinishShowsPage from '../DidNotFinishPage/DidNotFinishShowsPage';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute // logged in shows ADD NEW MEDIA FORM
            exact path="/addnewmediaform"
          >
            <AddNewMediaForm />

          </ProtectedRoute>
  
  {/* MOVIE PATHS */}
          <ProtectedRoute // logged in shows MOVIES PAGE
            exact path="/moviespage"
          >
            <MoviesPage />
          </ProtectedRoute>

          <ProtectedRoute // logged in shows COMPLETED MOVIES PAGE
            exact path="/completed-movies"
          >
            <CompletedMoviesPage />
          </ProtectedRoute>

          <ProtectedRoute // logged in shows CURRENTLY WATCHING MOVIES PAGE
            exact path="/currently-watching-movies"
          >
            <CurrentlyWatchingMoviesPage/>
          </ProtectedRoute>

          <ProtectedRoute // logged in shows TO WATCH MOVIES PAGE
            exact path="/to-watch-movies"
          >
            <ToWatchMoviesPage />
          </ProtectedRoute>

          <ProtectedRoute // logged in shows DID NOT FINISH MOVIES PAGE
            exact path="/did-not-finish-movies"
          >
            <DidNotFinishMoviesPage />
          </ProtectedRoute>

  {/* TV SHOW PATHS */}
  
          <ProtectedRoute // logged in shows COMPLETED SHOWS PAGE
            exact path="/tvshowspage"
          >
            <TVShowsPage />
          </ProtectedRoute>

          <ProtectedRoute // logged in shows COMPLETED SHOWS PAGE
            exact path="/completed-shows"
          >
            <CompletedShowsPage />
          </ProtectedRoute>

          <ProtectedRoute // logged in shows CURRENTLY WATCHING SHOWS PAGE
            exact path="/currently-watching-shows"
          >
            <CurrentlyWatchingShowsPage />
          </ProtectedRoute>

          <ProtectedRoute // logged in shows TO WATCH SHOWS PAGE
            exact path="/to-watch-shows"
          >
            <ToWatchShowsPage />
          </ProtectedRoute>

          <ProtectedRoute // logged in shows DID NOT FINISH SHOWS PAGE
            exact path="/did-not-finish-shows"
          >
            <DidNotFinishShowsPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
