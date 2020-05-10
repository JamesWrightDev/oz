import React, { useState } from "react";
import Firebase, { auth } from "../../api/firebase";
import { Button, Form, Input } from "semantic-ui-react";
import { navigate } from "@reach/router";
import StyledError from '../../styles/StyledError';

const SignUpForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const db = Firebase.database();

  const handleClick = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        db.ref(`users/${response.user.uid}`).set({
          username: name,
        });
        navigate("/browse");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
      });
    setPassword("");
    setEmail("");
    setName("");
  };

  return (
    <Form>
      <StyledError>
        This app is intended as a demo. Please do not enter any personal data. A
        dummy name and email is fine.
      </StyledError>
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
      <Button color="teal" fluid type="submit" onClick={() => handleClick()}>
        Sign Up
      </Button>
      {
        error && <StyledError>{error}</StyledError>
      }
    </Form>
  );
};

export default SignUpForm;
