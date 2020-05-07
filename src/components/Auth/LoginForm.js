import React, {useState} from "react";
import { Button, Form, Input } from "semantic-ui-react";
import Firebase, { auth } from '../../api/firebase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    setPassword('');
    setEmail('');
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
        />
      </Form.Field>
      <Button fluid primary type="submit" onClick={() => handleSubmit()}>
        Log In
      </Button>
    </Form>
  );
};

export default LoginForm;
