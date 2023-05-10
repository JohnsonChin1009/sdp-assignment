<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Authenticatable;
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
        $token = $request;

        $user = User::where('email', $token)->first();
        
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => $token,
            ], 401);
        }

        $student = $user->student;

        return response()->json([
            'success' => true,
            'data' => $student,
        ]);    
    }

    
}
