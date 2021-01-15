import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import Header from './components/header';
import Main from './components/main';
import Creations from './components/creations'
import Footer from './components/footer'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header/>
      <Main/>
      <Creations/>
      <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
