import React, { Component } from 'react';
import './bootstrap.min.css';
import axios from 'axios';

function FormError(props) {
    if (props.isHidden) { return null; }

    return (<div className='alert alert-warning'>{props.errorMessage}</div>)
}

class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            image: '',
            video_link: '',
            isInputValid: true,
            errorMessage: ''
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChangeVideoLink = this.handleChangeVideoLink.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost/article/100')
            .then(response => {
                this.setState(response.data);
            })
            .catch(function (error) {
                console.log(error);
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

    checkBase64IsImage(base64) {
        var isImage = base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];
        if (isImage === 'image/jpg' | isImage === 'image/jpeg' | isImage === 'image/gif' | isImage === 'image/png')
            return true;
        return false;
    }

    handleSubmit(e) {
        e.preventDefault();
        var article = {
            title: this.state.title,
            content: this.state.content,
            image: this.state.image,
            video_link: this.state.video_link
        }
        if (this.checkBase64IsImage(article.image)) {
            axios.put('http://localhost/article/100', article)
                .then(response => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            this.setState({
                isInputValid: false,
                errorMessage: 'You must choose image'
            });
        }
    }

    render() {
        let $imagePreview = null;
        if (this.state.image && this.checkBase64IsImage(this.state.image)) {
            $imagePreview = (<img src={this.state.image} />);
        } else {
            $imagePreview = null;
        }

        return (
            <div>
                {/* Form edit article */}
                <div className='container'>
                    <h2>Edit Article</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' className='form-control' name='title' id='title' required value={this.state.title} onChange={this.handleChangeTitle} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='content'>Content</label>
                            <input type='text' className='form-control' name='content' id='content' required value={this.state.content} onChange={this.handleChangeContent} />
                        </div>
                        <FormError
                            isHidden={this.state.isInputValid}
                            errorMessage={this.state.errorMessage} />
                        <div className="form-group">
                            <label htmlFor='image'>Image</label>
                            <span className='btn btn-default btn-file'>
                                <input type='file' id='image' name='image' onChange={this.handleChangeImage} required />
                            </span>
                        </div>
                        <div>
                            {$imagePreview}
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