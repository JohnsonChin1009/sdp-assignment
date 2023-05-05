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

$users = [
    [
        'email' => 'bobjones01@apu.edu.my',
        'password' => bcrypt('admin'),
        'user_type' => '1',
        'profile_pic' => '',
    ],
    [
        'email' => 'jennifer01@apu.edu.my',
        'password' => bcrypt('secondmarker'),
        'user_type' => '3',
        'profile_pic' => '',
    ],
    [
        'email' => 'racheljones01@apu.edu.my',
        'password' => bcrypt('supervisor'),
        'user_type' => '2',
        'profile_pic' => '',
    ],
    [
        'email' => 'tp006293@mail.apu.edu.my',
        'password' => bcrypt('student'),
        'user_type' => '4',
        'profile_pic' => '',
    ],

];