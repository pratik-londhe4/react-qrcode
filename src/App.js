import { useState } from "react";
import QR from "./components/qrCode";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import React, { Component } from 'react';

class App extends Component {
  state = {
    text : "",
    do : false
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({do : true});

      }
  
      handleChange = ({currentTarget : input}) =>{
        const text = input.value;
        this.setState({do : false})
        this.setState({text});
        
      }
    clearQR = () =>{
      const input = document.getElementsByClassName("input-group");
      input.value = "";
    }
  render() {
    console.log(document.getElementsByTagName("img"));
    return (
      <div className="mainContainer position-absolute end-50   start-50 translate-middle">
        <div className="heading ">
          <p className="text-center">QR Code Generator</p>
        </div>
        
        <div className="form-container ">

        <form onSubmit={this.handleSubmit}>
          <input className="input-group" onChange={this.handleChange} name="text" type="text" placeholder="Enter Text Here"></input>
          <button disabled={!(this.state.text)} className="btn btn-primary genb position-absolute  start-50 translate-middle">Genrate QR</button>

        </form>
        </div>
        <div className="qrContainer position-absolute  start-50 translate-middle">
          {this.state.do && <QR text={this.state.text}></QR>}

        </div>
      </div>
    );
  }
}

export default App;