The contents in this folder are some tools that helped during the development phase

generateSeederData.php is used to pull existing fields from CSV files and translate it into text for Database Seeding

generateSeederScript.php is used to run the generateSeederData.php file and write the translated text into Seeder.php

Seeder.php hosts the translated text from the CSV file and will be used as temporary storage for Seeder extraction, remember to clear after each use to ensure clean data
