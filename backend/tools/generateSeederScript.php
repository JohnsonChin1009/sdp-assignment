<?php


    include_once 'generateSeederData.php';
    //Copy the file path to use it
    //Or insert the CSV files within the same directory and change the file name
    $csvFile = 'C:\Users\shado\Desktop\sdp-assignment\backend\tools\StudentTableSeeder.csv';
    $seederFile = 'C:\Users\shado\Desktop\sdp-assignment\backend\tools\Seeder.php';

    generateSeederData($csvFile, $seederFile);