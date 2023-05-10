<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{
    protected $fillable = [
        'id',
        'name',
        'field_of_study',
        'email',
    ];

}
