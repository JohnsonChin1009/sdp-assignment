<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentProgression extends Model
{
    protected $fillable = [
        'tp_number',
        'proposal',
        'ir',
        'fyp',
        'presentation',
        'notes',
    ];
}