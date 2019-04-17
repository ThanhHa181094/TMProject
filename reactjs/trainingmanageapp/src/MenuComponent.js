import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import AddArticle from './AddArticle';

class MenuComponent extends Component {
    render() {
        return (
            <Router>
                // {/* Image Slide  */}
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

                // {/* Menu */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                        <ul className="navbar-nav" id="main-menu">
                            <li className="nav-item" id="item">
                                {/* <a className="nav-link" href="#">Home</a> */}
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="nav-item" id="item">
                                {/* <a className="nav-link" href="#">About us</a> */}
                                <Link to='/addArticle'>Add</Link>
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

                <Route exact path='/' component={HomeComponent}></Route>
                <Route exact path='/addArticle' component={AddArticle}></Route>
            </Router>
        );
    }
}

export default MenuComponent