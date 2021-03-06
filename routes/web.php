<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return view('welcome');
});
$router->get('article', 'ArticleController@showAllArticle');
$router->get('article/{id}', 'ArticleController@getArticleById');
$router->post('article', 'ArticleController@createArticle');
$router->delete('article/{id}', 'ArticleController@deleteArticle');
$router->put('article/{id}', 'ArticleController@updateArticle');
$router->patch('article/{id}', 'ArticleController@updateView');