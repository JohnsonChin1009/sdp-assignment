<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class students extends Model
{
    protected $table = 'students';

    protected $fillable = [
        'tp_number',
        'name',
        'field_of_study',
        'specialism',
        'email',
        'title',
    ];
}