<?php

namespace App\Http\Controllers;

use App\Models\Student;
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

            return response()->json([
                'success' => true,
                'data' => $student,
            ]);    
        }
}
