import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';
import { database } from './firebase';


class App extends Component {

  state = {
   
    comments: [
     
    ]
  }


  sendComment = (comment) => {
    this.setState({

      comments: [ ...this.state.comments, comment]      

    })
  }


componentDidMount() {

  this.comments =database.ref('comments');

  this.comments.on('value', snapshot => {
    this.setState({ comments: snapshot.val() });

  })
}

  render() {
    return (
      <div >
        <NewComment sendComment={this.sendComment} />        
        <Comments comments = {this.state.comments} />
      </div>
    );
  }
}

export default App;
