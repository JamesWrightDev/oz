import React from "react";
import { Modal, Tab, Button } from "semantic-ui-react";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const OnBoardContainer = (props) => {
  const panes = [
    {
      menuItem: 'Log In',
      render: () => {
        return(
          <LoginForm/>
        )
      }
    },
    {
      menuItem: 'Sign Up',
      render: () => {
        return(
          <SignUpForm/>
        )
      }
    },
  ]

  return (
    <Modal size="tiny" dimmer centered trigger={<Button size="large" color="teal">
    Sign In
  </Button>}>
      <Modal.Content>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Modal.Content>
    </Modal>
  );
};

export default OnBoardContainer;
