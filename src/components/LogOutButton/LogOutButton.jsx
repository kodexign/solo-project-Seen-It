import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { red } from '@mui/material/colors';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      title='Log Out'
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
       <PowerSettingsNewIcon sx={{ color: red [900] }}></PowerSettingsNewIcon>
    </button>
  );
}

export default LogOutButton;
