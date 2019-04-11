import React, { Component } from 'react';
import './bootstrap.min.css';
import axios from 'axios';



class HomeComponent extends Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    componentDidMount() {
        axios.get('http://localhost/article')
            .then(response => {
                console.log(response.data);
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        return (

            <div className="App">
                {/* Image Slide  */}
                <div id="carouselExampleControls" className="carousel slide" >
                    <div className="carousel-inner" id="carousel-pic">
                        <div className="carousel-item active">
                            <img src={require("./images/banner2.jpg")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require("./images/banner1.jpg")} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                {/* Menu */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                        <ul className="navbar-nav" id="main-menu">
                            <li className="nav-item" id="item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item" id="item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item" id="item">
                                <a className="nav-link" href="#">News</a>
                            </li>
                            <li className="nav-item" id="item">
                                <a className="nav-link" href="#">Elements</a>
                            </li>
                            <li className="nav-item" id="item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Content */}
                <div className="container">
                    <div className="all">
                        <div className="card-columns">
                            <div>
                                {this.state.items.map(item =>
                                    <div className="card" key={item.id}>
                                        <img id="picture" src={item.image_link} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.content}</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent