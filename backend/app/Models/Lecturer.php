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

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($lecturer) {
            $maxItems = 5;

            $lecturer->supervisor_list = array_slice($lecturer->supervisor_list, 0, $maxItems);
            $lecturer->secondmarker_list = array_slice($lecturer->secondmarker_list, 0, $maxItems);
        });
    }

    protected $primaryKey = 'id';
    protected $keyType = 'string';

    protected $casts = [
        'supervisor_list' => 'array',
        'secondmarker_list' => 'array',
    ];


    public $timestamps = false;
}
