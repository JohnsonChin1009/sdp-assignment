<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    protected $fillable = [
        'id',
        'title',
        'description',
        'projectmanager',
        'date',
        'time',
        'show',
    ];
}
