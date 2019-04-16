<?php
namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;
use Intervention\Image\Image;
use Mockery\Exception;

function convertBase64ToImage($image)
{
    if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
        $image = substr($image, strpos($image, ',') + 1);
        $type = strtolower($type[1]); // jpg, png, gif

        if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
            throw new \Exception('invalid image type');
        }

        $image = base64_decode($image);

        if ($image === false) {
            throw new \Exception('base64_decode failed');
        }
    } else {
        throw new \Exception('did not match data URI with image data');
    }

    return $image;
}

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
        $article = new Article();
        if ($request->get('image')) {
            $image = $request->get('image');
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            $image = convertBase64ToImage($image);
            
            file_put_contents("images/{$name}", $image);
            $article->image_link = $name;
        }
        $article->image_link = "default.png";
        $article->title = $request->input('title');
        $article->content = $request->input('content');
        $article->video_link = $request->input('video_link');
        $article->save();

        return 'create success';
    }

    public function updateArticle(Request $request, $id)
    {
        $article = Article::find($id);


        if ($request->get('image')) {
            $image = $request->get('image');
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];

            $image = convertBase64ToImage($image);

            file_put_contents("images/{$name}", $image);
            $article->image_link = $name;
        }
        $article->title = $request->input('title');
        $article->video_link = $request->input('video_link');
        $article->content = $request->input('content');
        $article->save();

        return 'update successful';
    }

    public function deleteArticle(Request $request, $id)
    {
        $article = Article::findOrFail($id);
        $article->delete();
        return 204;
    }

    public function updateView(Request $request, $id)
    {
        $article = Article::find($id);
        $article->views = $request->input('views');
        $article->save();
        return 'Views increased';

    }
}
