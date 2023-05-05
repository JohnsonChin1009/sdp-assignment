<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    protected $table = 'student_progression';

    protected $fillable = [
        'tp_number',
        'proposal',
        'ir',
        'fyp',
        'presentation',
        'notes',
    ];
}