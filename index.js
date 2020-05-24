import React, { Component } from 'react';
import { render } from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoute from './Login/MainRoute';
import NavMenu from './Login/Navmenu';
class App extends Component {
   

  render() {
    return (
     <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 ">
          <NavMenu />
          <div className="innerContent">
            <MainRoute />
          </div>
        </div>
        <div className="col-md-6 vh-100 d-none d-md-block" style={{ background: 'url(https://i.ibb.co/8KxkYCm/pexels-photo-2530580.jpg)' }}></div>
      </div>
    </div>
    );
  }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
