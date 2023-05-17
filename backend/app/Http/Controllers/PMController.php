<?php

namespace App\Http\Controllers;

use App\Models\Lecturer;
use App\Models\ProjectManager;
use App\Models\Student;
use App\Models\Result;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

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
                'message' => 'Error finding lecturer record',    
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

        $supervisor = $request -> input('supervisor');
        $secondMarker = $request->input('secondMarker');
        $tokenValues = explode(" ", $token);
        $tp_number = $tokenValues[0];
        // $supervisor = $tokenValues[1];
        // $secondMarker = $tokenValues[2];

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


    public function SearchPM(Request $request)
    {
        $name = $request->input('result');
        $result = Lecturer::where('name', 'like', '%' . $name . '%')->get();

        if (!$result) {
            return response()->json([
                'success' => false,
                'message' => 'The Project Manager name cannot be found',
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => $result,
        ]);
    }

   

    public function SearchStu(Request $request)
    {
        $name = $request->input('result');
        $result = Student::where('name', 'like', '%' . $name . '%')->get();

        if (!$result) {
            return response()->json([
                'success' => false,
                'message' => 'The Student name cannot be found',
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => $result,
        ]);
    }

    public function updatesturesult(Request $request)
    {
        $token = $request->header("Authorization");
        $token = str_replace('Bearer ', "", $token);

        Log::info($token);

                  
        $tokenValues = explode(',', $token);
        $tp_number = $tokenValues[0];
        $finalMark = $tokenValues[1];

    
        $finalMark = $request->input('finalMark');
        $title = Student::where('tp_number', $tp_number)->value('title');
        $student = Student::where('tp_number', $tp_number)->first();
        $result = Result::where('tp_number', $tp_number)->first();
        

        $result = Result::updateOrCreate(
            ['tp_number' => $tp_number],
            ['finalmark' => $finalMark, 
            'firstmark' => $result ? $result->firstmark : null,
            'secondmark' => $result ? $result->secondmark : null,            
            'title' => $title]
        );
    
        

        if(!$result)
        {
            return response()->json([
                'success' => false,
                'message' => 'Student not found in database',
            ]);
        }
        $result->finalmark = $finalMark;
        $result->save();

        

        return response()->json([
            'success' => true,
            'message' => 'Student mark updated successfully',
        ]);
    }
    
    public function displayResult(Request $request)
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
                    $storedData = Storage::get('progress_data.json');
                    $progressArray = json_decode($storedData, true) ?: [];
                    $progressData = null;
                    $results = Result::where('tp_number', $student->tp_number)->get();
                    $firstMarkTotal = 0;
                    $firstMarkCount = 0;
                    $secondMarkTotal = 0;
                    $secondMarkCount = 0;
                    $finalMark = Result::value('finalmark')? : null;
                    
                       foreach($progressArray as $progress){
                        if($progress['tp_number']===$student->tp_number){
                            $progressData = $progress;                            
                            break;
                        }
                        
                       }
                       if ($progressData) {
                        $firstMark = $progressData['1'] ?? null;
                        $secondMark = $progressData['2'] ?? null;
                    
                        if ($firstMark !== null) {
                            $firstMarkTotal += array_sum($firstMark);
                        }
                    
                        if ($secondMark !== null) {
                            $secondMarkTotal = array_sum($secondMark);
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
                                          
                        'firstMark' => $firstMarkTotal,
                        'secondMark' => $secondMarkTotal,
                        'finalMark' => $finalMark, 
                    ];
                });
                                                          
                return response()->json([
                    'success' => true,
                    'data' => $data,
                ]);
            }
            public function displayPMStuResult(Request $request)
            {
               
                $token = $request->header('Authorization');
                $token = str_replace('Bearer ', "", $token);
                $students = Student::where('tp_number', $token)->get();
                            
                if (!$students) {
                    return response()->json([
                        'success' => false,
                        'message' => $token,
                    ], 401);
                }
                
                
               
                
                
                $data = $students->map(function ($student) {
                    $supervisor = Lecturer::find($student->supervisor);
                    $secondMarker = Lecturer::find($student->secondmarker);
                    $storedData = Storage::get('progress_data.json');
                    $progressArray = json_decode($storedData, true) ?: [];
                    $progressData = null;
                    $results = Result::where('tp_number', $student->tp_number)->get();
                    $firstMarkTotal = 0;
                    $firstMarkCount = 0;
                    $secondMarkTotal = 0;
                    $secondMarkCount = 0;
                    $finalMark = Result::value('finalmark')? : null;
                    
                       foreach($progressArray as $progress){
                        if($progress['tp_number']===$student->tp_number){
                            $progressData = $progress; 
                            
                            if ($progressData) {
                                $firstMark = $progressData['1'] ?? null;
                                $secondMark = $progressData['2'] ?? null;
                            
                                if ($firstMark !== null) {
                                    $firstMarkTotal += array_sum($firstMark);
                                }
                            
                                if ($secondMark !== null) {
                                    $secondMarkTotal = array_sum($secondMark);
                                }
                            }                 
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
                        'firstMark' => $firstMarkTotal,
                        'secondMark' => $secondMarkTotal,
                        'finalMark' => $finalMark, 
                    ];
                });
                                                          
                return response()->json([
                    'success' => true,
                    'data' => $data,
                ]);
            }


}

