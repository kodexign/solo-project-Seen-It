import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddNewMediaForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();
  
    const registerUser = (event) => {
      event.preventDefault();
  
      dispatch({
        type: 'REGISTER',
        payload: {
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: password,
        },
      });
    }; // end registerUser
  
    return (
      <form className="formPanel" onSubmit={registerUser}>
        <h2>Add New Media Form</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
              <div>
          <label htmlFor="title">
            <input
              type="text"
              name="title"
              value={firstName}
              placeholder='Title'
              required
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <input
              type="checkbox"
              name="checkMovie"
              value={lastName}
              required
              onChange={(event) => setLastName(event.target.value)}
            />
         <label htmlFor="checkMovie"> Movie</label>
         <input
              type="checkbox"
              name="checkTVShow"
              value={lastName}
              required
              onChange={(event) => setLastName(event.target.value)}
            />
         <label htmlFor="checkTVShow"> TV Show</label>
        </div>
        <div>
          <label htmlFor="seasonNum">
            <input
              type="text"
              name="seasonNumber"
              value={username}
              placeholder='Season Number'
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="numOfEps">
            <input
              type= "text"
              name="password"
              value={password}
               placeholder='Number of Episodes in Season'
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="platform">
            <input
              type= "text"
              name="password"
              value={password}
               placeholder='platform: where are you watching it'
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <input
              type="checkbox"
              name="checkCurrentlyWatching"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
         <label htmlFor="checkCurrentlyWatching"> CurrentlyWatching</label>
         <input
              type="checkbox"
              name="checkCompleted"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
         <label htmlFor="checkCompleted"> Completed</label>
         <input
              type="checkbox"
              name="checkToWatch"
              value={lastName}
              required
              onChange={(event) => setLastName(event.target.value)}
            />
         <label htmlFor="checkToWatch"> To Watch</label>
         <input
              type="checkbox"
              name="checkDidNotFinish"
              value={lastName}
              required
              onChange={(event) => setLastName(event.target.value)}
            />
         <label htmlFor="checkDidNotFinish"> Did Not Finish</label>
  
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Add New" />
        </div>
      </form>
    );
  }


export default AddNewMediaForm;