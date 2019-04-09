import React,{ Component } from 'react';

class AddPost extends Component{

    state = {
        title:null,
        content:null,
        isEditing:false
    }
    //call AddPost (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddPost(this.state);  
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.title]:e.target.value,
        });
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input name="title" autoComplete="off" placeholder="Enter your title" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s4">
                        <input name="content" autoComplete="off" type="text" required placeholder="Enter your content" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="btn blue"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddPost;