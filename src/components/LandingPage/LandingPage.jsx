import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Have you SeenIt!?');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">

      <div className="grid">
        <div className="grid-col grid-col_8">
          <center>
            <p className='slogan'>
              binge smarter, and harder.
            </p>
            <p>
              1) Register < br />
              2) Log in! <br />
              3) Add a new movie or show add select one of the available status
              <br />to keep track of all the things you're watching!
            </p>
          </center>
          <br />
          <div>
            <center>
              <h4>Already a Member?</h4>
              <button className="btn btn_sizeSm" onClick={onLogin}>
                Login
              </button>
            </center>
          </div>

        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

        </div>
      </div>
    </div>
  );
}

export default LandingPage;
