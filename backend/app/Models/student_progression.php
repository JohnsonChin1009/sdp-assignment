<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class student_progression extends Model
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