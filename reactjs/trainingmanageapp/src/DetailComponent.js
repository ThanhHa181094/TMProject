import React from 'react';
import axios from 'axios';
import './App.css';
import './bootstrap.min.css';
import { Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
class DetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    handleDeleteArticle = () => {
     
        axios.delete('http://localhost/article/' + this.props.match.params.id)
        .then(res => {
            console.log(res);
            this.props.history.push('/');
        })
    }

    componentDidMount = () => {
        //Get selected article
        axios.get('http://localhost/article/' + this.props.match.params.id)
            .then(response => {
                this.updateViewArticle();
                this.setState(response.data);
            })
            .catch(function (error) {
                console.log(error)
            });
            
        //Update views of article    
        
    }

    updateViewArticle = () =>{
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
                            <img src={'http://localhost/images/' + this.state.image_link} alt="..." className="img-thumbnail" />
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <h1>{this.state.title}</h1>
                            </div>
                            <div className="form-group">
                                <h3>Content: </h3>
                                <span>{ ReactHtmlParser(this.state.content) }</span>
                            </div>
                            <div className="form-group">
                                <h5>View:</h5>
                                <p>{this.state.views}</p>
                            </div>
                            <div className="form-group">
                                <iframe title='video' width="500" height="200" src={this.state.video_link}
                                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    lowfullscreen='true'>
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