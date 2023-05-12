<?php

namespace App\Http\Controllers;

use App\Models\Lecturer;
use App\Models\ProjectManager;
use App\Models\Student;
use Illuminate\Http\Request;
use TheSeer\Tokenizer\Exception;


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

    public function displayPMStudentProfile(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        $student = Student::where('tp_number', $token)->first();
        if(!$student) {
            return response()->json([
                'success' => false,
                'message' => 'Error finding student record',    
            ]);
        }

        $supervisor = $student->supervisor ? $student->supervisor : 'Not assigned';
        $secondMarker = $student->second_marker ? $student->second_marker : 'Not assigned';

        $lecturers = Lecturer::where('field_of_study', $student->field_of_study)->get(['name', 'id']);
        
        $data = [
            'name' => $student->name,
            'tp_number' => $student->tp_number,
            'field_of_study' => $student->field_of_study,
            'specialism' => $student->specialism,
            'email' => $student->email,
            'supervisor' => $supervisor,
            'second_marker' => $secondMarker,
            'lecturers' => $lecturers,
        ];

        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    }

    public function deleteStuSup($tpNumber)
    {
        $student = Student::where('tp_number', $tpNumber)->first();

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->delete();

        return response()->json(['message' => 'Student deleted']);

    }
}
