import React, { Component } from 'react';

class Posts extends Component{

    // call updatePost (Main.js)
    handleUpdate = () => {
        this.props.updatePost(this.indexNum, this.title.value, this.content.value);
    }

    render(){

        const {allPosts} = this.props;

        const postsList = allPosts.map((post, index) => {

            return post.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.title = val}} required defaultValue={post.title}/></td>
                    <td><input type="text" ref={(val) => {this.content = val}} required defaultValue={post.content}/></td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                </tr>

            );
        });

        return(
            <table className="striped">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {postsList}
                </tbody>
            </table>
        );
    }
}

export default Posts;