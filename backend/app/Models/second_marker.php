<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    protected $table = 'second_marker';

    protected $fillable = [
        'id',
        'name',
        'field_of_study',
        'email',
    ];
}