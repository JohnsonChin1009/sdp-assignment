<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lecturer;

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
    

    public function updateprofileLec(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        $tokenValues = explode(' ', $token);
        $token = $tokenValues[0];
        $newName = $tokenValues[1];
        $newField = $tokenValues[2];
        $newEmail = $tokenValues[3];
        $lecturer = Lecturer::where('email', $token)->first();

        if (!$lecturer) {
            return response()->json([
                'success' => false,
                'message' => 'Lecturer record not found',
            ]);
        }

        $lecturer->name = $newName;
        $lecturer->field_of_study = $newField;
        $lecturer->email = $newEmail;
        $lecturer->save();

        

        return response()->json([
            'success' => true,
            'message' => 'Updated Lecturer Record Successfully!',
        ]);
    }




            
}