<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\MoodleApiService;
class MarksController extends Controller
{
    protected $moodleApiService;

    public function __construct(MoodleApiService $moodleApiService)
    {
        $this->moodleApiService = $moodleApiService;
    }

    public function getStudentMarks($tp_number)
    {
        $data = $this->moodleApiService->getMarks($tp_number);
        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    }
}
