<?php

namespace App\Http\Controllers;

use App\Models\Lecturer;
use App\Models\ProjectManager;
use App\Models\Student;
use Illuminate\Http\Request;


class PMController extends Controller
{
    public function displayPMProfile(Request $request)
        {
            $token = $request->header('Authorization');
            $token = str_replace('Bearer ', "", $token);
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
        $token = str_replace('Bearer ', "", $token);
        $projectmanager = ProjectManager::where('email', $token)->first();
                    
        if (!$projectmanager) {
            return response()->json([
                'success' => false,
                'message' => $token,
            ], 401);
        }
        
        $field_of_study = $projectmanager->field_of_study;
        $students = Student::where('field_of_study', $field_of_study)->get();
        
        $data = $students->map(function ($student) {
            $supervisor = Lecturer::find($student->supervisor);
            $secondMarker = Lecturer::find($student->secondmarker);
    
            return [
                'name' => $student->name,
                'tp_number' => $student->tp_number,
                'title' => $student->title,
                'field_of_study' => $student->field_of_study,
                'specialism' => $student->specialism,
                'email' => $student->email,
                'supervisor' => $supervisor ? $supervisor->name : null,
                'second_marker' => $secondMarker ? $secondMarker->name : null,
            ];
        });
    
        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    }

    public function displayPMStaff(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        $projectmanager = ProjectManager::where('email', $token)->first();

        if (!$projectmanager) {
            return response()->json([
                'success' => false,
                'message' => $token,
            ], 401);
        }

        $field_of_study = $projectmanager->field_of_study;
        $data = Lecturer::where('field_of_study', $field_of_study)->get();
        
        return response()->json([
            'success' => true,
            'data' => $data,
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
        $secondmarker = $student->second_marker ? $student->second_marker : 'Not assigned';

        $lecturers = Lecturer::where('field_of_study', $student->field_of_study)->get(['name', 'id']);
        
        $data = [
            'name' => $student->name,
            'tp_number' => $student->tp_number,
            'title' => $student->title,
            'field_of_study' => $student->field_of_study,
            'specialism' => $student->specialism,
            'email' => $student->email,
            'supervisor' => $supervisor,
            'second_marker' => $secondmarker,
            'lecturers' => $lecturers,
        ];

        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    } 

    public function displayPMLecturerProfile(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        $lecturer = Lecturer::where('id', $token)->first();

        if(!$lecturer) {
            return response()->json([
                'success' => false,
                'message' => 'Error finding student record',    
            ]);
        }

        return response()->json([
            'success' => true,
            'lecturer' => $lecturer,
        ]);
    }

    public function updateStudentInfo(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);

        $tokenValues = explode(' ', $token);
        $tp_number = $tokenValues[0];
        $supervisor = $tokenValues[1];
        $secondMarker = $tokenValues[2];

        $student = Student::where('tp_number', $tp_number)->first();

        if (!$student) {
            return response()->json([
                'success' => false,
                'message' => 'Student record not found',
            ]);
        }

        $student->supervisor = $supervisor;
        $student->secondmarker = $secondMarker;
        $student->save();

        

        return response()->json([
            'success' => true,
            'message' => 'Updated Student Record Successfully!',
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
