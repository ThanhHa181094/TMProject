import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import AddArticle from './AddArticleComponent';
import DetailComponent from './DetailComponent';
import EditComponent from './EditArticleComponent'
export default class Header extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="menu">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" id="Main_Menu">
                            <li className="nav-item" id="item">
                                <Link  to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item" id="item">
                                <Link to ="/articles/add" className="nav-link">Add article</Link>
                            </li>
                            <li className="nav-item" id="item">
                                <div className="nav-link" href="#">News</div>
                            </li>
                            <li className="nav-item" id="item">
                                <div className="nav-link" href="#">Elements</div>
                            </li>
                            <li className="nav-item" id="item">
                                <div className="nav-link" href="#">Contact Us</div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/articles/add" component={AddArticle} />
                <Route path="/articles/detail/:id" component={DetailComponent}></Route>
                <Route path="/articles/edit/:id" component={EditComponent}></Route>
            </Router>
        );
    }
}