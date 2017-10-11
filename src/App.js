import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state={
      count:0,
      c:1
    };
  }
  componentWillMount(){
    setInterval(()=>{
      this.setState({count:this.state.count+this.state.c})
    },1000)
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <a onClick={()=>this.setState({c:10})}>aaaa</a>
        {this.state&&this.state.count}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
