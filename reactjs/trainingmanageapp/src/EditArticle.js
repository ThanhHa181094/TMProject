import React, { Component } from 'react';
import './bootstrap.min.css';
import axios from 'axios';

class EditArticle extends Component {
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost/article/49')
            .then(response => {
                this.setState(response.data)
            })
            .catch(function (error) {
                console.log(error)
            });
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

    handleChangeImage(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
    }

    createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                image: e.target.result
            });
        };
        reader.readAsDataURL(file);
    }

    handleChangeVideoLink(e) {
        this.setState({
            video_link: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        var article = {
            title: this.state.title,
            content: this.state.content,
            image: this.state.image,
            video_link: this.state.video_link
        }
        console.log(article);
        axios.put('http://localhost/article/49', article)
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <h1>Edit Article</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' className='form-control' name='title' id='title' required value={this.state.title} onChange={this.handleChangeTitle} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='content'>Content</label>
                            <input type='text' className='form-control' name='content' id='content' required value={this.state.content} onChange={this.handleChangeContent} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='image'>Image</label>
                            <span className='btn btn-default btn-file'>
                                <input type='file' id='image' name='image' onChange={this.handleChangeImage} required />
                            </span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='video_link'>Video link</label>
                            <input type='text' className='form-control' name='video_link' id='video_link' required value={this.state.video_link} onChange={this.handleChangeVideoLink} />
                        </div>
                        <button type='submit' className='btn btn-primary'>Save</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default EditArticle