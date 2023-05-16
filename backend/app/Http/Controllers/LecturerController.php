<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lecturer;
use App\Models\Student;
use Illuminate\Support\Facades\Log;

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
            public function displaySupOwnStudents(Request $request)
            {
                $token = $request->header('Authorization');
                $token = str_replace('Bearer ', "", $token);
                $lecturer = Lecturer::where('id', $token)->first();
                            
                if (!$lecturer) {
                    return response()->json([
                        'success' => false,
                        'message' => $token,
                    ], 401);
                }
                                
                $students = Student::where('supervisor', $token)->get();
                
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
            public function displayStudentSup(Request $request)
            {
                $token = $request->header('Authorization');
                $token = str_replace('Bearer ', "", $token);
                $lecturer = Lecturer::where('email', $token)->first();
                            
                if (!$lecturer) {
                    return response()->json([
                        'success' => false,
                        'message' => $token,
                    ], 401);
                }
                
                $lecturerId = $lecturer->id;
                $students = Student::where('supervisor', $lecturerId)->get();
                
                $data = $students->map(function ($student)  {
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
                        'Pro' =>$progressData['Pro'] ?? null,
                        'IR' => $progressData['IR'] ?? null, 
                        'Doc' => $progressData['Doc'] ?? null, 
                        'Pre' => $progressData['Pre'] ?? null, 
                    ];
                });
            
                return response()->json([
                    'success' => true,
                    'data' => $data,
                ]);
            }
            public function displaySecOwnStudents(Request $request)
            {
                $token = $request->header('Authorization');
                $token = str_replace('Bearer ', "", $token);
                $lecturer = Lecturer::where('id', $token)->first();
                            
                if (!$lecturer) {
                    return response()->json([
                        'success' => false,
                        'message' => $token,
                    ], 401);
                }
                
                // $field_of_study = $lecturer->field_of_study;
                $students = Student::where('secondmarker', $token)->get();
                
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
            public function displayStudentSec(Request $request)
            {
                $token = $request->header('Authorization');
                $token = str_replace('Bearer ', "", $token);
                $lecturer = Lecturer::where('email', $token)->first();
                            
                if (!$lecturer) {
                    return response()->json([
                        'success' => false,
                        'message' => $token,
                    ], 401);
                }
                
                $lecturerId = $lecturer->id;
                $students = Student::where('secondmarker', $lecturerId)->get();
                
                $data = $students->map(function ($student)  {
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

            public function displayLecStuProfile(Request $request)
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
        
                // $supervisor = $student->supervisor ? $student->supervisor : 'Not assigned';
                // $secondmarker = $student->second_marker ? $student->second_marker : 'Not assigned';
        
                // $lecturers = Lecturer::where('field_of_study', $student->field_of_study)->get(['name', 'id']);
                
                $data = [
                    'name' => $student->name,
                    'tp_number' => $student->tp_number,
                    'title' => $student->title,
                    'field_of_study' => $student->field_of_study,
                    'specialism' => $student->specialism,
                    'email' => $student->email,                                        
                ];
        
                return response()->json([
                    'success' => true,
                    'data' => $data,
                ]);
            }
            public function updateProgression(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        Log::info($token);

        $tokenValues = explode(' ', $token);
        $tp_number = $tokenValues[0];        
        // $Pro = $tokenValues[1];
        // $IR = $tokenValues[2];
        // $Doc = $tokenValues[3];
        // $Pre = $tokenValues[4];
        
        $progressData = [
            'tp_number' => $token,           
            'Pro' => $request->input('Pro'),
            'IR' => $request->input('IR'),
            'Doc' => $request->input('Doc'),
            'Pre' => $request->input('Pre'),
        ];    
    
       

        return response()->json([
            'success' => true,
            'message' => 'Updated Results Successfully!',
            'data' => $progressData,
        ]);
    }

            
}