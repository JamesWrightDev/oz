import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../components/Header";
const Layout = ({ children }) => {
  return (
    // <Container>
    <div>
      <Header />
      {children}
    </div>

    // </Container>
  );
};
export default Layout;
