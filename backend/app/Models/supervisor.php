<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class supervisor extends Model
{
    protected $table = 'supervisor';

    protected $fillable = [
        'id',
        'name',
        'field_of_study',
        'email',
    ];
}