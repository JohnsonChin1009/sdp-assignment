<?php
namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;
    protected $table = 'User';
    
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