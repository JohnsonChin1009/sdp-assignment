<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    protected $table = 'schedule';

    protected $fillable = [
        'meetingid',
        'date',
        'time',
    ];
}