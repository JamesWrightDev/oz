import React from "react";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Details from './pages/Details';
import { Router } from "@reach/router";
import "semantic-ui-css/semantic.min.css";
import store from "./redux/store";
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Home path="/" default/>
        <Browse path="/browse"/>
        <Details path="/browse/:tourId"/>
      </Router>
    </Provider>
  );
};

export default App;
