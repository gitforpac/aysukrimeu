import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './main.css';
// components
import SideBar from './Components/SideBar';
import Content from './Components/Content';


class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {< SideBar />}
          {< Content />}
        </div>
      </div>
    );
  }
}

export default Main;
