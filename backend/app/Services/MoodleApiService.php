<?php

namespace App\Services;

class MoodleApiService
{
    public function getMarks($tp_number)
{
    $marks = [
        ['component' => 'Pro', 'mark' => '89'],
        ['component' => 'IR', 'mark' => '76'],
        ['component' => 'FYP', 'mark' => '90'],
        ['component' => 'Documentation', 'mark' => '90'],
        ['component' => 'Presentation', 'mark' => '85'],
    ];

    $secondmarks = [
        ['component' => 'Pro', 'mark' => '84'],
        ['component' => 'IR', 'mark' => '98'],
        ['component' => 'FYP', 'mark' => '74'],
        ['component' => 'Documentation', 'mark' => '96'],
        ['component' => 'Presentation', 'mark' => '87'],
    ];

    return [
        'student' => $tp_number,
        'marks' => $marks,
        'secondmarks' => $secondmarks,
    ];
}

}