<?php
namespace App\Models;

use Doctrine\DBAL\Query;
use Illuminate\Database\Eloquent\Model;

class results extends Model
{
    protected $table = 'results';

    protected $fillable = [
        'tp_number',
        'title',
        'first_mark',
        'second_mark',
        'final_mark',
    ];
}