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

    public function displayPMStudentProfile(Request $request)
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

        $tpNumber = $request->input('tp_number');
        $students = Student::where('tp_number', $tpNumber)->where('field_of_study', $projectmanager->field_of_study)->first();

        if (!$students) {
            return response()->json([
                'success' => false,
                'message' => 'Student not found',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $students,
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
