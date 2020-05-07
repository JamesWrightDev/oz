import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Layout from "../components/Layout";
import LoginForm from '../components/Auth/LoginForm';
import SignUpForm from '../components/Auth/SignUpForm';

const Auth = () => {
  return (
    <Layout>
      <Container>
      <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <LoginForm/>
        </Grid.Column>
        <Grid.Column>
          <SignUpForm/>
        </Grid.Column>
      </Grid.Row>
      </Grid>
      </Container>
    </Layout>
  );
};

export default Auth;
