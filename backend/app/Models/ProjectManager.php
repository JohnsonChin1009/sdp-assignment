<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectManager extends Model
{
    protected $table = 'projectmanagers';
    protected $fillable = [
        'id',
        'name',
        'field_of_study',
        'email',
    ];

    protected $primaryKey = 'id';
    protected $keyType = 'string';
    
}