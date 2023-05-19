<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

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

            $lecturer->supervisor_list = Arr::take($lecturer->supvervisor_list, $maxItems);
            $lecturer->secondmarker_list = Arr::take($lecturer->secondmarker_list, $maxItems);
        });
    }

    protected $primaryKey = 'id';
    protected $keyType = 'string';

    public $timestamps = false;
}
