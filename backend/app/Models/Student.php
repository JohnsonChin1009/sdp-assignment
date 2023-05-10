<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'tp_number',
        'name',
        'field_of_study',
        'specialism',
        'email',
        'title',
    ];
}