import React, {useState} from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { navigate } from "@reach/router"
import { auth } from '../../api/firebase';
import { useDispatch } from 'react-redux';
import StyledError from '../../styles/StyledError';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch({ type: 'auth/userAuthSuccess'});
      navigate('/browse');
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }

  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <Input
          icon="users"
          iconPosition="left"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Field>
      <Button fluid color="teal" type="submit" onClick={() => handleSubmit()}>
        Log In
      </Button>
      {
        error && <StyledError>{error}</StyledError>
      }
    </Form>
  );
};

export default LoginForm;
