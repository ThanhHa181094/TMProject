import React, { Component } from 'react';
import Posts from './Posts';
import AddPost from './AddPost';

class Main extends Component{

    // Default dummy data
    state = {

        posts:[
          {title:"Travis Jackson", content:"jkabsfjbkasbf", isEditing:false},
          {title:"Linda Moorhouse", content:"adbsahkdbska", isEditing:false},
          {title:"Jeffrey Delgado", content:"akjdhjasdhrt", isEditing:false}
    
        ]
      }
      // (newPost) is received from AddPost.js
      AddPost = (newPost) => {
            let posts = [...this.state.posts, newPost];
            this.setState({
                posts
            });     
      }

      // (i, title, content) is received from Posts.js
      updatePost = (i, title, content) => {
        let posts = this.state.posts;
        posts[i].title = title;
        posts[i].content = content;
        posts[i].isEditing = false;

        this.setState({
            posts
        });

      }

    render(){
        return(
            <div className="container">
                <h1>CRUD with React</h1>
                <Posts allPosts={this.state.posts} />
                <AddPost AddPost={this.AddPost} />
            </div>
        );
    }
}

export default Main;