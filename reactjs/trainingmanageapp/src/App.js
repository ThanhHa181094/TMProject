import React, { Component } from 'react';
import './App.css';
import './page.css';
import './bootstrap.min.css';

class App extends Component {
render() {
return (
<div className="App">
    <div id="carouselExampleControls" className="carousel slide" >
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={require("./banner2.jpg")} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src={require("./banner1.jpg")} className="d-block w-100" alt="..." />
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
                    <a className="nav-link" href="#">News</a>
                </li>
            </ul>
        </div>
    </nav>



    <div className="container">
        <div className="all">
            <div className="card-deck">
                <div className="card">
                    <img src={require("./item-pic.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div className="card">
                    <img src={require("./item-pic.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div className="card">
                    <img src={require("./item-pic.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>


            </div>

            <div className="card-deck mt-5">
                <div className="card">
                    <img src={require("./item-pic.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={require("./item-pic.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={require("./item-pic.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}
}

export default App;
