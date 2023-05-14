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
        $token = str_replace('Bearer ', "", $token);
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
            'projectmanagerid' => $projectManager ? $projectManager->id : '',
            'supervisor' => $supervisor ? $supervisor->name : '',
            'supervisorid' => $supervisor ? $supervisor->id : '',
            'secondmarker' => $secondMarker ? $secondMarker->name : '',
            'secondmarkerid' => $secondMarker ? $secondMarker->id : '',
        ];

        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    }
    public function updatestutitle(Request $request)
    {
        $token = $request->header("Authorization");
        $token = str_replace('Bearer ', "", $token);

        $email = substr($token, 0, strpos($token, ' '));
        $newtitle = substr($token, strpos($token, ' ') + 1);

        $student = Student::where('email', $email)->first();

        if(!$student)
        {
            return response()->json([
                'success' => false,
                'message' => 'Student not found in database',
            ]);
        }

        if ($newtitle === '') {
            return response()->json([
                'success' => false,
                'message' => 'Title is empty',
            ]);
        }
        
        $student->title = $newtitle;
        $student->save();

        return response()->json([
            'success' => true,
            'message' => 'Student title updated successfully',
        ]);
    }
    public function displayStuLecProfile(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        $lecturer = Lecturer::where('id', $token)->first();
        if(!$lecturer) {
            return response()->json([
                'success' => false,
                'message' => 'Error finding lecturer record',    
            ]);
        }

        $data = [
            'name' => $lecturer->name,
            'id' => $lecturer->id,            
            'field_of_study' => $lecturer->field_of_study,            
            'email' => $lecturer->email,
        ];

        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    } 
    public function displayStuPMProfile(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        $projectmanager = ProjectManager::where('id', $token)->first();
        if(!$projectmanager) {
            return response()->json([
                'success' => false,
                'message' => 'Error finding lecturer record',    
            ]);
        }                
        $data = [
            'name' => $projectmanager->name,
            'id' => $projectmanager->id,            
            'field_of_study' => $projectmanager->field_of_study,            
            'email' => $projectmanager->email,
        ];
       
        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    } 
}
