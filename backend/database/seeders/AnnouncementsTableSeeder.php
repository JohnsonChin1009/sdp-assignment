<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class AnnouncementsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $Announcement = 
        [
            [
                'id' => '1',
                'title' => 'New Announcement',
                'description' => 'This is a new announcement',
                'projectmanager' => 'BOB JONES',
                'date' => '2023-05-12',
                'time' => '10:00:00',
                'show' => true,
            ],

            [
                'id' => '2',
                'title' => 'Announcement 2',
                'description' => 'Our office will be closed for the upcoming holiday.',
                'projectmanager' => 'JOHNSON CHIN',
                'date' => '2023-05-12',
                'time' => '14:30:00',
                'show' => true,
            ],

            [
                'id' => '3',
                'title' => 'Announcement 3',
                'description' => 'We will be performing maintenance on our website next week.',
                'projectmanager' => 'GEISERFORD CHENG',
                'date' => '2023-05-14',
                'time' => '00:00:30',
                'show' => false,
            ],

            [
                'id' => '4',
                'title' => 'Announcement 4',
                'description' => 'We are excited to announce the release of our new product!',
                'projectmanager' => 'CODY CHIANG',
                'date' => '2023-05-14',
                'time' => '10:00:00',
                'show' => false,
            ],

            [
                'id' => '5',
                'title' => 'Announcement 5',
                'description' => 'You would have to submit your report on June 6',
                'projectmanager' => 'YEEWENG CHEONG',
                'date' => '2023-05-20',
                'time' => '15:30:00',
                'show' => false,
            ],

            [
                'id' => '6',
                'title' => 'Announcement 6',
                'description' => 'Presentation would be scheduled after the submission',
                'projectmanager' => 'TUNGEN CHEW',
                'date' => '2023-05-30',
                'time' => '11:40:00',
                'show' => true,
            ],
        ];

        DB::table('announcements')->insert($Announcement);
    }
}
