<?php

namespace Database\Seeders;

use Database\Seeders\UsersTableSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(PMTableSeeder::class);
        $this->call(StudentsTableSeeder::class);
        $this->call(SecondMTableSeeder::class);
        $this->call(SupervisorTableSeeder::class);
    }
}