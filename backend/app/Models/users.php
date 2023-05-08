<?php
namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class users extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';
    
    protected $fillable =
        [
            'email',
            'password',
            'user_type',
        ];

    protected $hidden =
        [
            'password',
            'remember_token',
        ];
}