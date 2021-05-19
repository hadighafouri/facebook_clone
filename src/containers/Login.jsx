import {Button} from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth, db, provider} from '../firebase';
import {useStateValue} from '../contexAPI/StateProvider';
import {actionType} from '../contexAPI/reducer';

const Login = () => {
  const [state, dispatch] = useStateValue ();
  const handleSignIn = e => {
    e.preventDefault ();

    auth
      .signInWithPopup (provider)
      .then (result => {
        dispatch ({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch (err => alert (err.message));
  };

  return (
    <div className="login">
      <div className="login__img">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt=""
        />
      </div>

      <Button className="button" onClick={handleSignIn}>Sign In</Button>
      <Button className="button">Log In</Button>
    </div>
  );
};

export default Login;
