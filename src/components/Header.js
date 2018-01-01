import React, { Component } from 'react'
import logo from '../img/logo.svg';
import '../css/App.css';
export default class Header extends Component {
    
    render() {
        return (
            <header className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">{this.props.tagline}</h1>
                </div>
            </header>
        );
    }
}