import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";
import { StyledHeader } from "../styles/StyledHeader";
import OnBoardContainer from "../components/Auth/OnBoardContainer";
import { auth } from "../api/firebase";

const Header = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      }
    });
  }, []);

  return (
    <StyledHeader>
      <div className="c-header__foreground">
        <h1>Oz</h1>
        <div className="c-header__secondary">
          <OnBoardContainer />
        </div>
      </div>
      <div class="c-header__filter"></div>
    </StyledHeader>
  );
};

export default Header;
