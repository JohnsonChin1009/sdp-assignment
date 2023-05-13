<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lecturer extends Model
{
    protected $fillable = [
        'id',
        'name',
        'field_of_study',
        'email',
        'supervisor_list',
        'secondmarker_list',
    ];

    protected $primaryKey = 'id';
    protected $keyType = 'string';

    public $timestamps = false;
}
