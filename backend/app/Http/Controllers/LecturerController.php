<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Lecturer;

class LecturerController extends Controller
{
    public function displayLecturers()
    {
        try {
            $lecturers = {lecturertable}

            return response()->json();
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to fetch lecturer records',
            'error' => $e->getMessage(),
        ], 500);
    }
    }
    public function displayLecturerProfile(Request $request)
        {
            $token = $request->header('Authorization');

            $lecturer = lecturer::where('email', $token)->first();

            if(!$lecturer) {
                return response()->json([
                    'success' => false,
                    'message' => $token,
                ], 401);
            }

            return respoonse()->json([
                'success' => true,
                'data' => $lecturer,
                ]);
            }
}