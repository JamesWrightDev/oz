import React, {useState} from 'react';
import Firebase, { auth } from '../../api/firebase';

import { Button, Form, Input } from "semantic-ui-react";
const SignUpForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError ] = useState('');

  const handleClick = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response.user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });

    setPassword('');
    setEmail('');
    setName('');
  }

  return(
    <Form>
      <strong>This app is intended as a demo. Please do not enter any personal data. A dummy name and email is fine.</strong>
      <Form.Field>
        <label>Username</label>
        <Input
          icon="user circle"
          iconPosition="left"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
          required
          />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <Input
          icon="users"
          iconPosition="left"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Input
          icon="lock"
          input="password"
          iconPosition="left"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Field>
      <Button fluid primary type="submit" onClick={() => handleClick()}>
        Sign Up
      </Button>
    </Form>
  )
}

export default SignUpForm;