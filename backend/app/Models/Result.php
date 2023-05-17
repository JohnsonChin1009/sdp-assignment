<?php
namespace App\Models;

use Doctrine\DBAL\Query;
use Illuminate\Database\Eloquent\Model;
use Spatie\FlareClient\FlareMiddleware\AddDocumentationLinks;

class Result extends Model
{
    protected $fillable = [
        'tp_number',
        'title',
        'first_mark',
        'second_mark',
        'final_mark',
    ];
    public $timestamps = false;
}