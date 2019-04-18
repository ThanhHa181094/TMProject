import React from 'react';
import HomeComponent from './HomeComponent';
import AddArticle from './AddArticle';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomeComponent />
    }
    // {
    //     path : '/addArticle',
    //     exact : false,
    //     main : () => <AddArticle />
    // }
];

export default routes;