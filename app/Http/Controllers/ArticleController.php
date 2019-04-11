<?php
namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;
use Intervention\Image\Image;
use Mockery\Exception;


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
        $article = Article::find($id);

        $content = base64_decode($request->get('image'));
        if ($request->get('image')) {
            $image = $request->get('image');
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
           
            if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
                $image = substr($image, strpos($image, ',') + 1);
                $type = strtolower($type[1]); // jpg, png, gif
            
                if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
                    throw new \Exception('invalid image type');
                }
            
                $image = base64_decode($image);
            
                if ($image === false) {
                    throw new \Exception('base64_decode failed');
                }
            } else {
                throw new \Exception('did not match data URI with image data');
            }
            
            
            file_put_contents("images/{$name}", $image);
            $article->image_link = $name;
        }
        if (isset($title)) {
            $article->title = $request->input('title');;
        }
        if (isset($content)) {
            $article->content = $request->input('content');;
        }

        

        return $content;
    }

    public function deleteArticle(Request $request, $id)
    {
        $article = Article::findOrFail($id);
        $article->delete();
        return 204;
    }
}
