<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    
    public function run(): void
    {
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

        DB::table('users')->insert($users);
    }
}
