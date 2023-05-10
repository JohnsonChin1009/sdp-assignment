<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserTableSeeder::class);
        $this->call(PMTableSeeder::class);
        $this->call(SecondMTableSeeder::class);
        $this->call(StudentsTableSeeder::class);
        $this->call(SupervisorTableSeeder::class);
    }
}
