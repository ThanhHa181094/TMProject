import React, { Component } from 'react';

import axios from 'axios';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
import './bootstrap.min.css';
import MenuComponent from './MenuComponent';



class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentPage: 1,
            itemsPerPage: 6,
        };
        this.handleClick = this.handleClick.bind(this);
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
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

        const renderItems = currentItems.map((item, index) => {
            return (
                <div className="card" key={item.id}>
                    <img id="picture" src={item.image_link} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.content}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

            );

        });


        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li 
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });
        return (
            <div className="App">
                {/* Image Slide  */}
                <div id="carouselExampleControls" className="carousel slide" >
                    <div className="carousel-inner" id="Carousel_Pic">
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
                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="menu">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                        <ul className="navbar-nav" id="Main_Menu">
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
                <div className="container" id="All_Content">
                    <div>
                        <div className="card-columns" id="All">
                            {renderItems}
                        </div>                     
                        <ul id="page-numbers">
                            {renderPageNumbers}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}


export default HomeComponent
