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
                'student_list' => json_encode([]),
                'email' => 'beatriz@apu.edu.my', 
             ],
             [
                'id' => 'STAFF008', 
                'name' => 'SHAINA GOODBAIRN', 
                'field_of_study' => 'INFORMATION TECHNOLOGY', 
                'student_list' => json_encode([]),
                'email' => 'shaina@apu.edu.my', 
             ],
             [
                'id' => 'STAFF009', 
                'name' => 'FREEDMAN GENDERS', 
                'field_of_study' => 'ENGINEERING', 
                'student_list' => json_encode([]),
                'email' => 'freedman@apu.edu.my', 
             ],
             [
                'id' => 'STAFF010', 
                'name' => 'TIEBOUT NEW', 
                'field_of_study' => 'ENGINEERING', 
                'student_list' => json_encode([]),
                'email' => 'tiebout@apu.edu.my', 
             ],
             [
                'id' => 'STAFF011', 
                'name' => 'KIMBELL IBBOTSON', 
                'field_of_study' => 'MEDIA AND DESIGN', 
                'student_list' => json_encode([]),
                'email' => 'kimbell@apu.edu.my', 
             ],
             [
                'id' => 'STAFF012', 
                'name' => 'RYUN GLUYAS', 
                'field_of_study' => 'MEDIA AND DESIGN', 
                'student_list' => json_encode([]),
                'email' => 'ryun@apu.edu.my', 
             ],
             [
                'id' => 'STAFF013', 
                'name' => 'CLARIBEL O KIELT', 
                'field_of_study' => 'PSCYHOLOGY', 
                'student_list' => json_encode([]),
                'email' => 'claribel@apu.edu.my', 
             ],
             [
                'id' => 'STAFF014', 
                'name' => 'PALOMA TITCHMARSH', 
                'field_of_study' => 'PSCYHOLOGY', 
                'student_list' => json_encode([]),
                'email' => 'paloma@apu.edu.my', 
             ],
             [
                'id' => 'STAFF015', 
                'name' => 'LEXY COASE', 
                'field_of_study' => 'BANKING AND FINANCE', 
                'student_list' => json_encode([]),
                'email' => 'lexy@apu.edu.my', 
             ],
             [
                'id' => 'STAFF016', 
                'name' => 'WALDEMAR HOWTON', 
                'field_of_study' => 'BANKING AND FINANCE', 
                'student_list' => json_encode([]),
                'email' => 'waldemar@apu.edu.my', 
             ],
             [
                'id' => 'STAFF017', 
                'name' => 'GRISELDA BETONIA', 
                'field_of_study' => 'BUSINESS', 
                'student_list' => json_encode([]),
                'email' => 'griselda@apu.edu.my', 
             ],
             [
                'id' => 'STAFF018', 
                'name' => 'SHERYE PLANK', 
                'field_of_study' => 'BUSINESS', 
                'student_list' => json_encode([]),
                'email' => 'sherye@apu.edu.my', 
             ],             
        ];

        DB::table('lecturers')->insert($Lecturer);
    }
}
    
