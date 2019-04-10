<?php


namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

    protected $fillable = ['title', 'content', 'image_link', 'video_link', 'views'];


    protected $hidden = [];

}
