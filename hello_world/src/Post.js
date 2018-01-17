//bring in React and Component instance fro react
import React, { Component } from 'react';
import logo from './logo.svg';
import Author from './Author.js';
import Comment from './Comment.js';
import './App.css';

//Define our component
class Post extends Component {
  render() {
    const allPosts = this.props.posts.map(p => {
      return(
      <div>
       <h1 className="Title">
        {p.title} 
        by {p.author}</h1>
        <Author author={p.author }/>
        <p className="Post-intro">
        {p.content}
        </p>
        <h2>Comments</h2>
        <p><Comment comments={this.props.posts[0].comments}/></p>
      </div>)
    });
    return (
      <div className="Post">
        <header className="Post-header">
          <img src={logo} className="Post-logo" alt="logo" />
          <h1 className="Post-title">Dino Blog</h1>
          <p className="Post-intro">
            All the latest and greatest things from 65 million years ago.
          </p>
        </header>
        {allPosts}
        <hr />
        <p>Note, at this stage, we are only rendering ONE post with ONE comment!</p>
      </div>
    );
  }
}


export default Post;
