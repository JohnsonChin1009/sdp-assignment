<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lecturer;
use App\Models\Student;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

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
                
                
                $data = $students->map(function ($student) {
                    $supervisor = Lecturer::find($student->supervisor);
                    $secondMarker = Lecturer::find($student->secondmarker);
                    $progressData = null;
                    $storedData = Storage::get('progress_data.json');
                $progressArray = json_decode($storedData, true) ?? [];
                   foreach($progressArray as $progress){
                    if($progress['tp_number']===$student->tp_number && $progress['Mark']==1){
                        $progressData = $progress;
                        break;
                    }
                    
                   }
                    
                   
                    return [
                        'name' => $student->name,
                        'tp_number' => $student->tp_number,
                        'title' => $student->title,
                        'field_of_study' => $student->field_of_study,
                        'specialism' => $student->specialism,
                        'email' => $student->email,
                        'supervisor' => $supervisor ? $supervisor->name : null,
                        'second_marker' => $secondMarker ? $secondMarker->name : null,
                        'Pro' => $progressData ? $progressData['Pro'] : null,
                        'IR' => $progressData ? $progressData['IR'] : null,
                        'Doc' =>  $progressData ? $progressData['Doc'] : null,
                        'Pre' => $progressData ? $progressData['Pre'] : null,
        
                        
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
                    $progressData = null;
                    $storedData = Storage::get('progress_data.json');
                $progressArray = json_decode($storedData, true) ?? [];
                   foreach($progressArray as $progress){
                    if($progress['tp_number']===$student->tp_number && $progress['Mark']==2 ){
                        $progressData = $progress;
                        break;
                    }
                    
                   }
                    return [
                        'name' => $student->name,
                        'tp_number' => $student->tp_number,
                        'title' => $student->title,
                        'field_of_study' => $student->field_of_study,
                        'specialism' => $student->specialism,
                        'email' => $student->email,
                        'supervisor' => $supervisor ? $supervisor->name : null,
                        'second_marker' => $secondMarker ? $secondMarker->name : null,
                        'Pro' => $progressData ? $progressData['Pro'] : null,
                        'IR' => $progressData ? $progressData['IR'] : null,
                        'Doc' =>  $progressData ? $progressData['Doc'] : null,
                        'Pre' => $progressData ? $progressData['Pre'] : null,
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
                $storedData = Storage::get('progress_data.json');
                $progressArray = json_decode($storedData, true) ?? [];
                $progressData = null;
               
                   foreach($progressArray as $progress){
                    if($progress['tp_number']===$student->tp_number){
                        $progressData = $progress;
                        break;
                    }
                    
                   }
                
                $data = [
                    'name' => $student->name,
                    'tp_number' => $student->tp_number,
                    'title' => $student->title,
                    'field_of_study' => $student->field_of_study,
                    'specialism' => $student->specialism,
                    'email' => $student->email,   
                    'Pro' => $progressData ? $progressData['Pro'] : null,
                    'IR' => $progressData ? $progressData['IR'] : null,
                    'Doc' =>  $progressData ? $progressData['Doc'] : null,
                    'Pre' => $progressData ? $progressData['Pre'] : null,                                     
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

    $progressData = [
        'tp_number' => $tp_number,
        'Pro' => $request->input('Pro'),
        'IR' => $request->input('IR'),
        'Doc' => $request->input('Doc'),
        'Pre' => $request->input('Pre'),
        'Mark' => $request->input('Mark'),
    ];

    $storedData = Storage::get('progress_data.json');
    $progressArray = json_decode($storedData, true) ?? [];

    // Find the index of the existing progress data for the given tp_number
    $index = array_search($tp_number, array_column($progressArray, 'tp_number'));

    if ($index !== false) {
        // If the progress data for the tp_number already exists, update the mark
        $progressArray[$index]['Pro'] = $progressData['Pro'];
        $progressArray[$index]['IR'] = $progressData['IR'];
        $progressArray[$index]['Doc'] = $progressData['Doc'];
        $progressArray[$index]['Pre'] = $progressData['Pre'];
    } else {
        // If the progress data doesn't exist, add it to the array
        $progressArray[] = $progressData;
    }

    // Log the progress array before storing it
    Log::info('Progress Array before storage: ' . json_encode($progressArray));

    // Store the updated progress array back to storage
    Storage::put('progress_data.json', json_encode($progressArray));

    // Log the progress array after storing it
    Log::info('Progress Array after storage: ' . json_encode($progressArray));

    // Retrieve the updated progress array
    $data = $this->displayStudentSup($request);
    return response()->json([
        'success' => true,
        'message' => 'Updated Results Successfully!',
        'update1' => $progressData,
        
    ]);
}

            
}