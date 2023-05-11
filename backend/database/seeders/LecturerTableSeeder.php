<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class LecturerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $Lecturer =
        [
            [
                'id' => 'STAFF007', 
                'name' => 'BEATRIZ CODEMAN', 
                'field_of_study' => 'INFORMATION TECHNOLOGY', 
                'email' => 'beatriz@apu.edu.my', 
             ],
             [
                'id' => 'STAFF008', 
                'name' => 'SHAINA GOODBAIRN', 
                'field_of_study' => 'INFORMATION TECHNOLOGY', 
                'email' => 'shaina@apu.edu.my', 
             ],
             [
                'id' => 'STAFF009', 
                'name' => 'FREEDMAN GENDERS', 
                'field_of_study' => 'ENGINEERING', 
                'email' => 'freedman@apu.edu.my', 
             ],
             [
                'id' => 'STAFF010', 
                'name' => 'TIEBOUT NEW', 
                'field_of_study' => 'ENGINEERING', 
                'email' => 'tiebout@apu.edu.my', 
             ],
             [
                'id' => 'STAFF011', 
                'name' => 'KIMBELL IBBOTSON', 
                'field_of_study' => 'MEDIA AND DESIGN', 
                'email' => 'kimbell@apu.edu.my', 
             ],
             [
                'id' => 'STAFF012', 
                'name' => 'RYUN GLUYAS', 
                'field_of_study' => 'MEDIA AND DESIGN', 
                'email' => 'ryun@apu.edu.my', 
             ],
             [
                'id' => 'STAFF013', 
                'name' => 'CLARIBEL O KIELT', 
                'field_of_study' => 'PSCYHOLOGY', 
                'email' => 'claribel@apu.edu.my', 
             ],
             [
                'id' => 'STAFF014', 
                'name' => 'PALOMA TITCHMARSH', 
                'field_of_study' => 'PSCYHOLOGY', 
                'email' => 'paloma@apu.edu.my', 
             ],
             [
                'id' => 'STAFF015', 
                'name' => 'LEXY COASE', 
                'field_of_study' => 'BANKING AND FINANCE', 
                'email' => 'lexy@apu.edu.my', 
             ],
             [
                'id' => 'STAFF016', 
                'name' => 'WALDEMAR HOWTON', 
                'field_of_study' => 'BANKING AND FINANCE', 
                'email' => 'waldemar@apu.edu.my', 
             ],
             [
                'id' => 'STAFF017', 
                'name' => 'GRISELDA BETONIA', 
                'field_of_study' => 'BUSINESS', 
                'email' => 'griselda@apu.edu.my', 
             ],
             [
                'id' => 'STAFF018', 
                'name' => 'SHERYE PLANK', 
                'field_of_study' => 'BUSINESS', 
                'email' => 'sherye@apu.edu.my', 
             ],             
        ];

        DB::table('lecturers')->insert($Lecturer);
    }
}
    
