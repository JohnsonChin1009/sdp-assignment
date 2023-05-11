<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
class StudentController extends Controller
{
    public function displayStudents()
    {
        try {
            $students = Student::all();
            // dd($students);
            // foreach ($students as $student) {
            //     // Log the tp_number to verify its value
            //     Log::info($student->tp_number);
            // }
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

            $student = Student::where('email', $token)->first();
            
            if (!$student) {
                return response()->json([
                    'success' => false,
                    'message' => $token,
                ], 401);
            }

            return response()->json([
                'success' => true,
                'data' => $student,
            ]);    
        }

    
}
