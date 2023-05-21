<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MarkController extends Controller
{
    public function displayMoodleAPI(Request $request)
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
            'marks' => $marks,
            'secondmarks' => $secondmarks,
        ];
    }
}
?>
