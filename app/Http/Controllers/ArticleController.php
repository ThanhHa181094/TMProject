<?php
namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;



class ArticleController extends Controller
{
    public function showAllArticle()
    {

        return response()->json(Article::all());
    }

    public function getArticleById($id)
    {
        return Article::find($id);
    }

    public function createArticle(Request $request)
    {
        Article::create($request->all());
        return 'create success';

    }

    public function updateArticle(Request $request, $id)
    {
        $article = Article::findOrFail($id);
        $article->update($request->all());
        return $article;
    }

    public function deleteArticle(Request $request, $id)
    {
        $article = Article::findOrFail($id);
        $article->delete();
        return 204;
    }

}