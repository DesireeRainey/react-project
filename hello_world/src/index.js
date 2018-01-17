import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Post';
import registerServiceWorker from './registerServiceWorker';

let post = {
 title: "Kitty, Kitty, Meow, Meow",
 author: "Snicklefriz the Cat",
 body: "Kitty like birds.",
 comments: [
  "WOW, a cat wrote a book!",
  "Beautifully meowed",
  "Not even Hemmingway could have done better"
 ],
 allAuthors: [
  "Stealthy Stegosaurus ",
  "Tiny T-Rex ",
  "Ivory Iguanodon "
 ]
};

//root in the index.html is where this is being rendered
ReactDOM.render(<Hello title={post.title} author={post.author} body={post.body} 
	comments={post.comments} allAuthors={post.allAuthors} />, document.getElementById('root'));
registerServiceWorker();
