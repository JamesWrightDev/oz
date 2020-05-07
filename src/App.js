import React from 'react';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Auth from './pages/Auth';
import { Router } from "@reach/router";
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Browse path="/browse" />
      <Auth path="/signin" />
    </Router>
  );
}

export default App;
