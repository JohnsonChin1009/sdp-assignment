<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    
    public function run(): void
    {
        $User = [
            [
                'name'  => 'bob',
                'email' => 'bobjones01@apu.edu.my',
                'password' => Hash::make('projectmanager'),
                'role_type' => 'projectmanager',
            ],
            [
                'name'  => 'Camila Atherton',
                'email' => 'camila01@apu.edu.my',
                'password' => Hash::make('secondmarker'),
                'role_type' => 'lecturer',
            ],
            [
                'name'  => 'Dieter Penright',
                'email' => 'tp038889@mail.apu.edu.my',
                'password' => Hash::make('student'),
                'role_type' => 'student',
            ],
        
        ];

        DB::table('users')->insert($User);
    }
}
