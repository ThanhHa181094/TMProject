import React from 'react';
import axios from 'axios';
import './App.css';
import './bootstrap.min.css';
import { Link} from 'react-router-dom';
class DetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            image: '',
            video_link: '',
            view: ''
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

    handleDeleteArticle = () => {
     
        axios.delete('http://localhost/article/' + this.props.match.params.id)
        .then(res => {
            console.log(res);
        })
        this.props.history.push('/');
    }

    componentDidMount() {
        //Get selected article
        axios.get('http://localhost/article/' + this.props.match.params.id)
            .then(response => {
                this.setState(response.data)
            })
            .catch(function (error) {
                console.log(error)
            });
            
        //Update views of article    
        axios.patch('http://localhost/article/' + this.props.match.params.id)
            .then(response => {

            })
    }


    render() {
        return (
            <div className="full">

                {/* content */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={require("./images/item-pic.jpg")} alt="..." className="img-thumbnail" />
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <h1>Title:</h1>
                                <p>{this.state.title}</p>
                            </div>
                            <div className="form-group">
                                <h1>Content:</h1>
                                <p>{this.state.content}</p>
                            </div>
                            <div className="form-group">
                                <h1>View:</h1>
                                <p>{this.state.views}</p>
                            </div>
                            <div className="form-group">
                                <iframe width="500" height="200" src="https://www.youtube.com/embed/qmPmwdshCMw"
                                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    lowfullscreen>
                                </iframe>
                            </div>

                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="btn-group">
                            <Link to={'/articles/edit/'+this.state.id}><button className="btn btn-primary" type="submit">Edit</button></Link>
                            <button onClick={this.handleDeleteArticle} className="btn btn-primary" type="submit">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default DetailComponent