<?php

namespace App\Http\Controllers;

use App\Models\ProjectManager;
use App\Models\Student;
use Illuminate\Http\Request;

class PMController extends Controller
{
    public function displayPMProfile(Request $request)
        {
            $token = $request->header('Authorization');
            $token = str_replace('Bearer', "", $token);
            $projectmanager = ProjectManager::where('email', $token)->first();

            if(!$projectmanager) {
                return response()->json([
                    'success' => false,
                    'message' => $token,
                ], 401);
            }

            return response()->json([
                'success' => true,
                'data' => $projectmanager,
                ]);
            }

    public function displayPMOwnStudents(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer', "", $token);
        $projectmanager = ProjectManager::where('email', $token)->first();

        if (!$projectmanager) {
            return response()->json([
                'success' => false,
                'message' => $token,
            ], 401);
        }

        $fieldOfStudy = $projectmanager->field_of_study;
        $students = Student::where('field_of_study', $fieldOfStudy)->get();
        
        return response()->json([
            'success' => true,
            'data' => $students,
        ]);
    }
}
