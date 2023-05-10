<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class PMTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ProjectManager = 
        [
            [
                'id' => 'STAFF001',
                'name' => 'BOB JONES',
                'field_of_study' => 'INFORMATION TECHNOLOGY',
                'email' => 'bobjones01@apu.edu.my',
            ],

            [
                'id' => 'STAFF002',
                'name' => 'JOHNSON CHIN',
                'field_of_study' => 'ENGINEERING',
                'email' => 'johnsonchin02@apu.edu.my',
            ],

            [
                'id' => 'STAFF003',
                'name' => 'GEISERFORD CHENG',
                'field_of_study' => 'MEDIA AND DESIGN',
                'email' => 'geiserfordcheng03@apu.edu.my',
            ],

            [
                'id' => 'STAFF004',
                'name' => 'CODY CHIANG',
                'field_of_study' => 'PSYCHOLOGY',
                'email' => 'codychiang04@apu.edu.my',
            ],

            [
                'id' => 'STAFF005',
                'name' => 'YEEWENG CHEONG',
                'field_of_study' => 'FINANCE AND BANKING',
                'email' => 'yeewengcheong05@apu.edu.my',
            ],

            [
                'id' => 'STAFF006',
                'name' => 'TUNGEN CHEW',
                'field_of_study' => 'BUSINESS',
                'email' => 'tungenchew06@apu.edu.my',
            ],
        ];

        DB::table('projectmanagers')->insert($ProjectManager);
    }
}
