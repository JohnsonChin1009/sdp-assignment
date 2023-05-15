<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lecturer;
use Illuminate\Support\Facades\Log;

class LecturerController extends Controller
{
    public function displayLecturers()
    {
        try {
            $lecturers = Lecturer::all();

            return response()->json([
                'success' => true,
                'data' => $lecturers,
            ]);

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
            $token = str_replace('Bearer ', "", $token);
            $lecturer = lecturer::where('email', $token)->first();
            
            if(!$lecturer) {
                return response()->json([
                    'success' => false,
                    'message' => $token,
                ], 401);
            }

            return response()->json([
                'success' => true,
                'data' => $lecturer,
                ]);
            }
    


            
}