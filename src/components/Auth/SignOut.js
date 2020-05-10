import React from 'react';
import { Button } from "semantic-ui-react";
import { auth } from '../../api/firebase';
import { useDispatch } from 'react-redux';

const SignOutButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    auth.signOut()
    .then(response => {
      dispatch({ type: 'auth/userAuthSignout'});
    })
    .catch(error => {
      console.log(error);
    })
  }
  return(
    <Button size="large" onClick={() => handleClick()}>Sign Out</Button>
  )
}

export default SignOutButton;