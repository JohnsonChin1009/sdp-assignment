<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    protected $table = 'user';

    protected $fillable = [
        'email',
        'password',
        'user_type',
        'profile_pic',
    ];

    public static function insertbaseusers($users)
    {
        return self::insert($users);
    }
}