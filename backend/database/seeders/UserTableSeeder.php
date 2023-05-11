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
            //PROJECT MANAGERS
            [
                'name'  => 'BOB JONES',
                'email' => 'bobjones01@apu.edu.my',
                'password' => Hash::make('projectmanager'),
                'role_type' => 'projectmanager',
            ],
            [
                'name'  => 'JOHNSON CHIN',
                'email' => 'johnsonchin02@apu.edu.my',
                'password' => Hash::make('projectmanager'),
                'role_type' => 'projectmanager',
            ],
            [
                'name'  => 'GEISERFORD CHENG',
                'email' => 'geiserfordcheng03@apu.edu.my',
                'password' => Hash::make('projectmanager'),
                'role_type' => 'projectmanager',
            ],
            [
                'name'  => 'CODY CHIANG',
                'email' => 'codychiang04@apu.edu.my',
                'password' => Hash::make('projectmanager'),
                'role_type' => 'projectmanager',
            ],
            [
                'name'  => 'YEEWENG CHEONG',
                'email' => 'yeewengcheong05@apu.edu.my',
                'password' => Hash::make('projectmanager'),
                'role_type' => 'projectmanager',
            ],
            [
                'name'  => 'TUNGEN CHEW',
                'email' => 'tungenchew06@apu.edu.my',
                'password' => Hash::make('projectmanager'),
                'role_type' => 'projectmanager',
            ],
            //PROJECT MANAGERS END

            //LECTURERS
            [
                'name' => 'BEATRIZ CODEMAN',
                'email' => 'beatriz@apu.edu.my',
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',         
             ],
             [
                'name' => 'SHAINA GOODBAIRN',
                'email' => 'shaina@apu.edu.my',  
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',
             ],
             [
                'name' => 'FREEDMAN GENDERS',
                'email' => 'freedman@apu.edu.my',  
                'password' => Hash::make('lecturer'),    
                'role_type' => 'lecturer',   
             ],
             [
                'name' => 'TIEBOUT NEW',
                'email' => 'tiebout@apu.edu.my',
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',           
             ],
             [ 
                'name' => 'KIMBELL IBBOTSON',
                'email' => 'kimbell@apu.edu.my',
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',
             ],
             [
                'name' => 'RYUN GLUYAS',
                'email' => 'ryun@apu.edu.my',
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',
             ],
             [
                'name' => 'CLARIBEL O KIELT',
                'email' => 'claribel@apu.edu.my',
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',       
             ],
             [
                'name' => 'PALOMA TITCHMARSH',
                'email' => 'paloma@apu.edu.my',
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',
             ],
             [
                'name' => 'LEXY COASE',
                'email' => 'lexy@apu.edu.my',
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',
             ],
             [
                'name' => 'WALDEMAR HOWTON',
                'email' => 'waldemar@apu.edu.my',
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',
             ],
             [
                'name' => 'GRISELDA BETONIA',
                'email' => 'griselda@apu.edu.my',
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',
             ],
             [ 
                'name' => 'SHERYE PLANK',
                'email' => 'sherye@apu.edu.my',
                'password' => Hash::make('lecturer'),
                'role_type' => 'lecturer',
             ],
            //LECTURERS END
            
            //STUDENTS START
            [
                'name'  => 'CARMINE MCAVINCHEY',
                'email' => 'tp074070@mail.apu.edu.my',
                'password' => Hash::make('student'),
                'role_type' => 'student',
            ],
            //STUDENTS END
        ];

        DB::table('users')->insert($User);
    }
}
