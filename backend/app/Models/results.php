<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    protected $table = 'results';

    protected $fillable = [
        'tp_number',
        'title',
        'first_mark',
        'second_mark',
        'final_mark',
    ];
}