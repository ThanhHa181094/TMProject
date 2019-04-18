import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import './bootstrap.min.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

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
                        <Link to={'/articles/detail/'+item.id}>{item.title}</Link>
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
