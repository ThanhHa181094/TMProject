import React from 'react';
import axios from 'axios';
import './DetailStyle.css';
import './bootstrap.min.css';
class DetailComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            image: '',
            video_link: ''
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChangeVideoLink = this.handleChangeVideoLink.bind(this);


    }
    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    
    handleChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    handleChangeVideoLink(e) {
        this.setState({
            video_link: e.target.value
        });
    }

    handleChangeImage(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
    }
    
    handleChangeVideoLink(e) {
        this.setState({
            video_link: e.target.value
        });
    }

    componentDidMount() {
        axios.get('http://localhost/article/4')
            .then(response => {
                this.setState(response.data)
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error)
            });
        axios.patch('http://localhost/article/4')
            .then(response => {
                console.log(response);
            })
    }
    
    handleChange = event => {
        this.setState({ id: event.target.value });
      }
    
    
    render() {
        return (
            <div class="full">
                
            {/* content */}
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img src={require("./images/item-pic.jpg")} alt="..." class="img-thumbnail"/>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <h1>Title:</h1>
                                <p>{this.state.title}</p>               
                            </div>
                            <div class="form-group">
                                <h1>Content:</h1>
                                <p>{this.state.content}</p>
                            </div>
                            <div class="form-group">
                                <iframe width="500" height="280" src="https://www.youtube.com/embed/qmPmwdshCMw" 
                                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    lowfullscreen>
                                </iframe>
                            </div>
                            
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div class="row">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">Edit</button>
                            <button type="button" class="btn btn-primary">Delete</button>          
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    
    
    
}

export default DetailComponent