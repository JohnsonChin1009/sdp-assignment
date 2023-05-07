<?php
    function generateSeederData($csvFile, $seederFile)
    {
    $csv = fopen($csvFile, 'r');
    $headers = fgetcsv($csv);
    $data = [];

    while (($row = fgetcsv($csv)) !== false) 
    {
        $data[] = array_combine($headers, $row);
    }

    $seederCode = "";

    foreach ($data as $record)
    {
        $seederCode.= "[\n";
        foreach ($record as $key => $value) 
        {
            $seederCode .=  sprintf("   '%s' => '%s', \n", $key, $value);
        }
        $seederCode .= "],\n\n";
    }

    file_put_contents($seederFile, $seederCode);
    }