import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Header from "./Header";
import * as serviceWorker from './serviceWorker';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}
if(document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();