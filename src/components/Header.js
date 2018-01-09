  import React, { Component } from 'react'
  import logo from '../img/logo.png';
  import '../css/App.css';
  export default class Header extends Component {

      render() {
          return (
              <header className="App">
                  <div className="App-header">
                  <center>
                      <img src={logo} alt="logo" />
                      <p>{this.props.tagline}</p>
                   </center>   
                  </div>
              </header>
          );
      }
  }