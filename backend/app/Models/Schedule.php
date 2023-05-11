<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $fillable = [
        'meetingid',
        'name',
        'start',
        'end',
        'id',
    ];

    public $timestamps = false;
}