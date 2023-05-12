<?php

namespace App\Http\Controllers;

use App\Models\ProjectManager;
use App\Models\Student;
use App\Models\Lecturer;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function displayStudents()
    {
        try {
            $students = Student::all();
            return response()->json([
                'success' => true,
                'data' => $students,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch student records.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function displayStudentProfile(Request $request)
    {
        $token = $request->header("Authorization");
        $token = str_replace('Bearer', "", $token);
        $student = Student::where('email', $token)->first();
            
        if (!$student) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to get student profile',
                'authorization' => $token,
            ], 401);
        }

        $projectmanager = ProjectManager::where('id', $student->projectmanager)->first();
        $student->projectmanager = $projectmanager ? $projectmanager->name : '';

            return response()->json([
                'success' => true,
                'data' => $student,
            ]);    
        }

    public function displayStudentLec(Request $request)
    {
        $token = $request->header("Authorization");
        $token = str_replace('Bearer ', "", $token);
        $student = Student::where('email', $token)->first();

        if (!$student) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to get student information',
            ]);   
        }

        $projectManager = ProjectManager::where('id', $student->projectmanager)->first();
        $supervisor = Lecturer::where('id', $student->supervisor)->first();
        $secondMarker = Lecturer::where('id', $student->secondmarker)->first();
        
        $data = [
            'projectmanager' => $projectManager ? $projectManager->name : '',
            'supervisor' => $supervisor ? $supervisor->name : '',
            'secondmarker' => $secondMarker ? $secondMarker->name : '',
        ];

        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    }
}