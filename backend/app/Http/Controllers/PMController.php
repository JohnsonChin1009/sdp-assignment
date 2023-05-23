<?php

namespace App\Http\Controllers;

use App\Models\Lecturer;
use App\Models\ProjectManager;
use App\Models\Student;
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
                'intake_code' => $student->intake_code,
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
    if (!$student) {
        return response()->json([
            'success' => false,
            'message' => 'Error finding student record',
        ]);
    }

    $supervisor = $student->supervisor ? Lecturer::find($student->supervisor)->name : 'Not assigned';
    $secondmarker = $student->second_marker ? Lecturer::find($student->second_marker)->name : 'Not assigned';

    $lecturers = Lecturer::where('field_of_study', $student->field_of_study)->get(['name', 'id', 'supervisor_list', 'secondmarker_list']);

    $lecturers->transform(function ($lecturer) {
        $lecturer->supervisor_count = $lecturer->supervisor_list ? count($lecturer->supervisor_list) : 0;
        $lecturer->secondmarker_count = $lecturer->secondmarker_list ? count($lecturer->secondmarker_list) : 0;
        unset($lecturer->supervisor_list, $lecturer->secondmarker_list);
        return $lecturer;
    });

    $supervisorCount = $student->supervisor ? count(Lecturer::find($student->supervisor)->supervisor_list) : 0;
    $secondmarkerCount = $student->second_marker ? count(Lecturer::find($student->second_marker)->secondmarker_list) : 0;


    $data = [
        'name' => $student->name,
        'tp_number' => $student->tp_number,
        'title' => $student->title,
        'field_of_study' => $student->field_of_study,
        'specialism' => $student->specialism,
        'email' => $student->email,
        'intake_code' => $student->intake_code,
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

        $supervisorId = $request->input('supervisor');
        $secondMarkerId = $request->input('secondMarker');
        $tokenValues = explode(" ", $token);
        $tpNumber = $tokenValues[0];

        $student = Student::where('tp_number', $tpNumber)->first();

        if (!$student) {
            return response()->json([
                'success' => false,
                'message' => 'Student record not found',
            ]);
        }

        $supervisor = Lecturer::find($supervisorId);
        $secondMarker = Lecturer::find($secondMarkerId);

        if (!$supervisor || !$secondMarker) {
            return response()->json([
                'success' => false,
                'message' => 'Supervisor or Second Marker not found',
            ]);
        }

        // Add tp_number to the supervisor's list
        $supervisorList = $supervisor->supervisor_list ?? [];
        $supervisorList[] = $tpNumber;
        $supervisor->supervisor_list = array_slice($supervisorList, 0, 5); // Limit the array to 5 items

        // Add tp_number to the second marker's list
        $secondMarkerList = $secondMarker->secondmarker_list ?? [];
        $secondMarkerList[] = $tpNumber;
        $secondMarker->secondmarker_list = array_slice($secondMarkerList, 0, 5); // Limit the array to 5 items

        // Save the lecturer records
        $supervisor->save();
        $secondMarker->save();

        $student->supervisor = $supervisorId;
        $student->secondmarker = $secondMarkerId;
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

    // public function updatesturesult(Request $request)
    // {
    //     $token = $request->header("Authorization");
    //     $token = str_replace('Bearer ', "", $token);

    //     Log::info($token);

                  
    //     $tokenValues = explode(',', $token);
    //     $tp_number = $tokenValues[0];
    //     $finalMark = $tokenValues[1];

    
    //     $finalMark = $request->input('finalMark');
    //     $title = Student::where('tp_number', $tp_number)->value('title');
    //     $student = Student::where('tp_number', $tp_number)->first();
    //     $result = Result::where('tp_number', $tp_number)->first();
        

    //     $result = Result::updateOrCreate(
    //         ['tp_number' => $tp_number],
    //         ['finalmark' => $finalMark, 
    //         'firstmark' => $result ? $result->firstmark : null,
    //         'secondmark' => $result ? $result->secondmark : null,            
    //         'title' => $title]
    //     );
    
        

    //     if(!$result)
    //     {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Student not found in database',
    //         ]);
    //     }
    //     $result->finalmark = $finalMark;
    //     $result->save();

        

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Student mark updated successfully',
    //     ]);
    // }
    public function updatesturesult(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        Log::info($token);
    
        $tokenValues = explode(' ', $token);
        $tp_number = $tokenValues[0];
       
    
        $resultData = [
            'tp_number' => $tp_number,
            'finalMark' => $request->input('finalMark'),            
        ];
    
        $storedData1 = Storage::get('result_data.json');
        $resultArray = json_decode($storedData1, true) ?? [];
    
        // Find the index of the existing progress data for the given tp_number
        $index = array_search($tp_number, array_column($resultArray, 'tp_number'));
    
        if ($index !== false) {
            // If the progress data for the tp_number already exists, update the mark
            $resultArray[$index]['finalMark'] = $resultData['finalMark'];           
        } else {
            // If the progress data doesn't exist, add it to the array
            $resultArray[] = $resultData;
        }
    
        // Log the progress array before storing it
        Log::info('Result Array before storage: ' . json_encode($resultArray));
    
        // Store the updated progress array back to storage
        Storage::put('result_data.json', json_encode($resultArray));
    
        // Log the progress array after storing it
        Log::info('Result Array after storage: ' . json_encode($resultArray));
    
        // Retrieve the updated progress array
        $data = $this->displayPMStuResult($request);       
        $data = $this->displayResult($request);
        return response()->json([
            'success' => true,
            'message' => 'Updated Results Successfully!',
            'update1' => $resultData,
            
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
                    // $storedData = Storage::get('progress_data.json');
                    // $progressArray = json_decode($storedData, true) ?: [];
                    // $progressData = null;
                    $storedData1 = Storage::get('result_data.json');
                    $resultArray = json_decode($storedData1, true) ?: [];
                    $resultData = null;
                   
                    //    foreach($progressArray as $progress){
                    //     if($progress['tp_number']===$student->tp_number){
                    //         $progressData = $progress;                            
                    //         break;
                    //     }
                        
                    //    }      
                       foreach($resultArray as $progress1){
                        if($progress1['tp_number']===$student->tp_number){
                            $resultData = $progress1;                            
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
                        'intake_code'=> $student->intake_code,
                        'supervisor' => $supervisor ? $supervisor->name : null,
                        'second_marker' => $secondMarker ? $secondMarker->name : null,                       
                        'finalMark' =>  $resultData ? $resultData['finalMark'] : null,  
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
            // $storedData = Storage::get('progress_data.json');
            // $progressArray = json_decode($storedData, true) ?: [];
            // $progressData = null;
            $storedData1 = Storage::get('result_data.json');
            $resultArray = json_decode($storedData1, true) ?: [];
            $resultData = null;
    
            
            
            
                // foreach($progressArray as $progress){
                // if($progress['tp_number']===$student->tp_number && $progress['Mark']==1 ){
                //     $progressData = $progress; 
                                                            
                //     break;
                // }
                
                // }
                foreach($resultArray as $progress1){
                    if($progress1['tp_number']===$student->tp_number){
                        $resultData = $progress1;                            
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
                'intake_code' =>$student->intake_code,
                'supervisor' => $supervisor ? $supervisor->name : null,
                'second_marker' => $secondMarker ? $secondMarker->name : null,       
                // 'Pro' => $progressData ? $progressData['Pro'] : null,                 
                // 'IR' => $progressData ? $progressData['IR'] : null,
                // 'Doc' =>  $progressData ? $progressData['Doc'] : null,
                // 'Pre' => $progressData ? $progressData['Pre'] : null,   
                'finalMark' =>  $resultData ? $resultData['finalMark'] : null,                      
            ];
        });
                                                    
        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    }
    // public function displayPMStuResult2(Request $request)
    // {
        
    //     $token = $request->header('Authorization');
    //     $token = str_replace('Bearer ', "", $token);
    //     $students = Student::where('tp_number', $token)->get();
                    
    //     if (!$students) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => $token,
    //         ], 401);
    //     }
        
    //     $data = $students->map(function ($student) {
    //         $supervisor = Lecturer::find($student->supervisor);
    //         $secondMarker = Lecturer::find($student->secondmarker);
    //         $storedData = Storage::get('progress_data.json');
    //         $progressArray = json_decode($storedData, true) ?: [];
    //         $progressData = null;
                                               
            
    //             foreach($progressArray as $progress){
    //             if($progress['tp_number']===$student->tp_number && $progress['Mark']==2 ){
    //                 $progressData = $progress; 
                                                            
    //                 break;
    //             }
                
    //             }
                

    //         return [
    //             'name' => $student->name,
    //             'tp_number' => $student->tp_number,
    //             'title' => $student->title,
    //             'field_of_study' => $student->field_of_study,
    //             'specialism' => $student->specialism,
    //             'email' => $student->email,
    //             'supervisor' => $supervisor ? $supervisor->name : null,
    //             'second_marker' => $secondMarker ? $secondMarker->name : null,       
    //             'Pro' => $progressData ? $progressData['Pro'] : null,                 
    //             'IR' => $progressData ? $progressData['IR'] : null,
    //             'Doc' =>  $progressData ? $progressData['Doc'] : null,
    //             'Pre' => $progressData ? $progressData['Pre'] : null,  
                                      
    //         ];
    //     });
                                                    
    //     return response()->json([
    //         'success' => true,
    //         'data1' => $data,
    //     ]);
    // }


}

