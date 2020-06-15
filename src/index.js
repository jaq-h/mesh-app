import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import {
  BrowserRouter as Router
} from 'react-router-dom'

const MyApp = () => (
  // <CookieStore>
  <Router>
    <App/>
  </Router>
);

ReactDOM.render(
  <MyApp/>,
  document.getElementById('root')
);
