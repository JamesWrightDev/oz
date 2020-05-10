import React, { useEffect, useState } from "react";
import { StyledHeader } from "../styles/StyledHeader";
import OnBoardContainer from "../components/Auth/OnBoardContainer";
import SignOutButton from "../components/Auth/SignOut";
import { useDispatch, useSelector } from "react-redux";
import Firebase, { auth } from "../api/firebase";
import { Link } from "@reach/router";
const Header = (props) => {
  const [isLoadingAuth, setLoadingAuth] = useState(true);
  const dispatch = useDispatch();
  const userAuthenticated = useSelector(
    (state) => state.auth.userAuthenticated
  );

  const AuthButton = () => {
    return userAuthenticated ? <SignOutButton /> : <OnBoardContainer />;
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        Firebase.database()
          .ref(`/users/${user.uid}`)
          .once("value")
          .then((response) => {
            const username = response.val();
            dispatch({ type: "auth/userAuthSuccess" });
            setLoadingAuth(false);
            if (username) {
              dispatch({ type: "auth/setUsername", payload: username });
            }
          });
      } else {
        setLoadingAuth(false);
      }
    });
  }, [dispatch]);

  return (
    <StyledHeader>
      <div className="c-header__foreground">
        <Link to='/'>
          <h1>Oz</h1>
        </Link>
        <div className="c-header__secondary">
          {!isLoadingAuth ? <AuthButton /> : null}
        </div>
      </div>
      <div className="c-header__filter"></div>
    </StyledHeader>
  );
};

export default Header;
