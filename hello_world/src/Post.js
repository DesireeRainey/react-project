//bring in React and Component instance fro react
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//how to define multiple propes instead of ReactDOM.render(<Hello name={"Nick"} age={34}/>

//Define our component
class Hello extends Component {
  //Render, what do we want to render? 
  render() {
    return ( 
      <div className="Hello">
        <h1>{this.props.title}</h1>
        <Authors />
        <h2>{this.props.author}</h2>
        <p>{this.props.body}</p>
        <p>{this.props.comments[0]}</p>
      </div>
    );
  }
}

class Authors extends Component {
  render() {
    return (
      <div className="Authors">
      {this.props.allAuthors.map(authors => <p>Written by: {authors}</p>)}
      </div>
    );
    }  
}

export default Hello;
